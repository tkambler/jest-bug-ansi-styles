module.exports = {
    bail: true,
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleFileExtensions: [
      'js',
      'jsx',
      'ts',
      'tsx',
      'json',
      'module.css',
      'module.scss',
    ],
    moduleNameMapper: {
      "^@built/react/components/(.*)": "<rootDir>/src/components/$1",
      '(.*)styles': 'identity-obj-proxy',
      '(.*).css': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: [
      '<rootDir>/setup-tests.js',
    ],
    roots: [
      'src',
    ],
  };
  