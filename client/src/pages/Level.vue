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
<<<<<<< HEAD
      v-if="level == 3"
      class="row"    
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

=======
      v-if="selectedLevel === 3"
      class="row"
      QPageContainer
    >
<<<<<<< HEAD
      <h5 class="full-width" dense>Setup your working enviorment</h5>
      <p class="full-width">Export your Keystore from the Klaytn Wallet to a file</p>
      <p class="full-width">Open the IDE and load your keystore, and switch to BAOBAB</p>
      <p class="full-width">Compile and Deploy the default (count) contract</p>
>>>>>>> a1bf53a2276240087dd4f5ea2e59bfe40b28b92e
=======
      <q-card flat class="my-card">
        <q-card-section>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>1. Export you keystore from the Klatyn wallet to a file.</q-item-label>
>>>>>>> 3bbbf356b0d2702d6405f771e54c1dcd701b4603

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

<<<<<<< HEAD
<<<<<<< HEAD
    <div
      v-if="level == 4"
      class="row"    
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
      v-if="level == 5"
      class="row"    
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
=======
      <q-input
        class="full-width"
        :value="address"
        @blur="(event) => commit('user/address', event.target.value)"
        label="Block number of the Tx"
      />
      <q-btn
        color="white"
        text-color="black"
        label="Check contract deployment to proceed to Level 5"
        @click="blocknroftx"
      />
=======
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
>>>>>>> 3bbbf356b0d2702d6405f771e54c1dcd701b4603
    </div>
    <!--------------------- LEVEL 5 ----------------------------------->
    <div
      v-if="selectedLevel === 5"
      class="row"
      QPageContainer
    >
<<<<<<< HEAD
      <h5 class="full-width" dense>Working with Smart Contracts</h5>
      <p class="full-width">Change the "setCount" function so it stores count multiplied by block.number</p>
      <p class="full-width">Compile and deploy the updated source</p>
      <p class="full-width">Call "setCount" with any numeric value you like</p>
      <p class="full-width">Call count() and paste the resulting number below</p>
>>>>>>> a1bf53a2276240087dd4f5ea2e59bfe40b28b92e
=======
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
>>>>>>> 5c16181a73a6b95d2e3eb80fe2290959b113ea24

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
