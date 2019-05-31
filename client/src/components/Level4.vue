<template>
  <!--------------------- LEVEL 4 ----------------------------------->
  <div
    v-if="selectedLevel === 4"
    class="row"
  >
    <q-card flat class="my-card">
      <q-card-section>
        <div class="text-h6">Contract Interaction</div>
        <div class="text-subtitle2">Interact with the Count contract by calling its function(s).</div>
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label>1. In the IDE find the Contract function calls, in the bottom-right section of the screen. You will see count(), getBlockNumber() and setCount() here. </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>2. <strong>Do a function call to "setCount"</strong>, with as input: <strong>{{random}}</strong> and click the "send" button.</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-item-label>3. On the "Transaction" tab at the bottom of the screen, you should be able to see the transaction details of the function call. <strong>Copy the Tx Hash</strong> and paste it below: </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-input
                  square outlined
                  label="Tx Hash"
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
            <level-submit-button
              :inputAttempts="inputAttempts"
              :level="level"
              :submissionProgress="submissionProgress"
              :buttonLevel="4"
              v-on:finish="$emit('finish')"
            />
<!--            <q-btn-->
<!--              :loading="submissionProgress > 0 && submissionProgress < 100"-->
<!--              :percentage="submissionProgress"-->
<!--              :label="submitButtonLabel"-->
<!--              @click="level > 4 ? $router.push('/level/5'):$emit('finish')"-->
<!--              class="level-button"-->
<!--            >-->
<!--              <template v-slot:loading>-->
<!--                <q-spinner-gears class="on-left" />-->
<!--                Checking...-->
<!--              </template>-->
<!--            </q-btn>-->
<!--            -->
<!--            <q-btn color="orange" icon="notification_important" label="hint"/>-->
<!--            <q-btn-->
<!--              :disable=" level > 4"-->
<!--              color="green"-->
<!--              text-color="black"-->
<!--              label="Check my solution"-->
<!--              @click="$emit('finish')"-->
<!--            />-->
<!--            <q-btn-->
<!--              v-if="level > 4 && selectedLevel === 4"-->
<!--              color="green"-->
<!--              text-color="black"-->
<!--              icon="check"-->
<!--              label="Proceed to Level 5"-->
<!--              to="/level/5"-->
<!--            />-->
          </div>
        </q-item-section>
      </q-item>
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
