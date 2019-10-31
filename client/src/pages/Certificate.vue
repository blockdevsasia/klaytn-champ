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
          <q-card-section>
            <div class="text-subtitle2">To view the certificates (ERC721) in the Wallet:</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section >
            <q-markup-table  >
              <tbody>
                <tr><td>Open the Klaytn Wallet</td></tr>
                <tr><td>Click "Send KLAY & Token"</td></tr>
                <tr><td>Click the (+) on the "Select Token" panel</td></tr>
                <tr><td>
                  Token Symbol: "CHAMP"<br/>
                  Token Contract Address: <strong>{{contractAddress}}</strong><br/>
                  Decimals: 0<br/>
                </td></tr>
                <tr><td>Now click "Save"</td></tr>
                <tr><td>You should now have 2 CHAMP tokens</td></tr>
              </tbody>
              </q-markup-table>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-3"></div>

    </div>

  </q-page>

</template>

<style>
</style>

<script>
import { mapState, mapGetters } from 'vuex'

import { contract } from 'boot/caver'
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
    }),
    contractAddress () {
      return contract.options.address
    }
  }
}
</script>
