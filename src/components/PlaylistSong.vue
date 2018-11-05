<template>
  <!--<li class="playlist-song">-->
    <!--<a id="playlist-song-link" :href=playRef rel="nofollow">-->
      <!--<i id="playlist-song-play-icon" class="far fa-play-circle fa-1x"></i>-->
      <!--&nbsp;-->
      <!--{{id+1}}.-->
      <!--&nbsp;-->
      <!--{{title}}-->
      <!--&nbsp;-->
      <!-- - -->
      <!--&nbsp;-->
      <!--{{time}}-->
    <!--</a>-->
  <!--</li>-->

  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    {{id+1}}. {{title}} {{time}}
  </a>

</template>

<style>
  .playlist-song {
    color: #dee5ed;
  }

  #playlist-song-link {
    color: #dee5ed;
  }

  #playlist-song-link:hover {
    cursor: pointer;
    color: #94CFC9;
    background-color: rgba(0, 0, 0, 0.8);
  }

  #playlist-song-link:hover > #playlist-song-play-icon {
    cursor: pointer;
    color: #94CFC9;
    background-color: rgba(0, 0, 0, 0.8);
  }

  #playlist-song-play-icon {
    color: #dee5ed;
  }
</style>

<script>
  export default {
    props: ['id', 'title', 'time', 'playRef'],
  };
</script>
