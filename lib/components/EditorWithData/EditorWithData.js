"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var draft_js_plugins_editor_1 = __importDefault(require("draft-js-plugins-editor"));
var react_json_view_1 = __importDefault(require("react-json-view"));
var draft_js_1 = require("draft-js");
var draft_js_export_html_1 = require("draft-js-export-html");
var draft_js_link_detection_plugin_1 = __importDefault(require("../../plugin/draft-js-link-detection-plugin"));
var EditorWithData_styled_1 = require("./EditorWithData.styled");
var linkDetectionPlugin = draft_js_link_detection_plugin_1.default();
var plugins = [linkDetectionPlugin];
var contentState = draft_js_1.convertFromRaw({
    blocks: [
        {
            key: '7h6g0',
            text: 'Hello world example.com',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 6, length: 5, style: 'BOLD' }],
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
var EditorWithData = function () {
    var editorRef = React.useRef(null);
    var _a = React.useState(draft_js_1.EditorState.createWithContent(contentState)), editorState = _a[0], setEditorState = _a[1];
    var handleChangeEditor = function (state) {
        setEditorState(state);
    };
    var html = React.useMemo(function () {
        var currentContent = editorState.getCurrentContent();
        return draft_js_export_html_1.stateToHTML(currentContent);
    }, [editorState]);
    return (React.createElement("div", null,
        React.createElement(EditorWithData_styled_1.Wrapper, null,
            React.createElement(draft_js_plugins_editor_1.default, { ref: editorRef, plugins: plugins, editorState: editorState, onChange: handleChangeEditor })),
        React.createElement("div", null,
            React.createElement("h3", null, "Result (HTML):"),
            React.createElement("div", { dangerouslySetInnerHTML: { __html: html } })),
        React.createElement(react_json_view_1.default, { src: draft_js_1.convertToRaw(editorState.getCurrentContent()), collapsed: 3 })));
};
exports.default = EditorWithData;
