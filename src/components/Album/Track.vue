<template>
  <div class="track">
    <span id="track-description">{{trackNumber}}. &nbsp; ({{TrackTimeInMinutes}}) &nbsp;-&nbsp; {{trackName}}</span>
    <audio controls :src="previewUrl"></audio>
    <!--<p id="add-song-to-playlist-icon"-->
    <!--@click="addSongToPlaylist"-->
    <!--class="far f055 fa-plus fa-1x"></p>-->

    <a id="add-to-playlist" class="button is-rounded is-success" @click="addSongToPlaylist">
      <i class="fas fa-plus action" aria-hidden="true"></i>
    </a>

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

  #album-song-link:hover > #album-song-play-icon {
    cursor: pointer;
    color: #94CFC9;
    background-color: rgba(0, 0, 0, 0.8);
  }

  #add-to-playlist {
    margin-left: 1em;
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
  // collectionViewUrl == trackViewUrl (la page de l'album)
  // trackViewUrl == previewUrl (mp4) (extrait de la toun)
  // artworkUrl130 == artworkUrl160 == artworkUrl1100 (image du cover de l'album)

  import PlaylistChoice from '@/components/Playlist/PlaylistChoice';

  export default {
    props: {
      wrapperType: String,
      kind: String,
      trackId: Number,
      trackName: String,
      previewUrl: String,
      trackPrice: Number,
      trackExplicitness: String,
      diskCount: Number,
      diskNumber: Number,
      trackNumber: Number,
      trackTimeMillis: Number,
      isStreamable: Boolean,
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
      }
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
        return `${minutes.toString()}:${(`00${decimalFinal.toString()}`).substr(-2, 2)}`;
      }
    }
  };
</script>
