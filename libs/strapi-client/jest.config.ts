const config = {
  displayName: '@trialanderror/strapi',
  preset: '../../jest.preset.ts',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      useESM: true,
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': ['@swc/jest'],
  },
  transformIgnorePatterns: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/@trialanderror/strapi',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}

export default config
