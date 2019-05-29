<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-img__image absolute-full" style="background-image: url(&quot;https://res.cloudinary.com/eoi-digital/image/upload/v1559114383/main-background_x1btwj.png&quot;); background-size: cover; background-position: 50% 50%;"></div>
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
      <profile :user="currentUser" :level="leve1"></profile>
      <br/><br/><br/><br/><br/><br/><br/>

      <q-list>
        <q-item clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>My Profile</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="grade" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Certificates</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="chrome_reader_mode" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Challenges</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="monetization_on" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Earnings</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/profile">
          <q-item-section avatar>
            <q-icon name="insert_chart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Leaderboard</q-item-label>
          </q-item-section>
        </q-item>
        

      <div class="padding-top">
        <q-item clickable @click="$store.dispatch('user/logout')">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="$store.dispatch('user/logout')">
          <q-item-section avatar>
            <q-icon name="input" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </div>

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
