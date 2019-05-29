<template>
  <q-page class="flex flex-center">
    <div class="login">
      <img src="assets\klaytn-champ-logo.svg">
      <q-btn label="Sign in with Google" @click="signinGoogle" class="purp-button"></q-btn>
      <div class="footer-singup fixed absolute">
        <img src="assets\klaytnhackathon-logo.svg">
        <img class="padding-top" src="assets\blockdevs-asia.svg">
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import * as firebase from 'firebase'
import { AUTH } from 'boot/firebase'

export default {
  name: 'PageIndex',
  methods: {
    signinGoogle () {
      var provider = new firebase.auth.GoogleAuthProvider()
      AUTH.signInWithRedirect(provider).then((result) => {
        this.$router.push({ path: '' })
      }).catch(err => console.log(err))
    }
  }
}
</script>
