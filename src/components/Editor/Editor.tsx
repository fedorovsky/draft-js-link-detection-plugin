import * as React from 'react';
import PluginEditor from 'draft-js-plugins-editor';
import ReactJson from 'react-json-view';
import { convertToRaw, EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import createLinkDetectionPlugin from '../../plugin/draft-js-link-detection-plugin';
import { Wrapper } from './Editor.styled';

const linkDetectionPlugin = createLinkDetectionPlugin();
const plugins = [linkDetectionPlugin];

const Editor = () => {
  const editorRef = React.useRef<PluginEditor | null>(null);

  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createEmpty(),
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

export default Editor;
