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
      <div class="col-3"></div>
      <div class="col-6">

        <q-card flat class="my-card bg-yellow-1" >

          <q-btn size="xs" @click="$store.dispatch('user/resetAll')">BETA TESTING: RESET ME</q-btn>
          <q-card-section>
            <div class="text-subtitle2">To view the certificates (ERC721) in the Wallet:</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section >
            <q-markup-table  >
              <tbody>
                <tr><td>
                  <ol>
                    <li>Open the Klaytn Wallet</li>
                    <li>Click "Send KLAY & Token"</li>
                    <li>Click the (+) on the "Select Token" panel</li>
                    <li>Token Symbol: "CHAMP"</li>
                    <li>Token Contract Address: <strong>{{contractAddress}}</strong></li>
                    <li>Decimals: 0</li>
                    <li><b>Now click "Save"</b></li>
                  </ol>
                </td></tr>
                <tr><td>You should now have 2 CHAMP tokens:
                  <a :href="badgeImgUrl(badge0)" target="_blank">Klaytn Initiate</a>
                  and <a :href="badgeImgUrl(badge1)" target="_blank">Klaytn Associate Developer</a></td></tr>
                <tr><td>You can <a target="_blank" :href="orbUrl">view your tokens in <img style="vertical-align:middle" src="http://cypress.explore.bitcrystals.com/images/orbExplorerlogo.png"/></a> as well</td></tr>
              </tbody>
              </q-markup-table>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-3"></div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import { contract } from 'boot/caver'
export default {
  name: 'PageIndex',
  computed: {
    ...mapGetters({
      address: 'user/address',
      badge0: 'user/badge0',
      badge1: 'user/badge1',
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
    }),
    contractAddress () {
      return contract.options.address
    },
    orbUrl () {
      return 'http://cypress.explore.bitcrystals.com/address/?address=' + this.address
    }
  },
  methods: {
    badgeImgUrl (tokenId) {
      return 'https://klaytn.champ.blockdevs.asia/token_img/' + tokenId
    }
  }
}
</script>
