<template>
  <div>
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">

      <q-list>
        <q-item-label header>Level {{selectedLevel}} help</q-item-label>

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
    </q-scroll-area>
    <div>
      <profile :user="currentUser" :address="address" :level="level"></profile>
      <q-tabs>
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
    </div>
    <img class="footer-inner-logo fixed absolute" src="~assets/klaytn-champ-logo.svg">
    <img class="footer-inner-logo fixed absolute" src="~assets/klaytn-champ-logo.svg">

  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters} from 'vuex'

  export default {
    name: 'LevelSideBar',
    components: {
      Profile: () => import('components/Profile')
    },
    data() {
      return {}
    },
    methods: {
      ...mapActions('user', [
        'logout'
      ])
    },
    computed: {
      ...mapGetters({
        address: 'user/address',
        selectedLevel: 'user/selectedLevel'

      }),
      ...mapState('user', {
        level: 'level',
        levelSideBar: 'levelSideBar',
        currentUser: 'current'
      })

    }
  }
</script>

<style>
</style>
