export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  textRegex: '.*\\.e2e-spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  colectionCoverageFrom: ['**/*.(t|j)s$'],
  coverageDirectory: '../coverage',
  testEnviroment: 'node',
};
