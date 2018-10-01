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

<style>
  .album-song {
    color: #dee5ed;
  }

  #album-song-link {
    color: #dee5ed;
  }

  #album-song-link:hover {
    cursor: pointer;
    color: #94CFC9;
    background-color: rgba(0, 0, 0, 0.8);
  }

  #album-song-link:hover > #album-song-play-icon {
    cursor: pointer;
    color: #94CFC9;
    background-color: rgba(0, 0, 0, 0.8);
  }

  #album-song-play-icon {
    color: #dee5ed;
  }
</style>

<script>
  export default {
    props: ['id', 'title', 'time', 'playRef'],
  };
</script>
