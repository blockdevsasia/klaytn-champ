<template>
  <q-page class="flex flex-center">
    <div class="q-img__image absolute-full certificate-bg" style="background-image: url(&quot;statics/certificate-bg.png&quot;);background-size: cover;background-position: 50% 50%;"></div>
    <div class="row certificate-content">
    <div class="col-12"><img class="certificate-logo" src="~assets/klaytn-champ-logo.svg"></div>
    <p class="col-12">Championship Certificate</p>
    <h3 class="col-12">{{currentUser.displayName}}</h3>
    <p class="col-12">Hereby we testify that Roy Selbach has completed the full challenge of Klaytn and is hereby a certified Klaytn Champion.</p>
    <h6 class="col-12">TX Hash: 0xec752bfce9f92403446f05e12f1cd980a7a10be45cde8daecab25f21b6c4d83c</h6>
<div class="col-3"></div>
<div class="col-6">
<q-btn align="between" class="btn-fixed-width view-ctf01" label="View certificate on Klaytn Scope" icon="verified_user" />
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
