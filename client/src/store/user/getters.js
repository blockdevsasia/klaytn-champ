export function isLoggedIn (state) {
  let result = state.current.displayName !== undefined
  console.log('isLoggedIn: ', result, state.current)
  return result
}
