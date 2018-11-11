<template>
  <div class="artist-most-recent-album">
    <div>
      <h2 class="subtitle is-size-3">Most Recent Album</h2>
      <h3 class="subtitle is-size-4">{{title}}</h3>
      <p>{{genre}}</p>
      <br/>
      <router-link :to=refLink><img :src=imgSrc></router-link>
      <br/>
      <p>{{copyright}}</p>
    </div>
  </div>
</template>


<style>
  .artist-most-recent-album {
    background-color: rgba(0, 0, 0, 0.65);
    min-width: 180px;
    width: 400px;
    margin: 10px;
    padding: 10px;
    color: #dee5ed;
  }

  .artist-most-recent-album div img {
    width: 100%;
  }
</style>

<script>
  export default {
    props: ['title', 'genre', 'refLink', 'imgSrc', 'copyright'],
  };
</script>
