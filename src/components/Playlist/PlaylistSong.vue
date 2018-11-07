<template>
  <a id="playlist-song-link" class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-music" aria-hidden="true"></i>
    </span>
    {{id+1}}. {{title}} {{time}} &nbsp;
    <a class="button is-rounded is-primary" :href=playRef rel="nofollow" v-on:click="playSong">
      <i class="fas fa-play-circle action" aria-hidden="true"></i>
    </a>
    <a class="button is-rounded is-danger" v-on:click="removeSong">
      <i class="fas fa-trash action" aria-hidden="true" ></i>
    </a>
  </a>
</template>

<style>
  .panel-icon{
    color: white;
  }

  #playlist-song-link:hover {
    cursor: pointer;
    color: white;
    background-color: rgba(160, 160, 160, 0.8);
  }

  .fas.action {
    color: white;
  }
</style>

<script>
  export default {
    props: ['songId', 'playlistId', 'title', 'time', 'playRef'],
    methods: {
      playSong() {
        // Todo
      },
      removeSong() {
        fetch(`https://ubeat.herokuapp.com/unsecure/playlists/${this.playlistId}/tracks/${this.songId}`,
          {
            method: 'delete',
          })
          .then(response => response.json());
        this.$emit('song-deleted');
      },
    }
  };

</script>
