import { AUTH } from 'boot/firebase'

export default ({ app, router, Vue, store }) => {
  router.beforeEach((to, from, next) => {
    const isLoading = store.state.user.loading
    const userLoggedIn = store.state.user.current.displayName !== undefined
    const userHasAddress = store.getters['user/address'].length > 0
    const userNeedsToSignup = AUTH.currentUser === null
    const userNeedsLevel1 = userLoggedIn && !userHasAddress
    
    console.log('to', to.path)
    console.log('isLoading', isLoading)
    console.log('userNeedsToSignup', userNeedsToSignup)
    console.log('userNeedsLevel1', userNeedsLevel1)

    if (userNeedsToSignup) {
      if (to.path === '/signup') {
        next()
      } else {
        next('/signup')
      }
    } else if (userNeedsLevel1) {
      if (to.path === '/level/1') {
        next()
      } else {
        next('/level/1')
      }
    } else if (to.path.indexOf('/level/') === 0) {
      store.commit('user/selectedLevel', Number.parseInt(to.path.replace('/level/', '')))
      next()
    } else {
      next()
    }
  })
}
