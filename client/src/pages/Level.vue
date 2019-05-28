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
        :disable="level > 1"
        class="full-width"
        :value="address"
        @blur="(event) => setUserField({address: event.target.value})"
        label="Account View"
      />
      <q-btn
        :disable="level > 1"
        color="white"
        text-color="black"
        label="This is my address, send me KLAY!"
        @click="level1submit"
      />
      <q-btn
        v-if="level > 1 && selectedLevel === 1"
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
      <q-card flat class="my-card">
        <q-card-section>
          <q-list>
            <q-item>
              <q-item-section><q-item-label>
                1. Go to the Faucet and request. You will receive 5 Klay.
              </q-item-label></q-item-section>
            </q-item>
            <q-item>
              <q-item-section><q-item-label>
                2. Go to KlaytnScope and find that transaction, which is most likely the last one.
              </q-item-label></q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>
                  <q-input
                  @blur="(event) => setUserField({level2value: event.target.value})"
                  label="Transaction Number"
                  :value="level2value"
                  />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-actions>
          <q-btn @click="level2submit" color="green" icon="check" label="check" />
        </q-card-actions>
      </q-card>
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
                <q-item-label>2. Open your IDE and load your keystore and make sure you are on BAOBAB testnet.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>3. Compile and deploy the default (Count) contract, without making any changes.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>4. Enter the Contract's deploy address below.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label><q-input :value="level3value"
                  @blur="(event) => setUserField({level3value: event.target.value})" label="Contract address" /></q-item-label>
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
                <q-item-label><q-input :value="level4value" @blur="(event) => setUserField({level4value: event.target.value})" label="Block number of the tx" /></q-item-label>

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
                <q-item-label><q-input :value="level5value" @blur="(event) => setUserField({level5value: event.target.value})" label="Count" /></q-item-label>
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
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Level',
  mounted: function () {
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions('user', [
      'setUserField'
    ]),
    level1submit () {
      this.$store.dispatch('external/httpRegisterUser', this.address)
      console.log('submitted address')
    },
    level2submit () {
      this.$store.dispatch('external/httpCheckLevel2', this.address)
      console.log('submitted address')
    },
    level3submit () {
      this.$store.dispatch('external/httpRegisterUser', this.level3data)
      console.log('submitted address')
    },
    level4submit () {
      this.$store.dispatch('external/httpRegisterUser', this.level4data)
      console.log('submitted address')
    },
    level5submit () {
      this.$store.dispatch('external/httpRegisterUser', this.level5data)
      console.log('submitted address')
    }
  },

  computed: {
    ...mapGetters({
      address: 'user/address',
      level2value: 'user/level2value',
      level3value: 'user/level3value',
      level4value: 'user/level4value',
      level5value: 'user/level5value'
    }),
    ...mapState('user', {
      currentUser: 'current',
      randomAmount: 'randomAmount',
      level: 'level',
      selectedLevel: 'selectedLevel'
    })
  }
}
</script>
