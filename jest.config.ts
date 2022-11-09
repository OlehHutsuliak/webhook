import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testMatch: ['**/tests/**/*.ts', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: ['dist/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testTimeout: 180000,
};
export default config;
