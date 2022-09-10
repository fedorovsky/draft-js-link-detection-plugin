import * as React from 'react';
import { EditorState, SelectionState, ContentState, ContentBlock } from 'draft-js';
declare type LinkData = {
    explicit: boolean;
    url: string | null;
};
export declare function editorStateSettingLink(editorState: EditorState, selection: SelectionState, data: LinkData): EditorState;
export declare function getCurrentLinkEntityKey(editorState: EditorState): string | null;
export declare function getCurrentLink(editorState: EditorState): any;
declare function findLinkEntities(contentBlock: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState): void;
interface Options {
    tlds?: string[];
    linkComponent?: React.ReactNode;
}
declare const createLinkDetectionPlugin: (options?: Options) => {
    decorators: {
        strategy: typeof findLinkEntities;
        component: {};
    }[];
    onChange: (editorState: EditorState) => EditorState;
};
export default createLinkDetectionPlugin;
