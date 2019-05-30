<template>
  <q-page class="content-container">
    <h6>Profile</h6>
    <ul>
      <li>Soon: Stats: Activity/Attempts</li>
      <li>Soon: Load your keystore to participate in levels 6+</li>
      <li>Soon: Connect Social Media such as LinkedIn, Github, Facebook to share and prove your certificates</li>
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
