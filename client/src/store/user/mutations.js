export default {
  current: function (state, value) {
    state.current = value
  },
  loading: function (state, value) {
    state.loading = value
  },
  level: function (state, value) {
    state.level = value
  },
  random: function (state, value) {
    state.random = value
  },
  submissionProgress: function (state, value) {
    state.submissionProgress = value
  },
  inputAttempts: function (state, value) {
    state.inputAttempts = value
  },
  certificationLevel: function (state, value) {
    state.certificationLevel = value
  }
}
