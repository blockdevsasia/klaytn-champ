<template>
  <!--------------------- LEVEL 1 ----------------------------------->
  <div
    v-if="selectedLevel === 1"
    class="row"
    style="margin-left:3vw;margin-top:3vh;width:100%;"
  >
    <q-card class="my-card q-mb-lg q-pa-lg">
      <q-card-section>
        <div class="text-h6">Create a Klatyn Account</div>
        <div class="text-subtitle2">Getting started with Klaytn.</div>
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
              Go to <a href="https://baobab.wallet.klaytn.com/" target="_blank">Klaytn Wallet</a> and
              click the <strong>"create account"</strong> button.
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
              Follow the 3-step instructions on how to create a new account. You will be asked to
              provide a password, <strong>download your keystore</strong> and keep your private key.
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
              Paste your <strong>address</strong> in the texbox below:
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
            <q-input
              :rules="[value => isAddressValid(value) || 'You need to enter a valid Klaytn address!']"
              :disable="level > 1"
              :value="solution"
              @change="event => handleChange(event.target.value)"
              label="Public address"
              square outlined
            />
          </td>
          <td/>
        </tr>

        <tr>
          <td colspan="3">
            <level-submit-button
              :inputAttempts="inputAttempts"
              :level="level"
              :submissionProgress="submissionProgress"
              :buttonLevel="1"
              v-on:finish="$emit('finish')"
            />
          </td>
        </tr>

        </tbody>
      </q-markup-table>

    </q-card>

    <!--    <q-card flat class="my-card bg-yellow-1">-->
    <!--      <q-card-section>-->
    <!--        <div class="text-subtitle2">Notes:</div>-->
    <!--      </q-card-section>-->
    <!--      <q-separator inset/>-->
    <!--      <q-card-section>-->
    <!--        Remember to keep your keystore file. You will need it in the succeeding levels. <br/> A Klatyn account gives-->
    <!--        access to your balance and smart contracts. <br/><br/>-->
    <!--        To learn more about Klatyn accounts, read the <a href="https://docs.klaytn.com/klaytn/design/account">documentation</a>.-->
    <!--      </q-card-section>-->
    <!--    </q-card>-->
  </div>
</template>

<script>
import { CAVER } from 'boot/caver'

export default {
  components: {
    LevelSubmitButton: () => import('components/LevelSubmitButton.vue')
  },
  props: {
    solution: {
      type: String
    },
    selectedLevel: {
      type: Number
    },
    level: {
      type: Number
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
  computed: {},
  methods: {
    isAddressValid (address) {
      return CAVER.utils.isAddress(address)
    },
    handleChange (solution) {
      if (this.isAddressValid(solution)) {
        this.$emit('setValue', { address: solution })
      }
    }
    // handleSubmit () {
    //   if (this.level > 1) {
    //     this.$router.push('/level/2')
    //   } else {
    //     this.$emit('finish')
    //   }
    // }

  }
}
</script>

<style>
</style>
