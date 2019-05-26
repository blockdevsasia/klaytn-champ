<template>
  <q-page class="">
    <!--------------------- LEVEL 1 ----------------------------------->

    <div
      v-if="level == 1"
      class="row"
    >
      <h5 class="full-width" dense>1. Create a Klaytn Account</h5>
      <p class="full-width">Go to Klaytn Wallet, create an account, and paste your public address.</p>
      <q-input
        class="full-width"
        :value="address"
        @blur="(event) => commit('user/address', event.target.value)"
        label="Account View"
      />
      <q-btn
        color="white"
        text-color="black"
        label="Check account"
        @click="level1submitAddress"
      />
      <q-input
        class="full-width"
        :value="randomAmount"
        @blur="(event) => commit('user/randomAmount', event.target.value)"
        label="Amount that you received"
      />
      <q-btn
        color="white"
        text-color="black"
        label="Check amount to proceed to Level 2"
        @click="level1submitRandomAmount"
      />
    </div>
    <!--------------------- LEVEL 2 ----------------------------------->
    <div
      v-if="level == 2"
      class="row"
    >
      <h5 class="full-width" dense>1. Create a Klaytn Account</h5>
      <p class="full-width">Go to Klaytn Wallet, create an account, and paste your public address.</p>
      <q-input class="full-width" v-model="account" label="Account View" />
      <q-btn
        color="white"
        text-color="black" label="Check account to proceed to Level 2" @click="level1submitAddress" />
    </div>
    <!--------------------- LEVEL 3 ----------------------------------->

    <!--------------------- LEVEL 4 ----------------------------------->

    <!--------------------- LEVEL 5 ----------------------------------->

  </q-page>
</template>

<style>
</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Level',
  mounted: function () {
  },
  data () {
    return {
    }
  },
  methods: {
    commit (key, value) {
      this.$store.commit(key, value)
    },
    level1submitAddress () {
      this.$store.dispatch('external/serverSendAddress', this.address)
      console.log('submitted address')
    },
    level1submitRandomAmount () {
      this.$store.dispatch('external/serverSendRandomAmount', { address: this.address, randomAmount: this.randomAmount })
      console.log('submitted randomAmount')
    }
  },

  computed: {
    ...mapState('user', {
      currentUser: 'current',
      address: 'address',
      randomAmount: 'randomAmount',
      level: 'level'
    })
  }
}
</script>
