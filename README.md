# draft-js-link-detection-plugin

### [Demo page](https://fedorovsky.github.io/draft-js-link-detection-plugin/?path=/story/components--editor)

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
