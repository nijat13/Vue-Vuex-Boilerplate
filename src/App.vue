<template>
  <router-view></router-view>
</template>

<script>
  import store from './vuex/store'
  export default {
    components: {},
    store,
    methods: {}
  }
</script>

<style>
  html {
    height: 100%;
  }

  body {
  }

  #main {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  .header {
    width: 100%;
  }
</style>
