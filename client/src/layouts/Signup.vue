<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-img__image absolute-full"
         style="background-image: url('statics/sign-up-klaytn-champ.png'); background-size: cover; background-position: 50% 50%;">
      <h3 class="singup-txt fixed absolute">Learn how to develop on Klaytn<br>And get rewarded!</h3>
    </div>
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-white-2"
      :width="400"
    >
      <div class="login fixed-center">
        <img src="~assets/klaytn-champ-logo.svg">

        <q-btn label="Sign in with Google" @click="signinGoogle" class="purp-button full-width" align="between" icon="account_circle"></q-btn>

        <q-btn label="Import Keystore" @click="loadKeystoreActive=true" class="purp-button purp-button-last full-width" align="between" icon="vpn_key"></q-btn>


          <div class="partner-logo-signup">
            <a href="https://www.klaytnhackathon.com/" target="_blank">
              <img src="~assets/klaytnhackathon-logo.svg">
            </a>
            <a href="https://www.blockdevs.asia/klaytn-champ/" target="_blank">
              <img class="padding-top-logo" src="~assets/blockdevs-asia.svg">
            </a>
          </div>
      </div>
    </q-drawer>
<q-dialog v-model="loadKeystoreActive">
      <q-card>
        <q-toolbar>
          <q-avatar>
            <img src="~assets/shield.png">
          </q-avatar>

          <q-toolbar-title><span class="text-weight-bold">Import your Keystore</span></q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section>
          Importing your Keystore file will be released in the next version of Klaytn Champ.
          <img src="~assets/keystore-soon.png">

        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import * as firebase from 'firebase'
import { firebaseAuth } from 'boot/firebase'

const firebaseAuthProvider = new firebase.auth.GoogleAuthProvider()
import { mapState } from 'vuex'

export default {
  name: 'AuthLayout',
  mounted: function () {
    console.log(this.$router)
  },
  data () {
    return {
      tab: 'level',
      leftDrawerOpen: true,
      loadKeystoreActive: false
    }
  },
  computed: {
    ...mapState('user', {
      currentUser: 'current',
      level: 'level'
    })
  },
  methods: {
    signinGoogle () {
      firebaseAuth.signInWithPopup(firebaseAuthProvider).then((result) => {
        // console.log('Logged in, routing')

      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style>
</style>
