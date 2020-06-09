"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var linkify_it_1 = __importDefault(require("linkify-it"));
var linkify = linkify_it_1.default();
function getUrlFromString(text) {
    var matchLinkList = linkify.match(text);
    return matchLinkList && matchLinkList[0].url;
}
exports.default = getUrlFromString;
