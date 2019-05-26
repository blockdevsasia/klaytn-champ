/* eslint-disable */
import * as Firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebase.config'
import { Notify } from 'quasar'

import {
  Loading,

  // optional!, for example below
  // with custom spinner
  QSpinnerGears
} from 'quasar'

const connection = Firebase.initializeApp(firebaseConfig)
//
const DB = connection.database()
const AUTH = connection.auth()

export default ({ router, store, Vue }) => {
  Loading.show()

  connection.firestore().enablePersistence()
    .catch(error => {
      let message = 'Multiple tabs open, persistence can only be enabled in one tab at a a time'
      Notify.create({ message, preset: 'error' })
      console.error(error)
    })

  AUTH.onAuthStateChanged(user => {
    Loading.hide()
    store.commit('user/loading', false)
    if (user !== null) {
      // Signed in. Let Vuex Easy Firestore know.
      // console.log(user)
      store.commit('user/current', {
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified
      })

    } else {
      store.dispatch('user/reset')
    }
  })

  window.DB = DB
  window.AUTH = AUTH
}
