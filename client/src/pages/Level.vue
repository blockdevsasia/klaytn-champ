<template>
  <q-page class="content-container">
    <!--------------------- LEVEL 1 ----------------------------------->
    <div
      v-if="selectedLevel === 1"
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
        @click="level1submit"
      />
      <q-btn
        color="white"
        text-color="black"
        size="xl"
        label="Proceed to Level 2"
        to="/level/2"
      />
    </div>
    <!--------------------- LEVEL 2 ----------------------------------->
    <div
      v-if="selectedLevel === 2"
      class="row"
    >
      <h5 class="full-width" dense>Go to the Faucet and request</h5>
      <p class="full-width">Go to KlaytnScope and find that transaction</p>
      <q-input class="full-width" label="Transaction hash (txid)"/>
      <q-btn
        color="white"
        text-color="black" label="Check account to proceed to Level 3" @click="level2submit"/>
    </div>
    <!--------------------- LEVEL 3 ----------------------------------->
    <div
      v-if="selectedLevel === 3"
      class="row"
      QPageContainer
    >
      <q-card flat class="my-card">
        <q-card-section>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>1. Export you keystore from the Klatyn wallet to a file.</q-item-label>

              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>2. Open your IDE and load your keystore and swtich to BAOBAB.</q-item-label>

              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>3. Compile and deploy the default (count) contract.</q-item-label>

              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label><q-input v-model="text" label="Contract address" /></q-item-label>

              </q-item-section>
            </q-item>

          </q-list>
        </q-card-section>
        <q-card-actions>
          <q-btn color="green" icon="check" label="check" />
        </q-card-actions>
      </q-card>
    </div>
    <!--------------------- LEVEL 4 ----------------------------------->
    <div
      v-if="selectedLevel === 4"
      class="row"
      QPageContainer
    >
      <q-card flat class="my-card">
        <q-card-actions>
          <q-btn color="orange" icon="notification_important" label="hint" />
        </q-card-actions>
        <q-card-section>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>1. Using the IDE, do a function call to "setCount", with as input the amount you received in the beginning.</q-item-label>

              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label><q-input v-model="text" label="Block number of the tx" /></q-item-label>

              </q-item-section>
            </q-item>

          </q-list>
        </q-card-section>
        <q-card-actions>
          <q-btn color="green" icon="check" label="check" />
        </q-card-actions>
      </q-card>
    </div>
    <!--------------------- LEVEL 5 ----------------------------------->
    <div
      v-if="selectedLevel === 5"
      class="row"
      QPageContainer
    >
      <q-card flat class="my-card">
        <q-card-actions>
          <q-btn color="orange" icon="notification_important" label="hint" />
        </q-card-actions>
        <q-card-section>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>1. Change the "setCount" function so it stores count multiplied by.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>2. Compile and deploy the updated source.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>3. Call the "setCount" with any numeric value that you want.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>4. Call count() and paste the resulting value below.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>5. Change the "setCount" function so it stores count multiplied by</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label><q-input v-model="text" label="Count" /></q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </q-card-section>
        <q-card-actions>
          <q-btn color="green" icon="check" label="check" />
        </q-card-actions>
      </q-card>
    </div>
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
    return {}
  },
  methods: {
    commit (key, value) {
      this.$store.commit(key, value)
    },
    level1submit () {
      this.$store.dispatch('external/httpRegisterUser', this.address)
      console.log('submitted address')
    },
    level2submit () {
      this.$store.dispatch('external/httpRegisterUser', this.address)
      console.log('submitted address')
    },
    level3submit () {
      this.$store.dispatch('external/httpRegisterUser', this.address)
      console.log('submitted address')
    }
    // level1submitRandomAmount () {
    //   this.$store.dispatch('external/httpCheckAmount', { address: this.address, randomAmount: this.randomAmount })
    //   console.log('submitted randomAmount')
    // }
  },

  computed: {
    ...mapState('user', {
      currentUser: 'current',
      address: 'address',
      randomAmount: 'randomAmount',
      level: 'level',
      selectedLevel: 'selectedLevel'
    })
  }
}
</script>
