import getUrlFromString from './getUrlFromString';

describe('getUrlFromString', () => {
  it('[http://test.com]', () => {
    expect(getUrlFromString('http://test.com')).toBe('http://test.com');
  });
  it('[test.com]', () => {
    expect(getUrlFromString('http://test.com')).toBe('http://test.com');
  });
});
