# draft-js-link-detection-plugin

### [Demo page](https://fedorovsky.github.io/draft-js-link-detection-plugin/?path=/story/components--editor)

### Installation:
```npm i draft-js-link-detection-plugin```

### Usage:

```javascript
import Editor from 'draft-js-plugins-editor';
import createLinkDetectionPlugin from 'draft-js-link-detection-plugin';

const linkDetectionPlugin = createLinkDetectionPlugin();
const plugins = [linkDetectionPlugin];

<Editor
    ref={editorRef}
    plugins={plugins}
    editorState={editorState}
    onChange={handleChangeEditor}
/>
```
