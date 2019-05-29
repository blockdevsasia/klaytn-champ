<template>
  <q-page class="content-container">
    <!--------------------- LEVEL 1 ----------------------------------->
    <level-1
      v-if="selectedLevel === 1"
<<<<<<< HEAD
      class="row"
      QPageContainer
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
                    square outlined
                    :value="address"
                    @blur="(event) => commit('user/address', event.target.value)"
                    label="Public address"
                  /> 
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <div>
                  <q-btn
                    color="green"
                    text-color="black"
                    label="This is my address, send me KLAY!"
                    @click="level1submit"
                  />
                  <q-btn
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
=======
      :selectedLevel="selectedLevel"
      :level="level"
      :solution="address"
      v-on:setValue="setUserField"
      v-on:finish="level1submit"
    />

>>>>>>> dd44e9013bc4ec8ad70f78b6e38ca9477e374312
    <!--------------------- LEVEL 2 ----------------------------------->
    <level-2
      v-if="selectedLevel === 2"
<<<<<<< HEAD
      class="row"
    >
      
      <q-card flat class="my-card">
        <q-card-section>
          <div class="text-h6">Faucet and Klaytnscope</div>
          <div class="text-subtitle2">Level 2: Your goal is to fund your Klatyn account with test KLAY and view the transaction from Klaytnscope.</div>
        </q-card-section>

        <q-card-section>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>1. Go back to <a href="https://baobab.klaytnwallet.com/" target="_blank">Klaytn Wallet</a>, and click the "KLAY Faucet" from the main menu. </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label>2. To fund your account, click the "run faucet" button. You should receive a small amount of KLAY. I received 5 KLAY when I did this. </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label>3. Copy your public address from your wallet and go to <a href="https://baobab.klaytnwallet.com/" target="_blank">Klaytnscope</a>, paste your address in the "search by" textbox and click the search icon. </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label>4. You should be able to see the transaction from the faucet. Copy the TX HASH and paste it on the textbox below.</q-item-label>
              </q-item-section>
            </q-item>

             <q-item>
              <q-item-section>
                <q-input
                    square outlined                   
                    label="Transaction hash (txid)"
                  /> 
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <div>
                 
                  <q-btn
                    color="green"
                    text-color="black"  
                    icon="check"          
                    label="Check account to proceed to Level 3"
                    @click="level2submit"
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
          A faucet drips small amounts of cryptocurrency over a set period of time.
          Klaytnscope is Klatyn's block explorer. It allows you to find data by monitoring network health and statistics of Klaytn as well as profiling blocks and transactions on Klaytn.
          To learn more about Klaytnscope, click <a href="https://docs.klaytn.com/toolkit/scope">here</a>
        </q-card-section>
      </q-card>
     
    </div>
=======
      :selectedLevel="selectedLevel"
      :level="level"
      :solution="level2solution"
      v-on:setValue="setUserField"
      v-on:finish="level2submit"
    />

>>>>>>> dd44e9013bc4ec8ad70f78b6e38ca9477e374312
    <!--------------------- LEVEL 3 ----------------------------------->
    <level-3
      v-if="selectedLevel === 3"
<<<<<<< HEAD
      class="row"
      QPageContainer
    >

    <q-card flat class="my-card">
        <q-card-section>
          <div class="text-h6">Klatyn IDE</div>
          <div class="text-subtitle2">Level 3: Your goal is to compile a smart contract from the Klatyn IDE.</div>
        </q-card-section>

        <q-card-section>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>1. Get your exported keystore file. This was automatically downloaded when you created your account.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>2. Go to the <a href="https://ide.klaytn.com/">Klatyn IDE</a>. You will see a default untitle.sol file with a Count contract. Klatyn uses solidity for smart contract development.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>3. On the right side of the IDE, go to "setting" and select "BAOBAB" from the "environment" dropdown.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>4. Go to the "From Account" dropdown and select "import an account", go to the location where you saved your keystore file. You will be asked to provide your account password. Click import.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>5. Select your account and click "compile". You should see the compiled output, it contains the bytecode and abi data of the contract.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>6. Click the "deploy" button located below the setting. You should be able to see the transaction details in the deploy output tab.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>6. In the contract details, below the settings, copy the contract address and paste it in the textbox below.</q-item-label>
              </q-item-section>
            </q-item>
            
            <q-item>
              <q-item-section>
                <q-item-label><q-input square outlined label="Contract address" /></q-item-label>
              </q-item-section>
            </q-item>

             <q-item>
              <q-item-section>
                <div>
                  <q-btn color="orange" icon="notification_important" label="hint" />
                  <q-btn color="green" icon="check" label="check and proceed to level 4" />
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      
      </q-card>

      
    </div>
=======
      :selectedLevel="selectedLevel"
      :level="level"
      :solution="level3solution"
      v-on:setValue="setUserField"
      v-on:finish="level3submit"
    />

>>>>>>> dd44e9013bc4ec8ad70f78b6e38ca9477e374312
    <!--------------------- LEVEL 4 ----------------------------------->
    <level-4
      v-if="selectedLevel === 4"
<<<<<<< HEAD
      class="row"
      QPageContainer
    >
      <q-card flat class="my-card">
        <q-card-section>
          <div class="text-h6">Contract Interaction</div>
          <div class="text-subtitle2">Level 4: Your goal is to interact with the Count by calling its function(s).</div>
        </q-card-section>

        <q-card-section>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>1. Using the IDE, go to the Count details pane located on the lower right side of the screens.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label>2. Do a function call to "setCount", with as input the amount you received in the beginning and click the "send" button.</q-item-label>
              </q-item-section>
            </q-item>

              <q-item>
              <q-item-section>
                <q-item-label>2. On the "Transaction" output tab, You should be able to see the transaction details of the function call. Copy the blockNumber and paste it in the textbox below</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label><q-input square outlined label="Block number of the tx" /></q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-item>
          <q-item-section>
            <div>
              <q-btn color="orange" icon="notification_important" label="hint" />
              <q-btn color="green" icon="check" label="check and proceed to level 5" />
            </div>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
=======
      :selectedLevel="selectedLevel"
      :level="level"
      :solution="level4solution"
      v-on:setValue="setUserField"
      v-on:finish="level4submit"
    />

>>>>>>> dd44e9013bc4ec8ad70f78b6e38ca9477e374312
    <!--------------------- LEVEL 5 ----------------------------------->
    <level-5
      v-if="selectedLevel === 5"
<<<<<<< HEAD
      class="row"
      QPageContainer
    >
      <q-card flat class="my-card">
         <q-card-section>
          <div class="text-h6">Contract Modification and Redeployment</div>
          <div class="text-subtitle2">Level 5: Your goal is to modify and redeploy the Count contract.</div>
        </q-card-section>

        <q-card-section>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>1. From the IDE, change the "setCount" function so it stores count multiplied by.</q-item-label>
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
                <q-item-label><q-input square outlined label="Count" /></q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-item>
          <q-item-section>
            <div>
              <q-btn color="orange" icon="notification_important" label="hint" />
              <q-btn color="green" icon="check" label="check and proceed to level 5" />
            </div>
          </q-item-section>
        </q-item>
      </q-card>

      <q-card flat class="my-card bg-yellow-1" >
        <q-card-section>
          <div class="text-subtitle2">Notes:</div>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          When a contract is redeployed, it stays in the blockchain forever. The old contract doesn't get overwritten.
          The redeployed contract will have a different address.  
        </q-card-section>
      </q-card>
    </div>
=======
      :selectedLevel="selectedLevel"
      :level="level"
      :solution="level5solution"
      v-on:setValue="setUserField"
      v-on:finish="level5submit"
    />
>>>>>>> dd44e9013bc4ec8ad70f78b6e38ca9477e374312
  </q-page>
</template>
<style>
</style>
<script>
<<<<<<< HEAD
import { mapState } from 'vuex'
=======
import { mapState, mapActions, mapGetters } from 'vuex'
import Level1 from 'components/Level1'
import Level2 from 'components/Level2'
import Level3 from 'components/Level3'
import Level4 from 'components/Level4'
import Level5 from 'components/Level5'

>>>>>>> dd44e9013bc4ec8ad70f78b6e38ca9477e374312
export default {
  name: 'Level',
  components: {
    Level1: Level1,
    Level2: Level2,
    Level3: Level3,
    Level4: Level4,
    Level5: Level5
  },
  mounted: function () {
   
  },
  data () {
    return { }
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
      // this.$store.dispatch('external/httpRegisterUser', this.level3data)
      console.log('level3submit', this.level3solution)
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
      level2solution: 'user/level2solution',
      level3solution: 'user/level3solution',
      level4solution: 'user/level4solution',
      level5solution: 'user/level5solution'
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