import * as React from 'react';
import PluginEditor from 'draft-js-plugins-editor';
import ReactJson from 'react-json-view';
import { convertToRaw, EditorState, convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import createLinkDetectionPlugin from '../../plugin/draft-js-link-detection-plugin';
import { Wrapper } from './EditorWithData.styled';

const linkDetectionPlugin = createLinkDetectionPlugin();
const plugins = [linkDetectionPlugin];

const contentState = convertFromRaw({
  blocks: [
    {
      key: '7h6g0',
      text: 'Hello world example.com',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [{ offset: 6, length: 5, style: 'BOLD' }], // ... word ... 'BOLD'
      entityRanges: [{ offset: 12, length: 11, key: 0 }],
      data: {},
    },
  ],
  entityMap: {
    '0': {
      type: 'LINK',
      mutability: 'MUTABLE',
      data: { explicit: false, url: 'http://example.com' },
    },
  },
});

const EditorWithData = () => {
  const editorRef = React.useRef<PluginEditor | null>(null);

  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createWithContent(contentState),
  );

  const handleChangeEditor = (state: EditorState) => {
    setEditorState(state);
  };

  const html = React.useMemo(() => {
    const currentContent = editorState.getCurrentContent();
    return stateToHTML(currentContent);
  }, [editorState]);

  return (
    <div>
      <Wrapper>
        <PluginEditor
          ref={editorRef}
          plugins={plugins}
          editorState={editorState}
          onChange={handleChangeEditor}
        />
      </Wrapper>
      <div>
        <h3>Result (HTML):</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <ReactJson
        src={convertToRaw(editorState.getCurrentContent())}
        collapsed={3}
      />
    </div>
  );
};

export default EditorWithData;
