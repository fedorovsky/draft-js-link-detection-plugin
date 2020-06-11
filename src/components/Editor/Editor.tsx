import * as React from 'react';
import PluginEditor from 'draft-js-plugins-editor';
import ReactJson from 'react-json-view';
import { convertToRaw, EditorState } from 'draft-js';
import createLinkifyPlugin from '../../plugin/draft-js-link-detection-plugin';
import { Wrapper } from './Editor.styled';

const linkifyPlugin = createLinkifyPlugin();
const plugins = [linkifyPlugin];

const Editor = () => {
  const editorRef = React.useRef<PluginEditor | null>(null);

  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createEmpty(),
  );

  const handleChangeEditor = (state: EditorState) => {
    setEditorState(state);
  };

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
      <ReactJson
        src={convertToRaw(editorState.getCurrentContent())}
        collapsed={3}
      />
    </div>
  );
};

export default Editor;
