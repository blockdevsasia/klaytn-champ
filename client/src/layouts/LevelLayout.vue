<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>

      <q-toolbar>

        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          class="menu-bar"
        >
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Klaytn Champ: Level {{selectedLevel}}
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
      :width="400"
    >
      <level-side-bar></level-side-bar>
    </q-drawer>

    <q-page-container>

      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import LevelSideBar from 'components/LevelSideBar'
import { mapState } from 'vuex'

export default {
  name: 'MyLayout',
  mounted: function () {
    console.log(this.$router)
  },
  components: {
    LevelSideBar: LevelSideBar
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
      level: 'level',
      selectedLevel: 'selectedLevel'
    })

  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
