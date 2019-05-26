<template>
  <q-page padding>
    <div v-if="currentUser">
      <q-field label="Name" stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{currentUser.displayName}}</div>
        </template>
      </q-field>
      <q-field label="Klaytn Account Address" stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{address}}</div>
        </template>
      </q-field>
    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MyAccount',
  computed: {
    ...mapState('user', {
      currentUser: 'current',
      address: 'address'
    })
  }
}
</script>

<style>
</style>
