<template>
  <q-img class="absolute-top profile-header" style="height: 95px; ">
    <div class="absolute-bottom bg-transparent">

<div class="row">
      <div class="col-4">

    <q-avatar size="56px" class="q-mb-sm">
        <img class="profile-pic" src="https://avatars3.githubusercontent.com/u/6133031?s=460&v=4">
      </q-avatar>
      </div>
      <div class="col-8">

     <div class="text-weight-bold">
        <router-link class="user-name" to="/profile">
          {{user.displayName}}
        </router-link>
<!--          <q-btn size="xs" @click="$store.dispatch('user/resetAll')">
          DEV: RESET ME
        </q-btn> -->

      </div>
      <div class="level-indu">Level: {{level}}</div>

      <div class="adress-kltn">
          <q-btn v-if="address" color="primary adress-kltn-btn" label="Klaytn Address" class="q-mt-md">
            <q-tooltip>{{address}}</q-tooltip>
          </q-btn>
              <q-btn v-else color="primary adress-kltn-btn" label="Klaytn Address" class="q-mt-md" size="xs">
            <q-tooltip>No adress</q-tooltip>
          </q-btn>
      </div>


      </div>
    </div>


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
