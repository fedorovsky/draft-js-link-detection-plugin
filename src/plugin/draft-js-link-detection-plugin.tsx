import * as React from 'react';
import {
  RichUtils,
  Modifier,
  EditorState,
  SelectionState,
  ContentState,
  ContentBlock,
} from 'draft-js';
// import isURL from '../utils/isURL';
import linkifyIt from 'linkify-it';
import getUrlFromString from '../utils/getUrlFromString';

/*
Returns editor state with a link entity created / updated to hold the link @data
for the range specified by @selection
*/
type LinkData = {
  explicit: boolean;
  url: string | null;
};

export function editorStateSettingLink(
  editorState: EditorState,
  selection: SelectionState,
  data: LinkData,
) {
  const contentState = editorState.getCurrentContent();
  const entityKey = getCurrentLinkEntityKey(editorState);

  let nextEditorState = editorState;

  if (!entityKey) {
    const contentStateWithEntity = contentState.createEntity(
      'LINK',
      'MUTABLE',
      data,
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    nextEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    nextEditorState = RichUtils.toggleLink(
      nextEditorState,
      selection,
      entityKey,
    );
  } else {
    nextEditorState = EditorState.set(editorState, {
      currentContent: editorState
        .getCurrentContent()
        .replaceEntityData(entityKey, data),
    });
    nextEditorState = EditorState.forceSelection(
      nextEditorState,
      editorState.getSelection(),
    );
  }

  return nextEditorState;
}

/*
Returns the entityKey for the link entity the user is currently within.
*/
export function getCurrentLinkEntityKey(editorState: EditorState) {
  const contentState = editorState.getCurrentContent();
  const startKey = editorState.getSelection().getStartKey();
  const startOffset = editorState.getSelection().getStartOffset();
  const block = contentState.getBlockForKey(startKey);

  const linkKey = block.getEntityAt(
    Math.min(block.getText().length - 1, startOffset),
  );

  if (linkKey) {
    const linkInstance = contentState.getEntity(linkKey);
    if (linkInstance.getType() === 'LINK') {
      return linkKey;
    }
  }
  return null;
}

/*
Returns the URL for the link entity the user is currently within.
*/
export function getCurrentLink(editorState: EditorState) {
  const entityKey = getCurrentLinkEntityKey(editorState);
  return (
    entityKey &&
    editorState
      .getCurrentContent()
      .getEntity(entityKey)
      .getData().url
  );
}

/* DEFAULT LINK COMPONENT */
interface LinkProps {
  contentState: ContentState;
  entityKey: string;
}
const Link: React.FC<LinkProps> = props => {
  const data = props.contentState.getEntity(props.entityKey).getData();
  const { url } = data;
  if (!url) {
    return <span>{props.children}</span>;
  }
  return (
    <a href={url} title={url}>
      {props.children}
    </a>
  );
};

function findLinkEntities(
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState,
) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    if (!entityKey) return;
    const entity = contentState.getEntity(entityKey);
    return entity.getType() === 'LINK' && entity.getData().url;
  }, callback);
}

interface Options {
  tlds?: string[]; // accepted top-level domains
  linkComponent?: React.ReactNode; // link component to render
}
const createLinkDetectionPlugin = (options: Options = {}) => {
  const { tlds, linkComponent } = options;

  if (tlds?.length) {

  }

  const linkify = tlds?.length ? linkifyIt().tlds(tlds) : linkifyIt();

  function isURL(text: string) {
    return !!linkify.match(text);
  }

  return {
    decorators: [
      {
        strategy: findLinkEntities,
        component: linkComponent ?? Link,
      },
    ],
    /* The method is always called when we change the data in the editor. */
    onChange: (editorState: EditorState) => {
      // Returns the current contents of the editor.
      const contentState = editorState.getCurrentContent();

      // Returns the current cursor/selection state of the editor.
      const selection = editorState.getSelection();

      if (!selection || !selection.isCollapsed()) {
        return editorState;
      }

      const cursorOffset = selection.getStartOffset();
      const cursorBlockKey = selection.getStartKey();
      const cursorBlock = contentState.getBlockForKey(cursorBlockKey);

      if (cursorBlock.getType() !== 'unstyled') {
        return editorState;
      }

      // Step 1: Get the word around the cursor by splitting the current block's text
      const text = cursorBlock.getText();
      const currentWordStart = text.lastIndexOf(' ', cursorOffset) + 1;
      let currentWordEnd = text.indexOf(' ', cursorOffset);
      if (currentWordEnd === -1) {
        currentWordEnd = text.length;
      }

      const currentWord = text.substr(
        currentWordStart,
        currentWordEnd - currentWordStart,
      );

      const currentWordIsURL = isURL(currentWord);

      // Step 2: Find the existing LINK entity under the user's cursor
      let currentLinkEntityKey = cursorBlock.getEntityAt(
        Math.min(text.length - 1, cursorOffset),
      );
      const inst =
        currentLinkEntityKey && contentState.getEntity(currentLinkEntityKey);
      if (inst && inst.getType() !== 'LINK') {
        currentLinkEntityKey = '';
      }

      if (currentLinkEntityKey) {
        // Note: we don't touch link values added / removed "explicitly" via the link
        // toolbar button. This means you can make a link with text that doesn't match the link.
        const entityExistingData = contentState
          .getEntity(currentLinkEntityKey)
          .getData();
        if (entityExistingData.explicit) {
          return editorState;
        }

        if (currentWordIsURL) {
          // We are modifying the URL - update the entity to reflect the current text
          const contentState = editorState.getCurrentContent();
          return EditorState.set(editorState, {
            currentContent: contentState.replaceEntityData(
              currentLinkEntityKey,
              {
                explicit: false,
                url: getUrlFromString(currentWord),
              },
            ),
          });
        } else {
          // We are no longer in a URL but the entity is still present. Remove it from
          // the current character so the linkifying "ends".
          const entityRange = new SelectionState({
            anchorOffset: currentWordStart,
            anchorKey: cursorBlockKey,
            focusOffset: currentWordEnd,
            focusKey: cursorBlockKey,
            isBackward: false,
            hasFocus: true
          });

          return EditorState.set(editorState, {
            currentContent: Modifier.applyEntity(editorState.getCurrentContent(), entityRange, null)
          });
        }
      }

      // There is no entity beneath the current word, but it looks like a URL. Linkify it!
      if (!currentLinkEntityKey && currentWordIsURL) {
        const entityRange = new SelectionState({
          anchorOffset: currentWordStart,
          anchorKey: cursorBlockKey,
          focusOffset: currentWordEnd,
          focusKey: cursorBlockKey,
          isBackward: false,
          hasFocus: false,
        });

        let newEditorState = editorStateSettingLink(editorState, entityRange, {
          explicit: false,
          url: getUrlFromString(currentWord),
        });

        // reset selection to the initial cursor to avoid selecting the entire links
        newEditorState = EditorState.acceptSelection(newEditorState, selection);
        return newEditorState;
      }

      return editorState;
    },
  };
};

export default createLinkDetectionPlugin;
