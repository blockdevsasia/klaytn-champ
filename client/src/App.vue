<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function () {
    this.$store.dispatch('user/init')
  }
}
</script>

<style>
</style>
