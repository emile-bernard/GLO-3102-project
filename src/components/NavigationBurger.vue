<template>
  <div id="navigation-burger">
    <navigation-burger-menu></navigation-burger-menu>
    <navigation-burger-icon></navigation-burger-icon>
  </div>
</template>

<style>
  #navigation-burger {
    display: none;
    overflow: auto;
  }

  @media only screen and (max-width: 750px), (max-device-width: 750px) {
    #navigation-burger {
      display: block;
    }
  }
</style>

<script>
  import NavigationBurgerIcon from '@/components/NavigationBurgerIcon';
  import NavigationBurgerMenu from '@/components/NavigationBurgerMenu';

  export default {
    components: {
      'navigation-burger-icon': NavigationBurgerIcon,
      'navigation-burger-menu': NavigationBurgerMenu
    },
  };
</script>
