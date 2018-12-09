<template>
  <div id="navigation">
    <navigation-bar v-bind:userLoggedIn="userLoggedIn"></navigation-bar>
    <navigation-tabs v-bind:userLoggedIn="userLoggedIn"></navigation-tabs>
    <navigation-burger v-bind:userLoggedIn="userLoggedIn"></navigation-burger>
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
  import { getLoginToken } from '@/LoginCookies';

  export default {
    data() {
      return {
        userLoggedIn: false,
      };
    },
    components: {
      'navigation-bar': NavigationBar,
      'navigation-tabs': NavigationTabs,
      'navigation-burger': NavigationBurger
    },
    mounted() {
      this.$root.$on('userLoggedOut', () => {
        this.userLoggedIn = false;
      });
      this.$root.$on('userLoggedIn', () => {
        this.userLoggedIn = true;
      });
    },
    created() {
      this.userLoggedIn = typeof (getLoginToken()) !== 'undefined';
    }
  };
</script>
