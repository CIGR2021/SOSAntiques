module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@gluestack-ui|nativewind|@legendapp/motion|@expo/html-elements|react-native-safe-area-context|react-native-fast-image)/)',
  ],
  setupFiles: [
    '<rootDir>/@/__mocks__/fileMock.js',
    '<rootDir>/@/__mocks__/react-native-fast-image.js',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/@/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/@/__mocks__/styleMock.js',
    '^@/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      { configFile: './babel.config.js' },
    ],
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '@/**/*.{js,jsx,ts,tsx}',
    '!@/**/*.d.ts',
    '!@/**/*.stories.{js,jsx,ts,tsx}',
    '!@/**/*.test.{js,jsx,ts,tsx}',
    '!@/**/index.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  verbose: true, // Exibe logs detalhados durante a execução dos testes
  moduleDirectories: ['node_modules', '<rootDir>/@/__mocks__'],
};
