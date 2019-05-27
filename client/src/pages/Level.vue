<template>
    <q-page class="content-container">
    <!--------------------- LEVEL 1 ----------------------------------->
    <div
      v-if="level == 1"
      class="row"
      QPageContainer
    >
      <h5 class="full-width" dense>Create a Klaytn Account</h5>
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
        label="This is my address, send me KLAY!"
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
      <h5 class="full-width" dense>Go to the Faucet and request</h5>
      <p class="full-width">Go to KlaytnScope and find that transaction</p>
      <q-input class="full-width" v-model="account" label="Transaction hash (txid)" />
      <q-btn
        color="white"
        text-color="black" label="Check account to proceed to Level 2" @click="level1submitAddress" />
    </div>
    <!--------------------- LEVEL 3 ----------------------------------->
     <div
          v-if="level == 3"
          class="row"
          QPageContainer
        >
          <h5 class="full-width" dense>Setup your working enviorment</h5>
          <p class="full-width">Export your Keystore from the Klaytn Wallet to a file</p>
          <p class="full-width">Open the IDE and load your keystore, and switch to BAOBAB</p>
          <p class="full-width">Compile and Deploy the default (count) contract</p>

          <q-input
            class="full-width"
            :value="address"
            @blur="(event) => commit('user/address', event.target.value)"
            label="Contract Adress"
          />
          <q-btn
            color="white"
            text-color="black"
            label="Check contract deployment to proceed to Level 3"
            @click="level3checkcontract"
          />
        </div>
    <!--------------------- LEVEL 4 ----------------------------------->
     <div
          v-if="level == 4"
          class="row"
          QPageContainer
        >
          <h5 class="full-width" dense>Working with Smart Contracts</h5>
          <p class="full-width">Using the IDE, do a function call to "setCount", with as input    the amount you received in the beginning</p>

          <q-input
            class="full-width"
            :value="address"
            @blur="(event) => commit('user/address', event.target.value)"
            label="Block number of the Tx"
          />
          <q-btn
            color="white"
            text-color="black"
            label="Check contract deployment to proceed to Level 3"
            @click="level4checksendamount"
          />
        </div>
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
      this.$store.dispatch('external/httpRegisterUser', this.address)
      console.log('submitted address')
    },
    level1submitRandomAmount () {
      this.$store.dispatch('external/httpCheckAmount', { address: this.address, randomAmount: this.randomAmount })
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
