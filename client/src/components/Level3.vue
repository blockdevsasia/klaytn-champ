<template>
  <!--------------------- LEVEL 3 ----------------------------------->
  <div
    v-if="selectedLevel === 3"
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
              <q-item-label>1. Get your exported keystore file. This was automatically downloaded when you created your
                account.
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>2. Go to the <a href="https://ide.klaytn.com/">Klatyn IDE</a>. You will see a default
                untitle.sol file with a Count contract. Klatyn uses solidity for smart contract development.
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>3. On the right side of the IDE, go to "setting" and select "BAOBAB" from the "environment"
                dropdown.
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>4. Go to the "From Account" dropdown and select "import an account", go to the location
                where you saved your keystore file. You will be asked to provide your account password. Click import.
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>5. Select your account and click "compile". You should see the compiled output, it contains
                the bytecode and abi data of the contract.
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>6. Click the "deploy" button located below the setting. You should be able to see the
                transaction details in the deploy output tab.
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>7. In the contract details, below the settings, copy the contract address and paste it in
                the textbox below.
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
                <q-btn color="orange" icon="notification_important" label="hint"/>
                <q-btn
                  :disable="!isAddressValid(solution) || level > 3"
                  color="green"
                  text-color="black"
                  label="Check my solution"
                  @click="$emit('finish')"
                />
                <q-btn
                  v-if="level > 3 && selectedLevel === 3"
                  color="green"
                  text-color="black"
                  icon="check"
                  label="Proceed to Level 4"
                  to="/level/4"
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
