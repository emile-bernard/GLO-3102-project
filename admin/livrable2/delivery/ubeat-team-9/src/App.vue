<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import "~bulma/bulma.sass";
  @import "~bulmaswatch/superhero/bulmaswatch.scss";

  body {
    margin: 0;
    padding: 0;
    color: $grey-lighter;
  }

  p {
    font-size: 20px;
  }
</style>

<script>
  import Navigation from '@/components/Navigation/Navigation';

  export default {
    name: 'app',
    components: {
      'nav-menu': Navigation,
    },
  };
</script>
