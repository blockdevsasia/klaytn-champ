<template>
  <!--------------------- LEVEL 2 ----------------------------------->
  <div
    v-if="selectedLevel === 2"
    class="row"
  >

    <q-card flat class="my-card">
      <q-card-section>
        <div class="text-h6">Faucet and Klaytnscope</div>
        <div class="text-subtitle2">Fund your Klatyn account with test KLAY and view the transaction from Klaytnscope.</div>
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label>1. Go back to your <a href="https://baobab.klaytnwallet.com/" target="_blank">Klaytn Wallet</a> and select <strong>"KLAY Faucet"</strong> from the menu on the left side. </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>2. To fund your account, click the <strong>"Run Faucet"</strong> button. You will receive <strong>5 Test_KLAY</strong>. </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>3. <strong>Copy your address</strong> from your wallet and go to <a href="https://baobab.klaytnscope.com/" target="_blank">Klaytnscope</a>. Then <strong>paste your address</strong> in the "search by" textbox and click the search icon. </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>4. You should be able to see the transaction from the faucet at the top of the list. <strong>Copy the Tx Hash</strong> and paste it below.</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-input
                square outlined
                label="Transaction hash"
                :disable="level > 2"
                :value="solution"
                @blur="(event) => $emit('setValue', {level2solution: event.target.value})"
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
                  :buttonLevel="2"
                  v-on:finish="$emit('finish')"
                />

<!--                <q-btn-->
<!--                  :disable="level > 2"-->
<!--                  color="green"-->
<!--                  text-color="black"-->
<!--                  label="Check my solution"-->
<!--                  @click="$emit('finish')"-->
<!--                />-->
<!--                <q-btn-->
<!--                  v-if="level > 2 && selectedLevel === 2"-->
<!--                  color="green"-->
<!--                  text-color="black"-->
<!--                  icon="check"-->
<!--                  label="Proceed to Level 3"-->
<!--                  to="/level/3"-->
<!--                />-->
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
        A faucet drips small amounts of cryptocurrency over a set period of time.<br/>
        Klaytnscope is Klatyn's block explorer. It allows you to find data by monitoring network health and statistics of Klaytn as well as profiling blocks and transactions on Klaytn.<br/><br/>
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
