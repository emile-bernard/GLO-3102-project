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
  import NavigationBar from '@/components/NavigationBar';
  import NavigationTabs from '@/components/NavigationTabs';
  import NavigationBurger from '@/components/NavigationBurger';

  export default {
    components: {
      'navigation-bar': NavigationBar,
      'navigation-tabs': NavigationTabs,
      'navigation-burger': NavigationBurger
    },
    methods: {
      updateTabs(tabId) {
        this.resetAllTabs();
        document.getElementById(tabId).className = 'is-active';
      },
      resetAllTabs() {
        const tabs = document.getElementById('navigation-tabs')
          .getElementsByTagName('li');
        for (let i = 0; i < tabs.length; i += 1) {
          const tab = document.getElementById(tabs[i].id);
          if (tab.classList.contains('is-active')) {
            tab.classList.remove('is-active');
          }
        }
      }
    }
  };
</script>
