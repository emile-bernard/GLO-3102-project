<template>
  <nav>
    <navigation-bar></navigation-bar>
    <navigation-burger></navigation-burger>
  </nav>
</template>

<style>
  nav {
    height: auto;
    width: 100%;
    background: rgba(21, 54, 65, 1);
  }

  @media only screen and (max-device-width: 750px) {
    nav {
      background: none;
    }
  }
</style>

<script>
  import NavigationBar from '@/components/NavigationBar';
  import NavigationBurger from '@/components/NavigationBurger';

  export default {
    components: {
      'navigation-bar': NavigationBar,
      'navigation-burger': NavigationBurger
    }
  };
</script>
