export default ({ app, router, Vue, store }) => {
  router.beforeEach((to, from, next) => {
    console.log('to', to)
    if (to.params.level) {
      store.commit('user/level', to.params.level)
    }

    if (store.state.user.current === undefined) {
      console.log('no user yet')
    }
    //
    //   store.dispatch('main/setCurrentOperation', to.params.operationId)
    // } else if (to.name === 'contract') {
    //   store.commit('main/contractId', to.params.contractId)
    //   store.commit('main/abiMethod', to.params.abiMethod)
    //   store.dispatch('iost/loadContract', to.params.contractId)
    // }
    next()
  })
}
