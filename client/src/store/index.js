import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import external from './external'

import { DB } from 'boot/firebase'

import createEasyFirestore from 'vuex-easy-firestore'

Vue.use(Vuex)

const userModule = {
  firestorePath: 'users/{uid}',
  firestoreRefType: 'doc',
  moduleName: 'user',
  statePropName: 'data',
  namespaced: true,
  ...user
}

const easyFirestore = createEasyFirestore(
  [userModule],
  {
    // logging: true,
    FirebaseDependency: DB.app
  }
)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      external
    },
    plugins: [easyFirestore]

    // enable strict mode (adds overhead!)
    // for dev mode only
    // @coostendorp: Disabled due to https://forum.vuejs.org/t/error-form-binding-with-vuex-do-not-mutate-vuex-store-state-outside-mutation-handlers/11941/12
    // strict: process.env.DEV
  })

  return Store
}
