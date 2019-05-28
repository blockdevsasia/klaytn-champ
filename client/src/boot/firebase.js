/* eslint-disable */
import * as Firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebase.config'
import { Notify } from 'quasar'
import {Loading} from 'quasar'

const connection = Firebase.initializeApp(firebaseConfig)

export const DB = connection.database()
export const AUTH = connection.auth()

export default ({ router, store, Vue }) => {


  connection.firestore().enablePersistence()
    .then(() => {
      // If Firebase is going to login, set loading state so UI can adapt
      if(AUTH.currentUser !== null){
        console.log('supposed to be loading')
        // Loading.show()
        store.commit('user/loading', true)
      }

      AUTH.onAuthStateChanged(user => {
        console.log('onAuthStateChanged', user)

        Loading.hide()
        store.commit('user/loading', false)

        if (user !== null) {

          store.dispatch('user/loggedIn', user)

          router.push('/')

        } else {
          store.dispatch('user/reset')

          router.push('/signup')
        }
      })
    })
    .catch(error => {
      let message = 'Multiple tabs open, persistence can only be enabled in one tab at a a time'
      Notify.create({ message, preset: 'error' })
      console.error(error)
    })





}
