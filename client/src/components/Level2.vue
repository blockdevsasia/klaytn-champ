<template>
  <!--------------------- LEVEL 2 ----------------------------------->
  <div
    v-if="selectedLevel === 2"
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
                :disable="level > 2"
                :value="solution"
                @blur="(event) => $emit('setValue', {level2value: event.target.value})"
              />
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <div>

                <q-btn
                  :disable="level > 2"
                  color="green"
                  text-color="black"
                  label="Check my solution"
                  @click="$emit('finish')"
                />
                <q-btn
                  v-if="level > 2 && selectedLevel === 2"
                  color="green"
                  text-color="black"
                  icon="check"
                  label="Proceed to Level 3"
                  to="/level/3"
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
</template>

<script>
export default {
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
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
