<template>
  <div id="navigation">
    <navigation-bar></navigation-bar>
    <navigation-burger></navigation-burger>
  </div>
</template>

<style>
  #navigation {
    height: auto;
    width: 100%;
    background: rgba(21, 54, 65, 1);
  }

  @media only screen and (max-device-width: 750px) {
    #navigation {
      /*background: none;*/
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
