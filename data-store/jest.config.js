module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
      global: {
          branches: 85,
          functions: 85,
          lines: 85,
          statements: 85
      }
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover']
}
