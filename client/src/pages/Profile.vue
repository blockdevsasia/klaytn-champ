<template>
  <q-page class="content-container">
    <h6>Profile</h6>
    <ul>
      <li>Soon: Stats: Activity/Attempts</li>
      <li>Soon: Load your keystore to participate in levels 6+</li>
      <li>Soon: Connect Social Media such as LinkedIn, Github, Facebook to share and prove your certificates</li>
    </ul>


    <h6>Welcome to the Klaytn Challenges</h6>
    <p class="content-container">Kakao’s global public blockchain project Klaytn is an enterprise-grade, service-centric
      platform that brings user-friendly blockchain experience to millions. It combines the best features of both public
      blockchains (decentralized data & control, distributed governance) and private blockchains (low latency, high
      scalability) via an efficient ‘hybrid’ design.<br/><br/>
      <i>Below you can find an overview of the different challenges from Klatyn.</i>
    </p>
    <div class="q-pa-md">
      <div class="row">
        <div class="col home-button left-hb">
          <div class="row">
            <div class="col-12 col-md-4">
              <router-link :to="certificationLink(1)">
                <img class="btnimg-dash center" src="~assets/klaytn-basics.png" alt=""/>
              </router-link>
            </div>
            <div class="col-12 col-md-8">
              <p class="text-weight-bolder">Mastering the basics</p>
              <p>Get started with this challenge to learn
                the basic set-up with the Klaytn token.</p>
            </div>
          </div>
        </div>

        <div class="col home-button">
          <div class="row">
            <div class="col-12 col-md-4">
              <img class="btnimg-dash center" src="~assets/klaytn-advanced.png" alt=""/>
            </div>
            <div class="col-12 col-md-8">
              <p class="text-weight-bolder">Diving into advanced methods</p>
              <p>Start this challenge to get your skills to
                the next level.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col home-button left-hb">
          <div class="row">
            <div class="col-12 col-md-4">
              <img class="btnimg-dash center" src="~assets/klaytn-expert.png" alt=""/>
            </div>
            <div class="col-12 col-md-8">
              <p class="text-weight-bolder">For the experts</p>
              <p>Are you ready for a big challenge?
                Let’s get started!</p>
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

    </div>    <h6>Welcome to the Klaytn Challenges</h6>
    <p class="content-container">Kakao’s global public blockchain project Klaytn is an enterprise-grade, service-centric
      platform that brings user-friendly blockchain experience to millions. It combines the best features of both public
      blockchains (decentralized data & control, distributed governance) and private blockchains (low latency, high
      scalability) via an efficient ‘hybrid’ design.<br/><br/>
      <i>Below you can find an overview of the different challenges from Klatyn.</i>
    </p>
    <div class="q-pa-md">
      <div class="row">
        <div class="col home-button left-hb">
          <div class="row">
            <div class="col-12 col-md-4">
              <router-link :to="certificationLink(1)">
                <img class="btnimg-dash center" src="~assets/klaytn-basics.png" alt=""/>
              </router-link>
            </div>
            <div class="col-12 col-md-8">
              <p class="text-weight-bolder">Mastering the basics</p>
              <p>Get started with this challenge to learn
                the basic set-up with the Klaytn token.</p>
            </div>
          </div>
        </div>

        <div class="col home-button">
          <div class="row">
            <div class="col-12 col-md-4">
              <img class="btnimg-dash center" src="~assets/klaytn-advanced.png" alt=""/>
            </div>
            <div class="col-12 col-md-8">
              <p class="text-weight-bolder">Diving into advanced methods</p>
              <p>Start this challenge to get your skills to
                the next level.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col home-button left-hb">
          <div class="row">
            <div class="col-12 col-md-4">
              <img class="btnimg-dash center" src="~assets/klaytn-expert.png" alt=""/>
            </div>
            <div class="col-12 col-md-8">
              <p class="text-weight-bolder">For the experts</p>
              <p>Are you ready for a big challenge?
                Let’s get started!</p>
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
