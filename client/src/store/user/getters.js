import _ from 'lodash'

export default {
  isLoggedIn: (state) => {
    let result = state.current.displayName !== undefined
    console.log('isLoggedIn: ', result, state.current)
    return result
  },
  address: (state) => _.get(state.data, 'address', ''),
  level2value: (state) => _.get(state.data, 'level2value', ''),
  level3value: (state) => _.get(state.data, 'level3value', ''),
  level4value: (state) => _.get(state.data, 'level4value', ''),
  level5value: (state) => _.get(state.data, 'level5value', '')
}
