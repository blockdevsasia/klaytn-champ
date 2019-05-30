<template>
  <!--------------------- LEVEL 4 ----------------------------------->
  <div
    v-if="selectedLevel === 4"
    class="row"
  >
    <q-card flat class="my-card">
      <q-card-section>
        <div class="text-h6">Contract Interaction</div>
        <div class="text-subtitle2">Level 4: Your goal is to interact with the Count contract by calling its function(s).</div>
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label>1. Using the IDE, go to the Count details pane located on the lower right side of the screens.</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>2. Do a function call to "setCount", with as input the amount you received in the beginning and click the "send" button.</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>3. On the "Transaction" output tab, You should be able to see the transaction details of the function call. Copy the blockNumber and paste it in the textbox below</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>

                <q-input
                  square outlined
                  label="Transaction Hash"
                  :disable="level > 4"
                  :value="solution"
                  @blur="(event) => $emit('setValue', {level4solution: event.target.value})"
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
              :disable=" level > 4"
              color="green"
              text-color="black"
              label="Check my solution"
              @click="$emit('finish')"
            />
            <q-btn
              v-if="level > 4 && selectedLevel === 4"
              color="green"
              text-color="black"
              icon="check"
              label="Proceed to Level 5"
              to="/level/5"
            />
          </div>
        </q-item-section>
      </q-item>
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
