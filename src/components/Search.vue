<template>
  <div>
    <h1>Search</h1>
    <div>GLO-3102 Search page</div>
    <navigation-bar-search></navigation-bar-search>
  </div>
</template>

<style>
</style>

<script>
  import NavigationBarSearch from '@/components/NavigationBarSearch';

  export default {
    components: {
      'navigation-bar-search': NavigationBarSearch,
    },
  };
</script>
