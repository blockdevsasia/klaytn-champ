<template>
  <q-page class="content-container">
    <h6>Earn Champ/Klaytn token rewards</h6>
    <p class="content-container">Earn rewards and reputation by providing value to the Klaytn Champ platform.</p>
    <div class="q-pa-md">
      <div class="row">
        <div class="col home-button left-hb">
          <div class="row">
            <div class="col-12 col-md-4">
              <router-link :to="certificationLink(1)">
                <img class="btnimg-dash center" src="~assets/klaytn-comming-soon.png" alt="comming soon"/>
              </router-link>
            </div>
            <div class="col-12 col-md-8">
              <p class="text-weight-bolder">Share and earn rewards</p>
              <p>Share cources with friends and earn Champ and Klay tokens.</p>
            </div>
          </div>
        </div>

        <div class="col home-button">
          <div class="row">
            <div class="col-12 col-md-4">
                <img class="btnimg-dash center" src="~assets/klaytn-comming-soon.png" alt="comming soon"/>
            </div>
            <div class="col-12 col-md-8">
              <p class="text-weight-bolder">Your Champ token balance</p>
              <p>Klaytn Champ will provide an integraded wallet where you can see your balances.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col home-button left-hb">
          <div class="row">
            <div class="col-12 col-md-4">
                <img class="btnimg-dash center" src="~assets/klaytn-comming-soon.png" alt="comming soon"/>
            </div>
            <div class="col-12 col-md-8">
              <p class="text-weight-bolder">Improve course content</p>
              <p>Earn rewards and reputation for improving course content.</p>
            </div>
          </div>
        </div>

        <div class="col home-button">
          <div class="row">
            <div class="col-12 col-md-4">
              <img class="btnimg-dash center" src="~assets/klaytn-champ-logo.png" alt=""/>
            </div>
            <div class="col-12 col-md-8">
              <p class="text-weight-bolder">Much more to come!</p>
              <p>Stay tuned for the latest courses and challances and earn real rewards!</p>
            </div>
          </div>
        </div>
      </div>

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
