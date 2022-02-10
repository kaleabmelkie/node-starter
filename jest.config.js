export default {
  transform: {
    '^.+\\.(t|j)s$': ['@swc/jest'],
  },
  extensionsToTreatAsEsm: ['.ts'],
}
