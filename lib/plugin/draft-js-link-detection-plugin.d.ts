import { EditorState } from 'draft-js';
export declare function editorStateSettingExplicitLink(editorState: any, urlOrNull: any): EditorState;
export declare function editorStateSettingLink(editorState: EditorState, selection: any, data: any): EditorState;
export declare function getCurrentLinkEntityKey(editorState: any): any;
export declare function getCurrentLink(editorState: any): any;
declare const createLinkifyPlugin: () => {
    decorators: {
        strategy: (contentBlock: any, callback: any, contentState: any) => void;
        component: (props: any) => JSX.Element;
    }[];
    onChange: (editorState: any) => any;
};
export default createLinkifyPlugin;
