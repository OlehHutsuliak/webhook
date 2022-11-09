"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    testMatch: ['**/tests/**/*.ts', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    testPathIgnorePatterns: ['dist/'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testTimeout: 180000,
};
exports.default = config;
//# sourceMappingURL=jest.config.js.map