module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/lib'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
