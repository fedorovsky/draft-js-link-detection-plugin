# draft-js-link-detection-plugin

### Installation:
```npm i draft-js-link-detection-plugin```

### Usage:
```$xslt
import createLinkDetectionPlugin from 'draft-js-link-detection-plugin';

const linkifyPlugin = createLinkDetectionPlugin();
const plugins = [linkifyPlugin];

<Editor
    ref={editorRef}
    plugins={plugins}
    editorState={editorState}
    onChange={handleChangeEditor}
/>
```
