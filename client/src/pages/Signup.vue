<template>
  <q-page class="flex flex-center">
    <div class="login">
      <h3>Sign In</h3>
      <q-btn label="Sign in with Google" @click="signinGoogle"></q-btn>
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
