<template>
  <q-btn
    :loading="submissionProgress > 0 && submissionProgress < 100 && level === buttonLevel"
    :percentage="submissionProgress"
    :label="submitButtonLabel"
    @click="submitButtonClick"
    class="level-button"
  >
    <template v-slot:loading>
      <q-spinner-gears class="on-left" />
      Checking...
    </template>
  </q-btn>
</template>

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
        //return 'Congratulations, click here to get your Certification!'
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
      if (this.level === 6) {
        this.$router.push('/certificate/1')
      } else if (this.level > this.buttonLevel) {
        this.$router.push('/level/' + this.nextButtonLevel)
      } else {
        this.$emit('finish')
      }
    }
  }
}
</script>

<style>
</style>
