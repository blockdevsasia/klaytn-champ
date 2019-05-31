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

        <q-btn label="Import Keystore" @click="" class="purp-button purp-button-last full-width" align="between" icon="vpn_key"></q-btn>


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

  </q-layout>
</template>

<script>
import * as firebase from 'firebase'
import { AUTH } from 'boot/firebase'

import { mapState } from 'vuex'

export default {
  name: 'AuthLayout',
  mounted: function () {
    console.log(this.$router)
  },
  data () {
    return {
      tab: 'level',
      leftDrawerOpen: true
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
      var provider = new firebase.auth.GoogleAuthProvider()
      AUTH.signInWithRedirect(provider).then((result) => {
        this.$router.push({ path: '' })
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style>
</style>
