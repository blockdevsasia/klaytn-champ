<template>
  <!--------------------- LEVEL 2 ----------------------------------->
  <div
    v-if="selectedLevel === 2"
    class="row"
    style="margin-left:3vw;margin-top:3vh;width:100%;"
  >
    <q-card class="my-card q-mb-lg q-pa-lg">
      <q-card-section>
        <div class="text-h6">Faucet and Klaytnscope</div>
        <div class="text-subtitle2">Fund your Klatyn account with test KLAY and view the transaction from Klaytnscope.
        </div>
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
              Go back to your <a href="https://baobab.wallet.klaytn.com/" target="_blank">Klaytn
              Wallet</a> and select <strong>"KLAY Faucet"</strong> from the menu on the left side.
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
              To fund your account, click the <strong>"Run Faucet"</strong> button. You will receive
              <strong>5 Test_KLAY</strong>.
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
              <strong>Copy your address</strong> from your wallet and go to <a
              href="https://baobab.scope.klaytn.com/" target="_blank">Klaytnscope</a>. Then <strong>paste your
              address</strong> in the "search by" textbox and click the search icon.
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
              You should be able to see the transaction from the faucet at the top of the list.
              <strong>Copy the Tx Hash</strong> and paste it below.
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
            <q-input
              square outlined
              label="Transaction hash"
              :disable="level > 2"
              @change="(event) => { $emit('setValue', {level2solution: event.target.value})}"
              :value="solution"
            />
          </td>
          <td/>
        </tr>
        <tr><td colspan="3">
          <level-submit-button
            :inputAttempts="inputAttempts"
            :level="level"
            :submissionProgress="submissionProgress"
            :buttonLevel="2"
            v-on:finish="$emit('finish')"
          />
        </td></tr>
        </tbody>
      </q-markup-table>

    </q-card>

    <q-card flat class="my-card bg-yellow-1">
      <q-card-section>
        <div class="text-subtitle2">Notes:</div>
      </q-card-section>
      <q-separator inset/>
      <q-card-section>
        A faucet drips small amounts of cryptocurrency over a set period of time.<br/>
        Klaytnscope is Klatyn's block explorer. It allows you to find data by monitoring network health and statistics
        of Klaytn as well as profiling blocks and transactions on Klaytn.<br/><br/>
        To learn more about Klaytnscope read the <a href="https://docs.klaytn.com/toolkit/scope">documentation</a>.
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
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
  }
}
</script>

<style>
</style>
