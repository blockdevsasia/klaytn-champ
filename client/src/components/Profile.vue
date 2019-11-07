<template>
  <q-img class="absolute-top profile-header" style="height: 95px; ">
    <div class="absolute-bottom bg-transparent">

      <div class="row">
        <div class="col-4">
          <router-link class="user-name" to="/profile">
            <q-img
              src="statics/logo_champ.png"
              spinner-color="white"
              style="height: 56px; max-width: 56px"
            />
          </router-link>
        </div>
        <div class="col-8">

          <div class="text-weight-bold user-name">
            {{user.displayName}}
          </div>
          <div class="level-indu">Level: {{level}}</div>

          <div class="adress-kltn">
            <q-btn v-if="address" color="primary adress-kltn-btn" label="Klaytn Address" class="q-mt-md" size="xs">
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
