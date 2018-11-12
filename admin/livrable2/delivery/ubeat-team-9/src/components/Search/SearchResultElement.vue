<template>
  <div class="media">
    <div class="media-left tags has-addons">
      <span class="tag is-medium is-primary">Type:</span>
      <span class="tag is-medium is-white" >{{result.getType()}}</span>
    </div>
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
