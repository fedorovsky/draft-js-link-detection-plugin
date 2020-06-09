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
exports.getCurrentLink = exports.getCurrentLinkEntityKey = exports.editorStateSettingLink = exports.editorStateSettingExplicitLink = void 0;
var React = __importStar(require("react"));
var draft_js_1 = require("draft-js");
var isURL_1 = __importDefault(require("../utils/isURL"));
var getUrlFromString_1 = __importDefault(require("../utils/getUrlFromString"));
function editorStateSettingExplicitLink(editorState, urlOrNull) {
    return editorStateSettingLink(editorState, editorState.getSelection(), {
        url: urlOrNull,
        explicit: true,
    });
}
exports.editorStateSettingExplicitLink = editorStateSettingExplicitLink;
function editorStateSettingLink(editorState, selection, data) {
    var contentState = editorState.getCurrentContent();
    var entityKey = getCurrentLinkEntityKey(editorState);
    var nextEditorState = editorState;
    if (!entityKey) {
        var contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', data);
        var entityKey_1 = contentStateWithEntity.getLastCreatedEntityKey();
        nextEditorState = draft_js_1.EditorState.set(editorState, {
            currentContent: contentStateWithEntity,
        });
        nextEditorState = draft_js_1.RichUtils.toggleLink(nextEditorState, selection, entityKey_1);
    }
    else {
        nextEditorState = draft_js_1.EditorState.set(editorState, {
            currentContent: editorState
                .getCurrentContent()
                .replaceEntityData(entityKey, data),
        });
        nextEditorState = draft_js_1.EditorState.forceSelection(nextEditorState, editorState.getSelection());
    }
    return nextEditorState;
}
exports.editorStateSettingLink = editorStateSettingLink;
function getCurrentLinkEntityKey(editorState) {
    var contentState = editorState.getCurrentContent();
    var startKey = editorState.getSelection().getStartKey();
    var startOffset = editorState.getSelection().getStartOffset();
    var block = contentState.getBlockForKey(startKey);
    var linkKey = block.getEntityAt(Math.min(block.text.length - 1, startOffset));
    if (linkKey) {
        var linkInstance = contentState.getEntity(linkKey);
        if (linkInstance.getType() === 'LINK') {
            return linkKey;
        }
    }
    return null;
}
exports.getCurrentLinkEntityKey = getCurrentLinkEntityKey;
function getCurrentLink(editorState) {
    var entityKey = getCurrentLinkEntityKey(editorState);
    return (entityKey &&
        editorState
            .getCurrentContent()
            .getEntity(entityKey)
            .getData().url);
}
exports.getCurrentLink = getCurrentLink;
var createLinkifyPlugin = function () {
    var Link = function (props) {
        var data = props.data || props.contentState.getEntity(props.entityKey).getData();
        var url = data.url;
        if (!url) {
            return React.createElement("span", null, props.children);
        }
        return (React.createElement("a", { href: url, title: url }, props.children));
    };
    function findLinkEntities(contentBlock, callback, contentState) {
        contentBlock.findEntityRanges(function (character) {
            var entityKey = character.getEntity();
            if (!entityKey)
                return;
            var entity = contentState.getEntity(entityKey);
            return entity.getType() === 'LINK' && entity.getData().url;
        }, callback);
    }
    return {
        decorators: [
            {
                strategy: findLinkEntities,
                component: Link,
            },
        ],
        onChange: function (editorState) {
            var contentState = editorState.getCurrentContent();
            var selection = editorState.getSelection();
            if (!selection || !selection.isCollapsed()) {
                return editorState;
            }
            var cursorOffset = selection.getStartOffset();
            var cursorBlockKey = selection.getStartKey();
            var cursorBlock = contentState.getBlockForKey(cursorBlockKey);
            if (cursorBlock.type !== 'unstyled') {
                return editorState;
            }
            var text = cursorBlock.text;
            var currentWordStart = text.lastIndexOf(' ', cursorOffset) + 1;
            var currentWordEnd = text.indexOf(' ', cursorOffset);
            if (currentWordEnd === -1) {
                currentWordEnd = text.length;
            }
            var currentWord = text.substr(currentWordStart, currentWordEnd - currentWordStart);
            var currentWordIsURL = isURL_1.default(currentWord);
            var currentLinkEntityKey = cursorBlock.getEntityAt(Math.min(text.length - 1, cursorOffset));
            var inst = currentLinkEntityKey && contentState.getEntity(currentLinkEntityKey);
            if (inst && inst.getType() !== 'LINK') {
                currentLinkEntityKey = null;
            }
            if (currentLinkEntityKey) {
                var entityExistingData = contentState
                    .getEntity(currentLinkEntityKey)
                    .getData();
                if (entityExistingData.explicit) {
                    return editorState;
                }
                if (currentWordIsURL) {
                    var contentState_1 = editorState.getCurrentContent();
                    return draft_js_1.EditorState.set(editorState, {
                        currentContent: contentState_1.replaceEntityData(currentLinkEntityKey, {
                            explicit: false,
                            url: getUrlFromString_1.default(currentWord),
                        }),
                    });
                }
                else {
                    var entityRange = new draft_js_1.SelectionState({
                        anchorOffset: currentWordStart - 1,
                        anchorKey: cursorBlockKey,
                        focusOffset: currentWordStart,
                        focusKey: cursorBlockKey,
                        isBackward: false,
                        hasFocus: true,
                    });
                    return draft_js_1.EditorState.set(editorState, {
                        currentContent: draft_js_1.Modifier.applyEntity(editorState.getCurrentContent(), entityRange, null),
                    });
                }
            }
            if (!currentLinkEntityKey && currentWordIsURL) {
                var entityRange = new draft_js_1.SelectionState({
                    anchorOffset: currentWordStart,
                    anchorKey: cursorBlockKey,
                    focusOffset: currentWordEnd,
                    focusKey: cursorBlockKey,
                    isBackward: false,
                    hasFocus: false,
                });
                var newEditorState = editorStateSettingLink(editorState, entityRange, {
                    explicit: false,
                    url: getUrlFromString_1.default(currentWord),
                });
                newEditorState = draft_js_1.EditorState.acceptSelection(newEditorState, selection);
                return newEditorState;
            }
            return editorState;
        },
    };
};
exports.default = createLinkifyPlugin;
