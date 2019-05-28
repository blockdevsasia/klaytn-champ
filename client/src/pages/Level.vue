<template>
  <q-page class="content-container">
    <!--------------------- LEVEL 1 ----------------------------------->
    <level-1
      v-if="selectedLevel === 1"
      :selectedLevel="selectedLevel"
      :level="level"
      :solution="address"
      v-on:setValue="setUserField"
      v-on:finish="level1submit"
    />

    <!--------------------- LEVEL 2 ----------------------------------->
    <level-2
      v-if="selectedLevel === 2"
      :selectedLevel="selectedLevel"
      :level="level"
      :solution="level2solution"
      v-on:setValue="setUserField"
      v-on:finish="level2submit"
    />

    <!--------------------- LEVEL 3 ----------------------------------->
    <level-3
      v-if="selectedLevel === 3"
      :selectedLevel="selectedLevel"
      :level="level"
      :solution="level3solution"
      v-on:setValue="setUserField"
      v-on:finish="level3submit"
    />

    <!--------------------- LEVEL 4 ----------------------------------->
    <level-4
      v-if="selectedLevel === 4"
      :selectedLevel="selectedLevel"
      :level="level"
      :solution="level4solution"
      v-on:setValue="setUserField"
      v-on:finish="level4submit"
    />

    <!--------------------- LEVEL 5 ----------------------------------->
    <level-5
      v-if="selectedLevel === 5"
      :selectedLevel="selectedLevel"
      :level="level"
      :solution="level5solution"
      v-on:setValue="setUserField"
      v-on:finish="level5submit"
    />
  </q-page>
</template>

<style>
</style>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Level1 from 'components/Level1'
import Level2 from 'components/Level2'
import Level3 from 'components/Level3'
import Level4 from 'components/Level4'
import Level5 from 'components/Level5'

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
    return {
    }
  },
  methods: {
    ...mapActions('user', [
      'setUserField'
    ]),
    level1submit () {
      this.$store.dispatch('external/httpRegisterUser', this.address)
      console.log('submitted address')
    },
    level2submit () {
      this.$store.dispatch('external/httpCheckLevel2', this.address)
      console.log('submitted address')
    },
    level3submit () {
      this.$store.dispatch('external/httpCheckLevel3', { address: this.address, contract: this.level3solution })
      console.log('level3submit', this.level3solution)
    },
    level4submit () {
      this.$store.dispatch('external/httpRegisterUser', this.level4data)
      console.log('submitted address')
    },
    level5submit () {
      this.$store.dispatch('external/httpRegisterUser', this.level5data)
      console.log('submitted address')
    }
  },

  computed: {
    ...mapGetters({
      address: 'user/address',
      level2solution: 'user/level2solution',
      level3solution: 'user/level3solution',
      level4solution: 'user/level4solution',
      level5solution: 'user/level5solution'
    }),
    ...mapState('user', {
      currentUser: 'current',
      randomAmount: 'randomAmount',
      level: 'level',
      selectedLevel: 'selectedLevel'
    })
  }
}
</script>
