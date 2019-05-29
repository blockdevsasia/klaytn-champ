<template>
  <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px; ">
    <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img :src="user.photoURL">
            </q-avatar>
      <div class="text-weight-bold"><router-link to="/" >{{user.displayName}}</router-link> <q-btn size="xs" @click="$store.dispatch('user/logout')">Logout</q-btn></div>
      <div v-if="address">Address: {{address}}</div>
      <div>Level: {{level}}</div>
    </div>
  </q-img>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    user: {
      type: Object
    },
    address: {
      type: String,
      default: ''
    },
    level: {
      type: Number
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
