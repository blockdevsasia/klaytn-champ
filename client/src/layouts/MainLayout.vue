<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>

      <q-toolbar>

        <q-toolbar-title>
          Klaytn Champ
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <profile :user="currentUser" :level="level"></profile>
      <br/><br/><br/><br/><br/><br/><br/>

      <q-list>
        <q-item clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>My Profile</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Certificates</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Challenges</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Earnings</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Leaderboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="$store.dispatch('user/logout')">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { mapState } from 'vuex'

export default {
  name: 'MainLayout',
  components: {
    Profile: () => import('components/Profile')
  },
  data () {
    return {
      tab: 'level',
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },

  computed: {
    ...mapState('user', {
      level: 'level',
      levelSideBar: 'levelSideBar',
      currentUser: 'current'
    })

  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
