<template>
  <q-page class="flex flex-center">
    <div class="row">
    <h3 class="col-12">{{currentUser.displayName}}</h3>
    <p class="col-12">You have successfully passed </p>
      <h5>Klaytn Champ 1</h5>
    </div>
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
      level: 'level'
    })
  }
}
</script>
