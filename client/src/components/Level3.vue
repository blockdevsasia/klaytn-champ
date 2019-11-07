<template>
  <!--------------------- LEVEL 3 ----------------------------------->
  <div
    v-if="selectedLevel === 3"
    class="row"
    style="margin-left:3vw;margin-top:3vh;width:100%;"
  >
    <q-card class="my-card q-mb-lg q-pa-lg">
      <q-card-section>
        <div class="text-h6">Smart contract and Klatyn IDE</div>
        <div class="text-subtitle2">Compile a smart contract using the Klatyn IDE.</div>
      </q-card-section>

      <q-markup-table bordered wrap-cells>
        <tbody>
        <!------------------------ Step 1 ------------------------->
        <tr>
          <td>
            <div class="text-h6">1</div>
          </td>
          <td class="instruction">
            <p>
              <strong>Locate your exported keystore file</strong>. This was automatically downloaded when you created your
              account.
            </p>
          </td>
          <td/>
        </tr>
        <!------------------------ Step 2 ------------------------->
        <tr>
          <td>
            <div class="text-h6">2</div>
          </td>
          <td class="instruction">
            <p>
              <strong>Go to the <a href="https://ide.klaytn.com/">Klatyn IDE</a></strong>. You will see the default Solidity file called "Untitled.sol" containing a smart contract called "Count". Klatyn uses solidity for smart contract development.
            </p>
          </td>
          <td/>
        </tr>
        <!------------------------ Step 3 ------------------------->
        <tr>
          <td>
            <div class="text-h6">3</div>
          </td>
          <td class="instruction">
            <p>
              In the right panel in the IDE you can find the <strong>"Run"</strong> section. Here, ensure "Environment" is set to <strong>"BAOBAB" </strong> using the dropdown menu.
            </p>
          </td>
          <td/>
        </tr>
        <!------------------------ Step 4 ------------------------->
        <tr>
          <td>
            <div class="text-h6">4</div>
          </td>
          <td class="instruction">
            <p>
              Click the (+) next to <strong>"Account"</strong>, go to the "Keystore" tab, and <strong>Upload your downloaded keystore file</strong>
            </p>
          </td>
          <td/>
        </tr>
        <!------------------------ Step 5 ------------------------->
        <tr>
          <td>
            <div class="text-h6">5</div>
          </td>
          <td class="instruction">
            <p>
              Make sure your account is selected and <strong>click "Deploy"</strong>.
            </p>
          </td>
          <td/>
        </tr>
        <!------------------------ Step 6 ------------------------->
        <tr>
          <td>
            <div class="text-h6">6</div>
          </td>
          <td class="instruction">
            <p>
              Below the Deploy button (still in the "Run" tab), you should now see "Count at 0x....." in the list of "Deployed Contracts"
            </p>
          </td>
          <td/>
        </tr>
        <!------------------------ Step 7 ------------------------->
        <tr>
          <td>
            <div class="text-h6">7</div>
          </td>
          <td class="instruction">
            <p>
              <strong>Copy the contract address</strong> using the special small button located next to the address, and paste it below:
            </p>
          </td>
          <td/>
        </tr>
        <!------------------------ Step 8 ------------------------->
        <tr>
          <td>
            <div class="text-h6">8</div>
          </td>
          <td class="instruction">
            <q-input
              square outlined
              label="Contract address"
              :disable="level > 3"
              :value="solution"
              @change="(event) => $emit('setValue', {level3solution: event.target.value})"
            />
          </td>
          <td/>
        </tr>
        <tr><td colspan="3">
          <level-submit-button
            :inputAttempts="inputAttempts"
            :level="level"
            :submissionProgress="submissionProgress"
            :buttonLevel="3"
            v-on:finish="$emit('finish')"
          />
        </td></tr>
        </tbody>
      </q-markup-table>

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
