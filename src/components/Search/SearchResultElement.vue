<template>
  <div class="media">
    <div class="media-left tags has-addons">
      <span class="tag is-medium is-primary">Type:</span>
      <span class="tag is-medium is-white" >{{result.getType()}}</span>
    </div>
    <div class="media-content">
      <router-link v-if="result.getType()==='collection'" :to="result.getURL()">&nbsp;<span>{{result.getName()}}</span>&nbsp;<img class="album-artwork" id="album-cover-image" :src="result.getArtworkUrl()" alt="artist-img"/>&nbsp;</router-link>
      <router-link v-else :to="result.getURL()">&nbsp;<span>{{result.getName()}}</span>&nbsp;</router-link>
    </div>
  </div>
</template>

<style>
  .album-artwork {
    float: left;
  }
</style>

<script>
  export default {
    name: 'SearchResultElement',
    props: ['result']
  };
</script>
