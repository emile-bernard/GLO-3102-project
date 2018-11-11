<template>
  <div class="media">
    <div class="media-left">Result type: {{result.getType()}}</div>
    <div class="media-content">
      <router-link :to="result.getURL()"><span>{{result.getName()}}</span></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchResultElement',
    props: ['result']
  };
</script>

<style scoped>

</style>
