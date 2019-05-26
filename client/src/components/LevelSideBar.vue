<template>
  <div>
    <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px; ">
      <div class="absolute-bottom bg-transparent">
        <!--      <q-avatar size="56px" class="q-mb-sm">-->
        <!--        <img src="https://cdn.quasar.dev/img/boy-avatar.png">-->
        <!--      </q-avatar>-->
        <div class="text-weight-bold">{{currentUser.displayName}}</div>
        <div>Address: {{address}}</div>
        <div>Level: {{level}}</div>
      </div>
    </q-img>
    <br/><br/><br/><br/><br/><br/><br/>
    <q-tabs>
      <q-route-tab
        label="1"
        to="/level/1"
        exact
      />
      <q-route-tab
        :disable="level < 2"
        label="2"
        to="/level/2"
        exact
      />
      <q-route-tab
        :disable="level < 3"
        label="3"
        to="/level/3"
        exact
      />
      <q-route-tab
        :disable="level < 4"
        label="4"
        to="/level/4"
        exact
      />
      <q-route-tab
        :disable="level < 5"
        label="5"
        to="/level/5"
        exact
      />
    </q-tabs>
    <q-list style="">
      <q-item-label header>Level {{level}} help</q-item-label>

      <q-item
        v-for="item in levelSideBar[level]"
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
  import {mapState} from 'vuex'

  export default {
    name: 'LevelSideBar',
    data() {
      return {}
    },
    computed: {
      ...mapState('user', {
        level: 'level',
        levelSideBar: 'levelSideBar',
        currentUser: 'current',
        address: 'address'
      })

    }
  }
</script>

<style>
</style>
