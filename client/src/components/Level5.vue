<template>
  <!--------------------- LEVEL 5 ----------------------------------->
  <div
    v-if="selectedLevel === 5"
    class="row"
    style="margin-left:3vw;margin-top:3vh;width:100%;"
  >
    <q-card class="my-card q-mb-lg q-pa-lg">
      <q-card-section>
        <div class="text-h6">Contract Modification and Redeployment</div>
        <div class="text-subtitle2">Modify and redeploy the Count contract.</div>
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
              In the source code of the Count contract, <strong>modify the "setCount" function</strong> so it stores <strong>count multiplied by block number</strong>.
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
              <strong>Compile and deploy</strong> the modified contract.
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
              Send the "setCount" function with input: <strong>{{random}}</strong> and wait for it to finish
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
              <strong>Call count() and paste</strong> the resulting value below:
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
              <q-input
                square outlined
                label="Count"
                :disable="level > 5"
                :value="solution"
                @change="(event) => $emit('setValue', {level5solution: event.target.value})"
              />
            </p>
          </td>
          <td/>
        </tr>
        <tr><td colspan="3">
          <level-submit-button
            :inputAttempts="inputAttempts"
            :level="level"
            :submissionProgress="submissionProgress"
            :buttonLevel="5"
            v-on:finish="$emit('finish')"
          />
        </td></tr>
        </tbody>
      </q-markup-table>
    </q-card>

    <q-card flat class="my-card bg-yellow-1" >
      <q-card-section>
        <div class="text-subtitle2">Notes:</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        When a contract is redeployed it stays in the blockchain forever. The old contract doesn't get overwritten.
        The redeployed contract will have a different address.<br/>
        In solidity multiplication is written as follows: <i>output = var1 * var2;</i>
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
    selectedLevel: {
      type: Number
    },
    level: {
      type: Number
    },
    solution: {
      type: String
    },
    random: {
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
