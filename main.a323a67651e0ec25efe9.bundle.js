(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1001:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(0)),draft_js_plugins_editor_1=__importDefault(__webpack_require__(230)),react_json_view_1=__importDefault(__webpack_require__(240)),draft_js_1=__webpack_require__(31),draft_js_export_html_1=__webpack_require__(243),draft_js_link_detection_plugin_1=__importDefault(__webpack_require__(241)),Editor_styled_1=__webpack_require__(1115),plugins=[draft_js_link_detection_plugin_1.default()];exports.default=function(){var editorRef=React.useRef(null),_a=React.useState(draft_js_1.EditorState.createEmpty()),editorState=_a[0],setEditorState=_a[1],html=React.useMemo((function(){var currentContent=editorState.getCurrentContent();return draft_js_export_html_1.stateToHTML(currentContent)}),[editorState]);return React.createElement("div",null,React.createElement(Editor_styled_1.Wrapper,null,React.createElement(draft_js_plugins_editor_1.default,{ref:editorRef,plugins:plugins,editorState:editorState,onChange:function(state){setEditorState(state)}})),React.createElement("div",null,React.createElement("h3",null,"Result (HTML):"),React.createElement("div",{dangerouslySetInnerHTML:{__html:html}})),React.createElement(react_json_view_1.default,{src:draft_js_1.convertToRaw(editorState.getCurrentContent()),collapsed:3}))}},1108:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var linkify=__importDefault(__webpack_require__(433)).default();exports.default=function isURL(text){return!!linkify.match(text)}},1114:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var linkify=__importDefault(__webpack_require__(433)).default();exports.default=function getUrlFromString(text){var matchLinkList=linkify.match(text);return matchLinkList&&matchLinkList[0].url}},1115:function(module,exports,__webpack_require__){"use strict";var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Wrapper=void 0;var templateObject_1,styled_components_1=__importDefault(__webpack_require__(242));exports.Wrapper=styled_components_1.default.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0 1px 8px -3px #ababab;\n  background: #fefefe;\n"],["\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0 1px 8px -3px #ababab;\n  background: #fefefe;\n"])))},1117:function(module,exports,__webpack_require__){"use strict";(function(module){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var withSourceLoader=__webpack_require__(100).withSource,__STORY__=(__webpack_require__(100).addSource,"import * as React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport EditorFromJson from './EditorFromJson';\n\nstoriesOf('Components', module).add('Editor (From JSON)', () => (\n  <EditorFromJson />\n));\n"),__ADDS_MAP__={"components--editor-from-json":{startLoc:{col:36,line:5},endLoc:{col:1,line:7},startBody:{col:58,line:5},endBody:{col:1,line:7}}},React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(125),EditorFromJson_1=__importDefault(__webpack_require__(1118));react_1.storiesOf("Components",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/EditorFromJson.stories.tsx",[],{},"C:\\my-git\\draft-js-link-detection-plugin\\src\\components\\EditorFromJson",{})).add("Editor (From JSON)",(function(){return React.createElement(EditorFromJson_1.default,null)}))}).call(this,__webpack_require__(77)(module))},1118:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(0)),draft_js_plugins_editor_1=__importDefault(__webpack_require__(230)),react_json_view_1=__importDefault(__webpack_require__(240)),draft_js_1=__webpack_require__(31),draft_js_export_html_1=__webpack_require__(243),draft_js_link_detection_plugin_1=__importDefault(__webpack_require__(241)),EditorFromJson_styled_1=__webpack_require__(1119),plugins=[draft_js_link_detection_plugin_1.default()],contentState=draft_js_1.convertFromRaw({blocks:[{key:"7h6g0",text:"Hello world example.com",type:"unstyled",depth:0,inlineStyleRanges:[{offset:6,length:5,style:"BOLD"}],entityRanges:[{offset:12,length:11,key:0}],data:{}}],entityMap:{0:{type:"LINK",mutability:"MUTABLE",data:{explicit:!1,url:"http://example.com"}}}});exports.default=function(){var _a=React.useState(""),json=_a[0],changeJson=_a[1],editorRef=React.useRef(null),_b=React.useState(draft_js_1.EditorState.createWithContent(contentState)),editorState=_b[0],setEditorState=_b[1],html=React.useMemo((function(){var currentContent=editorState.getCurrentContent();return draft_js_export_html_1.stateToHTML(currentContent)}),[editorState]);return React.createElement("div",null,React.createElement(EditorFromJson_styled_1.Section,null,React.createElement(EditorFromJson_styled_1.TextArea,{rows:5,placeholder:"json",onChange:function(e){changeJson(e.target.value)},value:json}),React.createElement("button",{onClick:function(){var contentState=draft_js_1.convertFromRaw(JSON.parse(json));setEditorState(draft_js_1.EditorState.createWithContent(contentState))}},"convert")),React.createElement(EditorFromJson_styled_1.Wrapper,null,React.createElement(draft_js_plugins_editor_1.default,{ref:editorRef,plugins:plugins,editorState:editorState,onChange:function(state){setEditorState(state)}})),React.createElement(EditorFromJson_styled_1.Section,null,React.createElement("h3",null,"Result (HTML):"),React.createElement("div",{dangerouslySetInnerHTML:{__html:html}})),React.createElement(EditorFromJson_styled_1.Section,null,React.createElement("h3",null,"Result (JSON):"),React.createElement("div",null,JSON.stringify(draft_js_1.convertToRaw(editorState.getCurrentContent())))),React.createElement(react_json_view_1.default,{src:draft_js_1.convertToRaw(editorState.getCurrentContent()),collapsed:3}))}},1119:function(module,exports,__webpack_require__){"use strict";var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Wrapper=exports.TextArea=exports.Section=void 0;var templateObject_1,templateObject_2,templateObject_3,styled_components_1=__importDefault(__webpack_require__(242));exports.Section=styled_components_1.default.section(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  display: block;\n  margin-top: 24px;\n  margin-bottom: 24px;\n"],["\n  display: block;\n  margin-top: 24px;\n  margin-bottom: 24px;\n"]))),exports.TextArea=styled_components_1.default.textarea(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0 1px 8px -3px #ababab;\n  background: #fefefe;\n"],["\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0 1px 8px -3px #ababab;\n  background: #fefefe;\n"]))),exports.Wrapper=styled_components_1.default.div(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0 1px 8px -3px #ababab;\n  background: #fefefe;\n"],["\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0 1px 8px -3px #ababab;\n  background: #fefefe;\n"])))},1120:function(module,exports,__webpack_require__){"use strict";(function(module){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var withSourceLoader=__webpack_require__(100).withSource,__STORY__=(__webpack_require__(100).addSource,"import * as React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport EditorWithData from './EditorWithData';\n\nstoriesOf('Components', module).add('Editor (With Data)', () => (\n  <EditorWithData />\n));\n"),__ADDS_MAP__={"components--editor-with-data":{startLoc:{col:36,line:5},endLoc:{col:1,line:7},startBody:{col:58,line:5},endBody:{col:1,line:7}}},React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(125),EditorWithData_1=__importDefault(__webpack_require__(1121));react_1.storiesOf("Components",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/EditorWithData.stories.tsx",[],{},"C:\\my-git\\draft-js-link-detection-plugin\\src\\components\\EditorWithData",{})).add("Editor (With Data)",(function(){return React.createElement(EditorWithData_1.default,null)}))}).call(this,__webpack_require__(77)(module))},1121:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(0)),draft_js_plugins_editor_1=__importDefault(__webpack_require__(230)),react_json_view_1=__importDefault(__webpack_require__(240)),draft_js_1=__webpack_require__(31),draft_js_export_html_1=__webpack_require__(243),draft_js_link_detection_plugin_1=__importDefault(__webpack_require__(241)),EditorWithData_styled_1=__webpack_require__(1122),plugins=[draft_js_link_detection_plugin_1.default()],contentState=draft_js_1.convertFromRaw({blocks:[{key:"7h6g0",text:"Hello world example.com",type:"unstyled",depth:0,inlineStyleRanges:[{offset:6,length:5,style:"BOLD"}],entityRanges:[{offset:12,length:11,key:0}],data:{}}],entityMap:{0:{type:"LINK",mutability:"MUTABLE",data:{explicit:!1,url:"http://example.com"}}}});exports.default=function(){var editorRef=React.useRef(null),_a=React.useState(draft_js_1.EditorState.createWithContent(contentState)),editorState=_a[0],setEditorState=_a[1],html=React.useMemo((function(){var currentContent=editorState.getCurrentContent();return draft_js_export_html_1.stateToHTML(currentContent)}),[editorState]);return React.createElement("div",null,React.createElement(EditorWithData_styled_1.Wrapper,null,React.createElement(draft_js_plugins_editor_1.default,{ref:editorRef,plugins:plugins,editorState:editorState,onChange:function(state){setEditorState(state)}})),React.createElement("div",null,React.createElement("h3",null,"Result (HTML):"),React.createElement("div",{dangerouslySetInnerHTML:{__html:html}})),React.createElement(react_json_view_1.default,{src:draft_js_1.convertToRaw(editorState.getCurrentContent()),collapsed:3}))}},1122:function(module,exports,__webpack_require__){"use strict";var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Wrapper=void 0;var templateObject_1,styled_components_1=__importDefault(__webpack_require__(242));exports.Wrapper=styled_components_1.default.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0 1px 8px -3px #ababab;\n  background: #fefefe;\n"],["\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0 1px 8px -3px #ababab;\n  background: #fefefe;\n"])))},241:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCurrentLink=exports.getCurrentLinkEntityKey=exports.editorStateSettingLink=void 0;var React=__importStar(__webpack_require__(0)),draft_js_1=__webpack_require__(31),isURL_1=__importDefault(__webpack_require__(1108)),getUrlFromString_1=__importDefault(__webpack_require__(1114));function editorStateSettingLink(editorState,selection,data){var contentState=editorState.getCurrentContent(),entityKey=getCurrentLinkEntityKey(editorState),nextEditorState=editorState;if(entityKey)nextEditorState=draft_js_1.EditorState.set(editorState,{currentContent:editorState.getCurrentContent().replaceEntityData(entityKey,data)}),nextEditorState=draft_js_1.EditorState.forceSelection(nextEditorState,editorState.getSelection());else{var contentStateWithEntity=contentState.createEntity("LINK","MUTABLE",data),entityKey_1=contentStateWithEntity.getLastCreatedEntityKey();nextEditorState=draft_js_1.EditorState.set(editorState,{currentContent:contentStateWithEntity}),nextEditorState=draft_js_1.RichUtils.toggleLink(nextEditorState,selection,entityKey_1)}return nextEditorState}function getCurrentLinkEntityKey(editorState){var contentState=editorState.getCurrentContent(),startKey=editorState.getSelection().getStartKey(),startOffset=editorState.getSelection().getStartOffset(),block=contentState.getBlockForKey(startKey),linkKey=block.getEntityAt(Math.min(block.getText().length-1,startOffset));if(linkKey&&"LINK"===contentState.getEntity(linkKey).getType())return linkKey;return null}exports.editorStateSettingLink=editorStateSettingLink,exports.getCurrentLinkEntityKey=getCurrentLinkEntityKey,exports.getCurrentLink=function getCurrentLink(editorState){var entityKey=getCurrentLinkEntityKey(editorState);return entityKey&&editorState.getCurrentContent().getEntity(entityKey).getData().url};var Link=function(props){var url=props.contentState.getEntity(props.entityKey).getData().url;return url?React.createElement("a",{href:url,title:url},props.children):React.createElement("span",null,props.children)};function findLinkEntities(contentBlock,callback,contentState){contentBlock.findEntityRanges((function(character){var entityKey=character.getEntity();if(entityKey){var entity=contentState.getEntity(entityKey);return"LINK"===entity.getType()&&entity.getData().url}}),callback)}exports.default=function(){return{decorators:[{strategy:findLinkEntities,component:Link}],onChange:function(editorState){var contentState=editorState.getCurrentContent(),selection=editorState.getSelection();if(!selection||!selection.isCollapsed())return editorState;var cursorOffset=selection.getStartOffset(),cursorBlockKey=selection.getStartKey(),cursorBlock=contentState.getBlockForKey(cursorBlockKey);if("unstyled"!==cursorBlock.getType())return editorState;var text=cursorBlock.getText(),currentWordStart=text.lastIndexOf(" ",cursorOffset)+1,currentWordEnd=text.indexOf(" ",cursorOffset);-1===currentWordEnd&&(currentWordEnd=text.length);var currentWord=text.substr(currentWordStart,currentWordEnd-currentWordStart),currentWordIsURL=isURL_1.default(currentWord),currentLinkEntityKey=cursorBlock.getEntityAt(Math.min(text.length-1,cursorOffset)),inst=currentLinkEntityKey&&contentState.getEntity(currentLinkEntityKey);if(inst&&"LINK"!==inst.getType()&&(currentLinkEntityKey=""),currentLinkEntityKey){if(contentState.getEntity(currentLinkEntityKey).getData().explicit)return editorState;if(currentWordIsURL){var contentState_1=editorState.getCurrentContent();return draft_js_1.EditorState.set(editorState,{currentContent:contentState_1.replaceEntityData(currentLinkEntityKey,{explicit:!1,url:getUrlFromString_1.default(currentWord)})})}var entityRange=new draft_js_1.SelectionState({anchorOffset:currentWordStart-1,anchorKey:cursorBlockKey,focusOffset:currentWordStart,focusKey:cursorBlockKey,isBackward:!1,hasFocus:!0});return draft_js_1.EditorState.set(editorState,{currentContent:draft_js_1.Modifier.applyEntity(editorState.getCurrentContent(),entityRange,null)})}if(!currentLinkEntityKey&&currentWordIsURL){var newEditorState=editorStateSettingLink(editorState,entityRange=new draft_js_1.SelectionState({anchorOffset:currentWordStart,anchorKey:cursorBlockKey,focusOffset:currentWordEnd,focusKey:cursorBlockKey,isBackward:!1,hasFocus:!1}),{explicit:!1,url:getUrlFromString_1.default(currentWord)});return newEditorState=draft_js_1.EditorState.acceptSelection(newEditorState,selection)}return editorState}}}},437:function(module,exports,__webpack_require__){__webpack_require__(438),__webpack_require__(803),module.exports=__webpack_require__(804)},573:function(module,exports){},804:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(51),__webpack_require__(45),__webpack_require__(40),__webpack_require__(52),__webpack_require__(53);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(125),req=__webpack_require__(997);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(805)(module))},997:function(module,exports,__webpack_require__){var map={"./components/Editor/Editor.stories.tsx":998,"./components/EditorFromJson/EditorFromJson.stories.tsx":1117,"./components/EditorWithData/EditorWithData.stories.tsx":1120};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=997},998:function(module,exports,__webpack_require__){"use strict";(function(module){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var withSourceLoader=__webpack_require__(100).withSource,__STORY__=(__webpack_require__(100).addSource,"import * as React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport Editor from './Editor';\n\nstoriesOf('Components', module).add('Editor', () => <Editor />);\n"),__ADDS_MAP__={"components--editor":{startLoc:{col:36,line:5},endLoc:{col:62,line:5},startBody:{col:46,line:5},endBody:{col:62,line:5}}},React=__importStar(__webpack_require__(0)),react_1=__webpack_require__(125),Editor_1=__importDefault(__webpack_require__(1001));react_1.storiesOf("Components",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/Editor.stories.tsx",[],{},"C:\\my-git\\draft-js-link-detection-plugin\\src\\components\\Editor",{})).add("Editor",(function(){return React.createElement(Editor_1.default,null)}))}).call(this,__webpack_require__(77)(module))}},[[437,1,2]]]);
//# sourceMappingURL=main.a323a67651e0ec25efe9.bundle.js.map