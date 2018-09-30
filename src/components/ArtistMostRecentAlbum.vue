<template>
  <div class="artist-most-recent-album">
    <div>
         <h2 class="subtitle is-size-3">Most Recent Album</h2>
     <p id="">{{genre}}</p>
       <br/>
      <a :href=refLink>
        <img :src=imgSrc></a>
       <br/>
      <p>{{copyright}}</p>
    </div>
  </div>
</template>






<style lang="scss">
  @import "~bulma/bulma.sass";
  @import "~bulmaswatch/superhero/bulmaswatch.scss";

  .artist-most-recent-album {
    background-color: rgba(0, 0, 0, 0.65);
    min-width: 180px;
    width: 400px;
    margin: 10px;
    padding: 10px;
    color: $grey-lighter;
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
