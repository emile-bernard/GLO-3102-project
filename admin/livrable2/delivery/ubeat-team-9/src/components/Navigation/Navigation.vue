<template>
  <div id="navigation">
    <navigation-bar></navigation-bar>
    <navigation-tabs></navigation-tabs>
    <navigation-burger></navigation-burger>
  </div>
</template>

<style>
  #navigation {
    height: auto;
    width: 100%;
    background: rgba(21, 54, 65, 1);
  }
</style>

<script>
  import NavigationBar from '@/components/Navigation/NavigationBar';
  import NavigationTabs from '@/components/Navigation/NavigationTabs';
  import NavigationBurger from '@/components/Navigation/NavigationBurger';

  export default {
    components: {
      'navigation-bar': NavigationBar,
      'navigation-tabs': NavigationTabs,
      'navigation-burger': NavigationBurger
    },
  };
</script>
