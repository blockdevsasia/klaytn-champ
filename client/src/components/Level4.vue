<template>
  <!--------------------- LEVEL 4 ----------------------------------->
  <div
    v-if="selectedLevel === 4"
    class="row"
    style="margin-left:3vw;margin-top:3vh;width:100%;"
  >
    <q-card class="my-card q-mb-lg q-pa-lg">
      <q-card-section>
        <div class="text-h6">Contract Interaction</div>
        <div class="text-subtitle2">Interact with the Count contract by calling its function(s).</div>
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
              In the IDE, expand the "Count" contract by clicking the triangle to the left of the name. You will see the methods setCount(), count() and getBlockNumber() here.
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
              <strong>Do a function call to "setCount"</strong>, with as input: <strong>{{random}}</strong>.
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
              On the "Transaction" tab at the bottom of the screen, you should be able to see the transaction details of the function call. You may have to expand the transaction by clicking the line. <strong>Copy the "transaction hash"</strong> and paste it below:
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
              square outlined
              label="Tx Hash"
              :disable="level > 4"
              :value="solution"
              @change="(event) => $emit('setValue', {level4solution: event.target.value})"
            />
          </td>
          <td/>
        </tr>
        <tr><td colspan="3">
          <level-submit-button
            :inputAttempts="inputAttempts"
            :level="level"
            :submissionProgress="submissionProgress"
            :buttonLevel="4"
            v-on:finish="$emit('finish')"
          />
        </td></tr>
        </tbody>
      </q-markup-table>
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
