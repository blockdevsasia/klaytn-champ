import _ from 'lodash'

export default {
  isLoggedIn: (state) => {
    const result = state.current.displayName !== undefined
    console.log('isLoggedIn: ', result, state.current)
    return result
  },
  address: (state) => _.get(state.data, 'address', ''),
  badge0: (state) => _.get(state.data, 'badge0', ''),
  badge1: (state) => _.get(state.data, 'badge1', ''),
  selectedLevel: (state) => _.get(state.data, 'selectedLevel', '1'),
  level2solution: (state) => _.get(state.data, 'level2solution', ''),
  level3solution: (state) => _.get(state.data, 'level3solution', ''),
  level4solution: (state) => _.get(state.data, 'level4solution', ''),
  level5solution: (state) => _.get(state.data, 'level5solution', '')
}
