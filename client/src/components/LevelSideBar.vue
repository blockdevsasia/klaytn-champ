<template>
  <div>
    <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px; ">
      <div class="absolute-bottom bg-transparent">
        <!--      <q-avatar size="56px" class="q-mb-sm">-->
        <!--        <img src="https://cdn.quasar.dev/img/boy-avatar.png">-->
        <!--      </q-avatar>-->
        <div class="text-weight-bold">{{currentUser.displayName}} <q-btn size="xs" @click="logout">Logout</q-btn></div>
        <div>Address: {{address}}</div>
        <div>Level: {{level}}</div>
      </div>
    </q-img>
    <br/><br/><br/><br/><br/><br/><br/>
    <q-tabs >
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
    <q-list style="">
      <q-item-label header>Level {{selectedLevel}} help</q-item-label>

      <q-item
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'LevelSideBar',
  data () {
    return {}
  },
  methods: {
    ...mapActions('user', [
      'logout'
    ])
  },
  computed: {
    ...mapState('user', {
      level: 'level',
      selectedLevel: 'selectedLevel',
      levelSideBar: 'levelSideBar',
      currentUser: 'current',
      address: 'address'
    })

  }
}
</script>

<style>
</style>
