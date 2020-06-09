import * as React from 'react';
import PluginEditor from 'draft-js-plugins-editor';
import { convertToRaw, EditorState } from 'draft-js';
import createLinkifyPlugin from '../../plugin/draft-js-link-detection-plugin';

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
      <PluginEditor
        ref={editorRef}
        plugins={plugins}
        editorState={editorState}
        onChange={handleChangeEditor}
      />
      <pre>
        {JSON.stringify(convertToRaw(editorState.getCurrentContent()), null, 2)}
      </pre>
    </div>
  );
};

export default Editor;
