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
  selectedLevel: function (state, value) {
    state.selectedLevel = value
  },
  randomAmount: function (state, value) {
    state.randomAmount = value
  }
}
