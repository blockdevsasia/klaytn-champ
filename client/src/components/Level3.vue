<template>
  <!--------------------- LEVEL 3 ----------------------------------->
  <div
    v-if="selectedLevel === 3"
    class="row"
  >

    <q-card flat class="my-card">
      <q-card-section>
        <div class="text-h6">Smart contract and Klatyn IDE</div>
        <div class="text-subtitle2">Compile a smart contract using the Klatyn IDE.</div>
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label>1. <strong>Locate your exported keystore file</strong>. This was automatically downloaded when you created your
                account.
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>2. <strong>Go to the <a href="https://ide.klaytn.com/">Klatyn IDE</a></strong>. You will see the default Solidity file called "Untitled.sol" containing a smart contract called "Count". Klatyn uses solidity for smart contract development.
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>3. In the right panel in the IDE you can find the "Settings" section. Here, <strong>set "Environment" to "BAOBAB" </strong> using the dropdown menu.
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>4. Open the <strong>"From Account"</strong> dropdown and <strong>select "Import an Account". Upload your downloaded keystore file</strong>.
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>5. Select the your account and <strong>click "compile"</strong>. You should see the compiled output, it contains
                the bytecode and abi data of the contract.
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>6. <strong>Click the "deploy" button</strong> located below the setting. You should be able to see the
                transaction details in the deploy output tab below.
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>7. <strong>Copy the contract address</strong> located below the Deploy button and paste it below:
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>
                <q-input
                  square outlined
                  label="Contract address"
                  :disable="level > 3"
                  :value="solution"
                  @blur="(event) => $emit('setValue', {level3solution: event.target.value})"
                />
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <div>
                <level-submit-button
                  :inputAttempts="inputAttempts"
                  :level="level"
                  :submissionProgress="submissionProgress"
                  :buttonLevel="3"
                  v-on:finish="$emit('finish')"
                />

              </div>
            </q-item-section>
          </q-item>
        </q-list>
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
    address: {
      type: String
    },
    selectedLevel: {
      type: Number
    },
    level: {
      type: Number
    },
    solution: {
      type: String
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
  methods: {
    isAddressValid (address) {
      return CAVER.utils.isAddress(address)
    }
  }
}
</script>

<style>
</style>
