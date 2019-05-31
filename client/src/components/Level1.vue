<template>
  <!--------------------- LEVEL 1 ----------------------------------->
  <div
    v-if="selectedLevel === 1"
    class="row"
  >
    <q-card flat class="my-card">
      <q-card-section>
        <div class="text-h6">Create a Klatyn Account</div>
        <div class="text-subtitle2">Getting started with Klaytn.</div>
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label>1. Go to <a href="https://baobab.klaytnwallet.com/" target="_blank">Klaytn Wallet</a> and click the <strong>"create account"</strong> button. </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>2. Follow the 3-step instructions on how to create a new account. You will be asked to provide a password, <strong>download your keystore</strong> and keep your private key. </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>3. Paste your <strong>address</strong> in the texbox below: </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-input
                :rules="[value => isAddressValid(value) || 'You need to enter a valid Klaytn address!']"
                :disable="level > 1"
                :value="solution"
                @change="event => handleChange(event.target.value)"
                label="Public address"
                square outlined
              />
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <div>
                <level-submit-button
                  :inputAttempts="inputAttempts"
                  :level="level"
                  :submissionProgress="submissionProgress"
                  :buttonLevel="1"
                  v-on:finish="$emit('finish')"
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
        Remember to keep your keystore file. You will need it in the succeeding levels. <br/> A Klatyn account gives access to your balance and smart contracts. <br/><br/>
        To learn more about Klatyn accounts, read the <a href="https://docs.klaytn.com/klaytn/design/account">documentation</a>.
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { CAVER } from 'boot/caver'

export default {
  components: {
    LevelSubmitButton: () => import('components/LevelSubmitButton.vue')
  },
  props: {
    solution: {
      type: String
    },
    selectedLevel: {
      type: Number
    },
    level: {
      type: Number
    },
    submissionProgress: {
      type: Number
    },
    inputAttempts: {
      type: Number
    }
  },
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    isAddressValid (address) {
      return CAVER.utils.isAddress(address)
    },
    handleChange (solution) {
      if (this.isAddressValid(solution)) {
        this.$emit('setValue', { address: solution })
      }
    },
    handleSubmit () {
      if (this.level > 1) this.$router.push('/level/2')
      else this.$emit('finish')
    }

  }
}
</script>

<style>
</style>
