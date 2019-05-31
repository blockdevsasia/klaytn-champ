<template>
  <q-page class="flex flex-center">
    <div class="q-img__image absolute-full certificate-bg"
         style="background-image: url('statics/certificate-bg.png');background-size: cover;background-position: 50% 50%;"></div>
    <div class="row certificate-content">
      <div class="col-12"><img class="certificate-logo" src="~assets/klaytn-champ-logo.svg"></div>
      <p class="col-12">Championship Certificate</p>
      <h3 class="col-12">{{currentUser.displayName}}</h3>
      <p class="col-12">Hereby we testify that {{currentUser.displayName}} has completed the full challenge of Klaytn and is hereby a
        certified Klaytn Champion.</p>
      <h6 class="col-12">Coming soon: View the Champ Certificate token in your Klaytn Wallet</h6>
      <div class="col-3"></div>
      <div class="col-6">
        <q-btn
          :disable="true"
          align="between"
          class="btn-fixed-width view-ctf01"
          label="View Token in Klaytn Wallet"
               icon="verified_user"
        />
      </div>
      <div class="col-3"></div>

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
