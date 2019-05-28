<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
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
