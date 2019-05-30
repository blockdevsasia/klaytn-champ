<template>
  <q-page class="content-container">
    <h6>Leaderboard</h6>
    <ul>
      <li>Soon: Winners with least attempts</li>
      <li>Soon: Top countries</li>
      <li>Soon: Highest earners through referrals</li>
    </ul>
  </q-page>

</template>

<style>
</style>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  computed: {
    ...mapGetters({
      selectedLevel: 'user/selectedLevel'
    }),
    ...mapState('user', {
      currentUser: 'current',
      level: 'level'
    })
  },
  methods: {
    certificationLink (certificationLevel) {
      if (certificationLevel === 1 && this.level > 5) {
        return '/certificate/1'
      } else {
        return '/level/' + this.selectedLevel
      }
    }
  }
}
</script>
