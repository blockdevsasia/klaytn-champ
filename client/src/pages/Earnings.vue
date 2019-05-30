<template>
  <q-page class="content-container">
    <h6>Earn</h6>
    <ul>
      <li>Soon: Share with friends and earn Klay</li>
      <li>Soon: Your Champ token balance</li>
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
