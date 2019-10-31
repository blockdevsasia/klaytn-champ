<template>
  <q-page class="content-container">
    <!--------------------- LEVEL 1 ----------------------------------->
    <level-1
      v-if="selectedLevel === 1"
      :selectedLevel="selectedLevel"
      :submissionProgress="submissionProgress"
      :inputAttempts="inputAttempts"
      :level="level"
      :solution="address"
      v-on:setValue="setUserField"
      v-on:finish="level1submit"
    />

    <!--------------------- LEVEL 2 ----------------------------------->
    <level-2
      v-if="selectedLevel === 2"
      :selectedLevel="selectedLevel"
      :submissionProgress="submissionProgress"
      :inputAttempts="inputAttempts"
      :level="level"
      :solution="level2solution"
      v-on:setValue="setUserField"
      v-on:finish="level2submit"
    />

    <!--------------------- LEVEL 3 ----------------------------------->
    <level-3
      v-if="selectedLevel === 3"
      :selectedLevel="selectedLevel"
      :submissionProgress="submissionProgress"
      :inputAttempts="inputAttempts"
      :level="level"
      :solution="level3solution"
      v-on:setValue="setUserField"
      v-on:finish="level3submit"
    />

    <!--------------------- LEVEL 4 ----------------------------------->
    <level-4
      v-if="selectedLevel === 4"
      :selectedLevel="selectedLevel"
      :submissionProgress="submissionProgress"
      :inputAttempts="inputAttempts"
      :level="level"
      :solution="level4solution"
      :random="random"
      v-on:setValue="setUserField"
      v-on:finish="level4submit"
    />

    <!--------------------- LEVEL 5 ----------------------------------->
    <level-5
      v-if="selectedLevel === 5"
      :selectedLevel="selectedLevel"
      :submissionProgress="submissionProgress"
      :inputAttempts="inputAttempts"
      :level="level"
      :solution="level5solution"
      :random="random"
      v-on:setValue="setUserField"
      v-on:finish="level5submit"
    />
  </q-page>
</template>
<style>
</style>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Vue from 'vue'
import VueConfetti from 'vue-confetti'
import Level1 from 'components/Level1'
import Level2 from 'components/Level2'
import Level3 from 'components/Level3'
import Level4 from 'components/Level4'
import Level5 from 'components/Level5'

Vue.use(VueConfetti)

export default {
  name: 'Level',
  components: {
    Level1: Level1,
    Level2: Level2,
    Level3: Level3,
    Level4: Level4,
    Level5: Level5
  },
  mounted: function () {

  },
  data () {
    return { }
  },
  methods: {
    ...mapActions('user', [
      'setUserField'
    ]),
    level1submit () {
      this.$store.commit('user/inputAttempts', this.inputAttempts + 1)
      this.$store.commit('user/submissionProgress', 10)
      this.$store.dispatch('external/httpRegisterUser', this.address)
    },
    level2submit () {
      this.$store.commit('user/inputAttempts', this.inputAttempts + 1)
      this.$store.commit('user/submissionProgress', 10)
      this.$store.dispatch('external/httpCheckLevel2', { address: this.address, solution: this.level2solution })
    },
    level3submit () {
      this.$store.commit('user/inputAttempts', this.inputAttempts + 1)
      this.$store.commit('user/submissionProgress', 10)
      this.$store.dispatch('external/httpCheckLevel3', { address: this.address, solution: this.level3solution })
    },
    level4submit () {
      this.$store.commit('user/inputAttempts', this.inputAttempts + 1)
      this.$store.commit('user/submissionProgress', 10)
      this.$store.dispatch('external/httpCheckLevel4', { address: this.address, solution: this.level4solution })
    },
    level5submit () {
      this.$store.commit('user/inputAttempts', this.inputAttempts + 1)
      this.$store.commit('user/submissionProgress', 10)
      this.$store.dispatch('external/httpCheckLevel5', { address: this.address, solution: this.level5solution })
    }
  },
  computed: {
    ...mapGetters({
      address: 'user/address',
      selectedLevel: 'user/selectedLevel',
      level2solution: 'user/level2solution',
      level3solution: 'user/level3solution',
      level4solution: 'user/level4solution',
      level5solution: 'user/level5solution'
    }),
    ...mapState('user', {
      currentUser: 'current',
      random: 'random',
      submissionProgress: 'submissionProgress',
      level: 'level',
      inputAttempts: 'inputAttempts'
    })
  },
  watch: {
    level (newValue, oldValue) {
      console.log('levelchanged to: ', newValue, ' from: ', oldValue)
      this.$confetti.start({ shape: 'rect' })
    },
    selectedLevel (newValue, oldValue) {
      this.$store.commit('user/submissionProgress', 0)
      this.$store.commit('user/inputAttempts', 0)

      this.$confetti.stop()
    }
  }
}
</script>
