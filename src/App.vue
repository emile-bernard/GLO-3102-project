<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation';

  export default {
    name: 'app',
    components: {
      'nav-menu': Navigation,
    },
  };
</script>

<style lang="scss">
  @import "@/../node_modules/bulma/bulma.sass";
  @import "@/../node_modules/bulmaswatch/superhero/bulmaswatch.scss";

  body {
    margin: 0;
    padding: 0;
    color: $grey-lighter;
  }
</style>
