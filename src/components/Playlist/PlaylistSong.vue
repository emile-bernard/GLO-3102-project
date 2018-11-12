<template>
  <div id="playlist-song-link" class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-music" aria-hidden="true"></i>
    </span>
    {{trackIndex + 1}}.
    {{trackName}}
    ({{Math.floor(trackTimeMillis/60000)}}:{{((trackTimeMillis%60000)/1000).toFixed(0)}})
    &nbsp;
    <audio controls>
      <source :src="previewUrl">
    </audio>
    <a class="button is-rounded is-danger" @click="removeTrack">
      <i class="fas fa-trash action" aria-hidden="true"></i>
    </a>
  </div>
</template>

<style>
  #playlist-song-link:hover {
    cursor: pointer;
    color: white;
    background-color: rgba(160, 160, 160, 0.8);
  }

  .panel-icon {
    color: white;
  }

  audio {
    min-height: 60px;
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
      trackId: undefined,
      trackNumber: undefined,
      trackName: String,
      previewUrl: String,
      playlistId: String,
      artistName: String,
      trackTimeMillis: undefined,
    },
    methods: {
      removeTrack() {
        const baseUri = 'https://ubeat.herokuapp.com/unsecure';
        const uri = `${baseUri}/playlists/${this.playlistId}/tracks/${this.trackId}`;
        const options = { method: 'delete' };
        fetch(uri, options)
          .then(response => response.json());
        this.$emit('track-deleted');
      },
    }
  };

</script>
