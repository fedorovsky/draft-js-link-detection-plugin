"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getUrlFromString_1 = __importDefault(require("./getUrlFromString"));
describe('getUrlFromString', function () {
    it('[http://test.com]', function () {
        expect(getUrlFromString_1.default('http://test.com')).toBe('http://test.com');
    });
    it('[test.com]', function () {
        expect(getUrlFromString_1.default('http://test.com')).toBe('http://test.com');
    });
});
