<template>
  <div class="track">
    <span id="track-description">
      {{trackIndex + 1}}. &nbsp;
      {{trackName}} &nbsp;-&nbsp;
      ({{Math.floor(trackTimeMillis/60000)}}:{{((trackTimeMillis%60000)/1000).toFixed(0)}})&nbsp;
    </span>
    <audio controls :src="previewUrl"></audio>
    <div id="remove-from-playlist-div" class="tooltip is-fullwidth">
      <button id="remove-from-playlist" class="button is-rounded is-danger" @click="removeTrack">
        <i class="fas fa-trash action" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<style>
  #track-description {
    color: black;
    width: 300px;
    display: inline-flex;
    align-content: flex-start;
  }

  .track {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: auto;
    text-align: center;
    margin-left: 1em;
  }

  audio {
    min-height: 60px;
    display: inline-flex;
    margin-left: 20px;
  }

  .fas.action {
    color: white;
  }

  #remove-from-playlist {
    margin-left: 1em;
    display: flex;
  }

  #remove-from-playlist-div {
    margin-left: 1em;
  }

  @media only screen and (max-device-width: 750px), (max-width: 750px) {
    #remove-from-playlist-div {
      width: 100%;
    }

    #remove-from-playlist {
      width: 90%;
    }
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
