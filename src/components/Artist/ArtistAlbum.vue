<template>
  <div class="artist-album">
    <div>
      <h3 class="subtitle is-size-4">{{title}}</h3>
      <p>{{genre}}</p>
      <router-link :to=refLink><img :src=imgSrc></router-link>
      <p>{{copyright}}</p>
    </div>
  </div>
</template>

<style>
  .artist-album {
    background-color: rgba(0, 0, 0, 0.1);
    width: 200px;
    margin: 10px;
    padding: 10px;
    color: #dee5ed;
  }

  .artist-album div img {
    width: 100%;
  }
</style>

<script>
  export default {
    props: ['title', 'genre', 'refLink', 'imgSrc', 'copyright'],
  };
</script>
