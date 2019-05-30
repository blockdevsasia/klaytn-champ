<template>
  <q-page class="content-container">
    <h6>Introduction</h6>
    <p class="content-container">Below you can find an overview of the different challenges from Klay Kakao’s global
      public blockchain project Klaytn is an enterprise-grade, service-centric platform that brings user-friendly
      blockchain experience to millions. It combines the best features of both public blockchains (decentralized data &
      control, distributed governance) and private blockchains (low latency, high scalability) via an efficient ‘hybrid’
      design.
    </p>

    <div class="q-pa-md">
      <div class="row">
        <div class="col home-button left-hb">

          <router-link to="/level/1">
            <div class="row">
              <div class="col-12 col-md-4">
                <img class="btnimg-dash center" src="assets/klaytn-basics.png" alt=""/>

              </div>
              <div class="col-12 col-md-8">
                <p class="text-weight-bolder">Mastering the basic</p>
                <p>Get started with this challenge to learn
                  the basic set-up with the Klaytn token.</p>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col home-button">
          <div class="row">
            <div class="col-12 col-md-4">
              <img class="btnimg-dash center" src="assets/klaytn-advanced.png" alt=""/>
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
              <img class="btnimg-dash center" src="assets/klaytn-expert.png" alt=""/>
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
              <img class="btnimg-dash center" src="assets/klaytn-champ-logo.png" alt=""/>
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
  export default {
    name: 'PageIndex'
  }
</script>
