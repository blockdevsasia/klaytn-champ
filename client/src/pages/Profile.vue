<template>
  <q-page class="content-container">
    <h6>{{user.displayName}}'s Profile </h6>
      <p class="content-container">View all your profile statitics, badges, progress and much more, this section is still mostly under contrcution but will be released soon.</p>
    <div class="q-pa-md">
      <div class="row">
        <div class="col home-button left-hb">
          <div class="row">
            <div class="col-12 col-md-4">
                <img class="btnimg-dash center" src="~assets/klaytn-comming-soon.png" alt="comming soon"/>
            </div>
            <div class="col-12 col-md-8">
              <p class="text-weight-bolder">Statistics, Badges and Certificates</p>
              <p>Get an overview of your statistics, badges and certificates in one place binded to your blockchain identity.</p>
            </div>
          </div>
        </div>

        <div class="col home-button">
          <div class="row">
            <div class="col-12 col-md-4">
                <img class="btnimg-dash center" src="~assets/klaytn-comming-soon.png" alt="comming soon"/>
            </div>
            <div class="col-12 col-md-8">
              <p class="text-weight-bolder">Link your organisation</p>
              <p>Link your organisation to your Klaytn Champ identity so that people can verify this.</p>
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
              <p class="text-weight-bolder">Social verified identity and skills</p>
              <p>Skills and adcievements will be veriefied trueout your social channels and will be connected to your blockchain identity.</p>
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
              <p>Stay tuned for the latest fetures, courses and challances and earn real rewards!</p>
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
      user: 'current',
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
