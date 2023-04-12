module.exports = {
    preset: 'babel-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    }
  };