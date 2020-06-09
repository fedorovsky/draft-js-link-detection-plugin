"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isURL_1 = __importDefault(require("./isURL"));
describe('isUrl', function () {
    it('[http://test.com]', function () {
        expect(isURL_1.default('http://test.com')).toBeTruthy();
    });
    it('[test.com]', function () {
        expect(isURL_1.default('test.com')).toBeTruthy();
    });
});
