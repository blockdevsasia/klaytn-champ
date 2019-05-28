<template>
  <!--------------------- LEVEL 5 ----------------------------------->
  <div
    v-if="selectedLevel === 5"
    class="row"
    QPageContainer
  >
    <q-card flat class="my-card">
      <q-card-section>
        <div class="text-h6">Contract Modification and Redeployment</div>
        <div class="text-subtitle2">Level 5: Your goal is to modify and redeploy the Count contract.</div>
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label>1. From the IDE, change the "setCount" function so it stores count multiplied by.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>2. Compile and deploy the updated source.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>3. Call the "setCount" with any numeric value that you want.</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>4. Call count() and paste the resulting value below.</q-item-label>
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
        </q-list>
      </q-card-section>
      <q-item>
        <q-item-section>
          <div>
            <q-btn color="orange" icon="notification_important" label="hint"/>
            <q-btn
              :disable=" level > 5"
              color="green"
              text-color="black"
              label="This is the solution!"
              @click="$emit('finish')"
            />
            <q-btn
              v-if="level > 5 && selectedLevel === 5"
              color="green"
              text-color="black"
              icon="check"
              label="Winner!!!"
              to="/certificate"
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
        When a contract is redeployed, it stays in the blockchain forever. The old contract doesn't get overwritten.
        The redeployed contract will have a different address.
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
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
