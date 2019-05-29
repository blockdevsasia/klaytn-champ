<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-img__image absolute-full" style="background-image: url(&quot;https://res.cloudinary.com/eoi-digital/image/upload/v1559101751/sing-up-klaytn-champ_oornpw.png&quot;); background-size: cover; background-position: 50% 50%;">
    <h3 class="singup-txt">Learn how to develop on Klaytn<br>And get rewarded!</h3>

</div>
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-white-2"
      :width="400"
    >
      <router-view></router-view>
    </q-drawer>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { mapState } from 'vuex'

export default {
  name: 'AuthLayout',
  mounted: function () {
    console.log(this.$router)
  },
  components: {
  },
  data () {
    return {
      tab: 'level',
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  computed: {
    ...mapState('user', {
      currentUser: 'current',
      level: 'level'
    })

  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
