<template>
  <div class="artist-album">
    <div><h3><b>{{title}}</b></h3>
      <p>{{genre}}</p><a :href=refLink><img
        :src=imgSrc></a>
      <p>{{copyright}}</p></div>
  </div>
</template>

<style lang="scss">
  @import "~bulma/bulma.sass";
  @import "~bulmaswatch/superhero/bulmaswatch.scss";

  .artist-album {
    background-color: rgba(0, 0, 0, 0.1);
    width: 200px;
    margin: 10px;
    padding: 10px;
    color: $grey-lighter;
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
