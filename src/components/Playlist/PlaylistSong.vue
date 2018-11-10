<template>
  <a id="playlist-song-link" class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-music" aria-hidden="true"></i>
    </span>
    {{trackNumber}}. {{trackName}} ({{Math.floor(trackTimeMillis/60000)}}:{{((trackTimeMillis%60000)/1000).toFixed(0)}})
    &nbsp;
    <a class="button is-rounded is-primary" @click="playSong">
      <i class="fas fa-play-circle action" aria-hidden="true"></i>
    </a>
    <a class="button is-rounded is-danger" @click="removeSong">
      <i class="fas fa-trash action" aria-hidden="true"></i>
    </a>
  </a>
</template>

<style>
  .panel-icon {
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

  @media only screen and (max-width: 1200px), (max-device-width: 1200px) {
    .fas {
      display: initial;
    }
  }
</style>

<script>
  export default {
    props: {
      trackIndex: undefined,
      track_Id: undefined,
      trackId: undefined,
      trackNumber: undefined,
      trackName: {
        type: String
      },
      playlistId: {
        type: String
      },
      artistName: {
        type: String
      },
      trackTimeMillis: undefined,
    },
    methods: {
      playSong() {
        // Todo
      },
      removeSong() {
        fetch(`https://ubeat.herokuapp.com/unsecure/playlists/${this.playlistId}/tracks/${this.trackId}`,
          {
            method: 'delete',
          })
          .then(response => response.json())
          .then(this.$emit('track-deleted'));
      },
    }
  };

</script>
