<template>
  <li class="album-song">
    <a id="album-song-link" :href=playRef rel="nofollow">
      <i id="album-song-play-icon" class="far fa-play-circle fa-1x"></i>
      &nbsp;
      {{id+1}}.
      &nbsp;
      {{title}}
      &nbsp;
      -
      &nbsp;
      {{time}}
    </a>
  </li>
</template>

<style lang="scss">
  @import "~bulma/bulma.sass";
  @import "~bulmaswatch/superhero/bulmaswatch.scss";

  .album-song {
    font-size: 20px;
    color: $turquoise;
  }

  #album-song-link {
    color: $turquoise;
  }

  #album-song-link:hover {
    cursor: pointer;
    color: $white;
    background-color: rgba(0, 0, 0, 0.8);
  }

  #album-song-link:hover > #album-song-play-icon {
    cursor: pointer;
    color: $white;
    background-color: rgba(0, 0, 0, 0.8);
  }

  #album-song-play-icon {
    color: $turquoise;
  }
</style>

<script>
  export default {
    props: ['id', 'title', 'time', 'playRef'],
  };
</script>
