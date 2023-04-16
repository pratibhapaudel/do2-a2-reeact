module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    "/\\.css$/": "<rootDir>/__mocks__/styleMock.js",
  },
  module: {
    rules: [
      // ...
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
