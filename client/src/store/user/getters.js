import _ from 'lodash'

export default {
  isLoggedIn: (state) => {
    let result = state.current.displayName !== undefined
    console.log('isLoggedIn: ', result, state.current)
    return result
  },
  address: (state) => _.get(state.data, 'address', ''),
  selectedLevel: (state) => _.get(state.data, 'selectedLevel', '1'),
  level2solution: (state) => _.get(state.data, 'level2solution', ''),
  level3solution: (state) => _.get(state.data, 'level3solution', ''),
  level4solution: (state) => _.get(state.data, 'level4solution', ''),
  level5solution: (state) => _.get(state.data, 'level5solution', '')
}
