<template>
  <!--------------------- LEVEL 1 ----------------------------------->
  <div
    v-if="selectedLevel === 1"
    class="row"
  >
    <q-card flat class="my-card">
      <q-card-section>
        <div class="text-h6">Create a Klatyn Account</div>
        <div class="text-subtitle2">Level 1: Your goal is to create your own Klatyn account.</div>
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label>1. Go to <a href="https://baobab.klaytnwallet.com/" target="_blank">Klaytn Wallet</a>, and click the "create account" button. </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>2. Follow the instructions on how to create a new account. You will be asked to provide a password, download your keystore and keep your private key. It's just a 3-step process. </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>3. Paste your public address on the texbox below.</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-input
                :disable="level > 1"
                :value="solution"
                @blur="(event) => $emit('setValue', {address: event.target.value})"
                label="Public address"
                square outlined
              />
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <div>
                <q-btn
                  :disable="!isAddressValid(solution) || level > 1"
                  label="Check my solution"
                  @click="$emit('finish')"
                  class="full-width level-button"
                />

                <q-btn
                  v-if="level > 1 && selectedLevel === 1"
                  color="green"
                  text-color="black"
                  icon="check"
                  label="Proceed to Level 2"
                  to="/level/2"
                />
              </div>
            </q-item-section>
          </q-item>

        </q-list>
      </q-card-section>
    </q-card>

    <q-card flat class="my-card bg-yellow-1" >
      <q-card-section>
        <div class="text-subtitle2">Notes:</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        Remember to keep your keystore file. You will need it in the succeeding levels. <br/> A Klatyn account contains information about a person's balance or a smart contract.
        To learn more about Klatyn account, click <a href="https://docs.klaytn.com/klaytn/design/account">here</a>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { CAVER } from 'boot/caver'

export default {
  props: {
    solution: {
      type: String
    },
    selectedLevel: {
      type: Number
    },
    level: {
      type: Number
    }
  },
  data () {
    return {}
  },
  methods: {
    isAddressValid (address) {
      return CAVER.utils.isAddress(address)
    }
  }
}
</script>

<style>
</style>
