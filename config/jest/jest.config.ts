import path from 'path';

export default {
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),

    },
};
