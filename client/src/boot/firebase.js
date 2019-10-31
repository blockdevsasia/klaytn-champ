/* eslint-disable */
import * as Firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebase.config'
import { Notify } from 'quasar'
import {Loading} from 'quasar'

const firebaseApp = Firebase.initializeApp(firebaseConfig)

export const firebaseDb = firebaseApp.database()
export const firebaseAuth = firebaseApp.auth()
export let idToken = ''

export default ({ router, store, Vue }) => {


  firebaseApp.firestore().enablePersistence()
    .then(() => {
      // If Firebase is going to login, set loading state so UI can adapt
      if(firebaseAuth.currentUser !== null){
        console.log('supposed to be loading')
        // Loading.show()
        store.commit('user/loading', true)
      }

      firebaseAuth.onAuthStateChanged(user => {
        if(user) user.getIdToken().then((result) => {
          idToken = result
          console.log(result)})
        // console.log('onAuthStateChanged', user.getIdToken())

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
