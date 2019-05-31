<template>
  <!--------------------- LEVEL 5 ----------------------------------->
  <div
    v-if="selectedLevel === 5"
    class="row"
  >
    <q-card flat class="my-card">
      <q-card-section>
        <div class="text-h6">Contract Modification and Redeployment</div>
        <div class="text-subtitle2">Modify and redeploy the Count contract.</div>
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label>1. In the source code of the Count contract, <strong>modify the "setCount" function</strong> so it stores <strong>count multiplied by block number</strong>.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>2. <strong>Compile and deploy</strong> the modified contract.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>3. Send the "setCount" function with input: <strong>{{random}}</strong> and wait for it to finish.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>4. <strong>Call count() and paste</strong> the resulting value below:</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>
                <q-input
                square outlined
                label="Count"
                :disable="level > 5"
                :value="solution"
                @blur="(event) => $emit('setValue', {level5solution: event.target.value})"
              />
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label><i>Are you ready to get certified!?</i></q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-item>
        <q-item-section>
          <div>
            <level-submit-button
              :inputAttempts="inputAttempts"
              :level="level"
              :submissionProgress="submissionProgress"
              :buttonLevel="5"
              v-on:finish="$emit('finish')"
            />

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
