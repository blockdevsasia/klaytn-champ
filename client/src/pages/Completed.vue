<template>
    <div class="row" style="padding-top:100px">
        <div class="col-12 col-md-4"></div>
        <div class="col-12 col-md-4">
            <q-card class="my-card bg-blue text-white">
            <q-card-section>

                <div class="row">
                    <div class="col-12 col-md-4">
                        <q-icon name="check_circle" size="80px"/>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="text-h6">Course Completed!</div>
                    </div>
                </div>
            </q-card-section>

            <q-card-actions>
                 <div class="col-12 col-md-4"></div>
                 <div class="col-12 col-md-6">
                     <q-btn flat
                        @click="submitButtonClick"
                     >
                        View Certificate
                    </q-btn>
                 </div>
                 <div class="col-12 col-md-3"></div>

            </q-card-actions>
        </q-card>
        </div>
        <div class="col-12 col-md-4"></div>

    </div>

</template>

<style>
</style>

<script>
export default {
  data () {
    return {}
  },
  props: {
    level: {
      type: Number
    },
    submissionProgress: {
      type: Number
    },
    inputAttempts: {
      type: Number
    },
    buttonLevel: {
      type: Number
    }
  },
  computed: {
    nextButtonLevel () {
      return this.buttonLevel + 1
    },
    submitButtonLabel () {
      console.log('att', this.inputAttempts)
      if (this.level === 6) {
        //return 'Congratulations, you successfully passed the first track!'
        this.$router.push('/completed/1')
      } else if (this.level > this.buttonLevel) {
        return 'Proceed to level ' + this.nextButtonLevel
      } else if (this.inputAttempts === 0) {
        return 'Check solution'
      } else {
        return 'Try again (' + this.inputAttempts + ') attempts so far'
      }
    }
  },
  methods: {
    submitButtonClick () {
      this.$router.push('/certificate/1')
    }
  }
}
</script>
