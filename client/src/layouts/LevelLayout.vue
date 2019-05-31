<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-img__image absolute-full"
         style="background-image: url('statics/main-background.png'); background-size: cover; background-position: 50% 50%;"></div>
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
          <q-icon name="menu"/>
        </q-btn>
        <q-toolbar-title>
          Mastering the basics: Level {{selectedLevel}}
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      :width="300"
    >
      <q-scroll-area class="scroll-main-dash">
        <q-list>
          <q-item class="q-item-m"
                  v-for="item in levelSideBar[selectedLevel]"
                  v-bind:key="item.label"
                  clickable
                  tag="a"
                  target="_blank"
                  :href="item.link"
          >
            <q-item-section avatar v-if="item.icon">
              <q-icon :name="item.icon"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{item.label}}</q-item-label>
              <q-item-label caption>{{item.description}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <a href="https://www.blockdevs.asia/klaytn-champ/" target="_blank">
          <img class="footer-inner-logo fixed absolute" src="~assets/klaytn-champ-logo.svg">
        </a>

      </q-scroll-area>
      <profile :user="currentUser" :address="address" :level="level"></profile>
      <q-tabs class="absolute-top">
        <q-route-tab
          label="1"
          to="/level/1"
          exact
        />
        <q-route-tab
          label="2"
          to="/level/2"
          exact
        />
        <q-route-tab
          label="3"
          to="/level/3"
          exact
        />
        <q-route-tab
          label="4"
          to="/level/4"
          exact
        />
        <q-route-tab
          label="5"
          to="/level/5"
          exact
        />
      </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'MyLayout',
  mounted: function () {
    console.log(this.$router)
  },
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
    ...mapGetters('user', {
      address: 'address',
      selectedLevel: 'selectedLevel'

    }),
    ...mapState('user', {
      currentUser: 'current',
      levelSideBar: 'levelSideBar',
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
