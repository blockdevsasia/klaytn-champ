<template>
  <q-layout view="lHh Lpr lFf">
    <div
      class="q-img__image absolute-full"
      style="background-image: url('statics/main-background.png'); background-size: cover; background-position: 50% 50%;">

    </div>
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
      content-class="bg-white-2"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">

      <q-list>
        <router-link class="no-style" to="/">
        <q-item class="q-item-m" clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>My Profile</q-item-label>
          </q-item-section>
        </q-item>
      </router-link>

        <q-item class="q-item-m" clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="grade" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Certificates</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-item-m" clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="chrome_reader_mode" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Challenges</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-item-m" clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="monetization_on" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Earnings</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-item-m" clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="insert_chart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Leaderboard</q-item-label>
          </q-item-section>
        </q-item>

      <div class="padding-top">
        <q-item class="q-item-m" clickable @click="$store.dispatch('user/logout')">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-item-m" clickable @click="$store.dispatch('user/logout')">
          <q-item-section avatar>
            <q-icon name="input" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </div>

      </q-list>
      </q-scroll-area>

      <profile :user="currentUser" :level="level"></profile>
        <img class="footer-inner-logo fixed absolute" src="~assets/klaytn-champ-logo.svg">
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
