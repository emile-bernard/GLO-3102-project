<template>
  <div class="track">
    <span id="track-description">
      {{trackNumber + 1}}. &nbsp;
      ({{TrackTimeInMinutes}}) &nbsp;-&nbsp;
      {{trackName}}</span>
    <audio controls :src="previewUrl"></audio>
    <div class="tooltip">
      <a class="button is-rounded is-danger" @click="removeTrack">
        <i class="fas fa-trash action" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>

<style>
  #track-description {
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
  }

  audio {
    min-height: 60px;
    display: inline-flex;
    margin-left: 20px;
  }

  #add-to-playlist {
    margin-left: 1em;
  }

  .fas.action {
    color: white;
  }

  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 100%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  @media only screen and (max-width: 1200px), (max-device-width: 1200px) {
    .fas {
      display: initial;
    }
  }
</style>

<script>

  import PlaylistChoice from '@/components/Playlist/PlaylistChoice';

  export default {
    props: {
      trackId: Number,
      trackName: String,
      previewUrl: String,
      trackNumber: Number,
      trackTimeMillis: Number,
    },
    data() {
      return {
        isPlaylistChoiceActive: false,
      };
    },
    components: {
      'playlist-choice': PlaylistChoice,
    },
    methods: {
      round(value, decimals) {
        return Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);
      },
      addSongToPlaylist() {
        this.$emit('add-to-playlist', this.trackId);
      },
      removeTrack() {
        const baseUri = 'https://ubeat.herokuapp.com/unsecure';
        const uri = `${baseUri}/playlists/${this.playlistId}/tracks/${this.trackId}`;
        const options = { method: 'delete' };
        fetch(uri, options)
          .then(response => response.json());
        this.$emit('track-deleted');
      },
    },
    computed: {
      /**
       * @return {string}
       */
      TrackTimeInMinutes() {
        let trackTime = this.trackTimeMillis;
        trackTime = this.round(((trackTime / 1000) / 60), 2);
        const trackTimeString = trackTime.toString();
        let decPart = (`${trackTimeString}`).split('.')[1];
        const minutes = (`${trackTimeString}`).split('.')[0];
        decPart = `0.${decPart}`;
        const decPartNumber = Number(decPart);
        let decimalFinal = (decPartNumber * 60) / 100;
        decimalFinal = this.round(decimalFinal, 2);
        decimalFinal = (`${decimalFinal}`).split('.')[1];

        try {
          return `${minutes.toString()}:${(`00${decimalFinal.toString()}`).substr(-2, 2)}`;
        } catch (e) {
          return `${minutes.toString()}:${(`00${'0'.toString()}`).substr(-2, 2)}`;
        }
      }
    }
  };
</script>
