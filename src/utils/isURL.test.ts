import isURL from './isURL';

describe('isUrl', () => {
  it('[http://test.com]', () => {
    expect(isURL('http://test.com')).toBeTruthy();
  });
  it('[test.com]', () => {
    expect(isURL('test.com')).toBeTruthy();
  });
});
