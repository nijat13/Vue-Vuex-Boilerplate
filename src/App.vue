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

<style lang="scss">
@import './scss/design.scss';

  html {
    height: 100%;
  }

  body {
    margin: 0;
  }

</style>
