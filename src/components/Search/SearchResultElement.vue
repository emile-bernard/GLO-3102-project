<template>
  <div class="media">
    <div class="media-left tags has-addons">
      <span class="tag is-medium is-primary">Type:</span>
      <span class="tag is-medium is-white" >{{result.getType()}}</span>
    </div>
    <div class="media-content">
      <router-link :to="result.getURL()">&nbsp;<span>{{result.getName()}}</span>&nbsp;<img id="album-cover-image" :src="result.getArtworkUrl()" alt="artist-img"/>&nbsp;</router-link>
    </div>
  </div>
</template>

<style>
  img {
    float: left;
  }
</style>

<script>
  export default {
    name: 'SearchResultElement',
    props: ['result']
  };
</script>
