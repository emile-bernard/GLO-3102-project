<template>
  <div id="navigation-burger">
    <navigation-burger-menu v-bind:userLoggedIn="userLoggedIn"></navigation-burger-menu>
    <navigation-burger-icon></navigation-burger-icon>
  </div>
</template>

<style>
  #navigation-burger {
    display: none;
    overflow: auto;
    height: auto;
  }

  @media only screen and (max-width: 750px), (max-device-width: 750px) {
    #navigation-burger {
      display: block;
    }
  }
</style>

<script>
  import NavigationBurgerIcon from '@/components/Navigation/NavigationBurgerIcon';
  import NavigationBurgerMenu from '@/components/Navigation/NavigationBurgerMenu';

  export default {
    props: ['userLoggedIn'],
    components: {
      'navigation-burger-icon': NavigationBurgerIcon,
      'navigation-burger-menu': NavigationBurgerMenu
    },
  };
</script>
