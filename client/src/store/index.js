import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import external from './external'

import createEasyFirestore from 'vuex-easy-firestore'

Vue.use(Vuex)

const userModule = {
  firestorePath: 'users/{address}',
  firestoreRefType: 'doc',
  moduleName: 'user',
  statePropName: 'data',
  namespaced: true,
  ...user
}

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

const easyFirestore = createEasyFirestore(
  [userModule],
  {
    logging: true,
    FirebaseDependency: window.DB
  }
)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      user,
      external
    },
    plugins: [easyFirestore],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
