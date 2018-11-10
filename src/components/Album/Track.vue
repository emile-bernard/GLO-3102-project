<template>
  <div class="track">
    <span id="track-description">{{trackNumber}}. &nbsp; ({{TrackTimeInMinutes}}) &nbsp;-&nbsp; {{trackName}}</span>
    <audio controls :src="previewUrl"></audio>
    <!--<p id="add-song-to-playlist-icon"-->
    <!--@click="addSongToPlaylist"-->
    <!--class="far f055 fa-plus fa-1x"></p>-->
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
</style>

<script>
  // collectionViewUrl == trackViewUrl (la page de l'album)
  // trackViewUrl == previewUrl (mp4) (extrait de la toun)
  // artworkUrl130 == artworkUrl160 == artworkUrl1100 (image du cover de l'album)
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
      addSongToPlaylist: Function
    },
    methods: {
      round(value, decimals) {
        return Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);
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
        return `${minutes.toString()}:${(`00${decimalFinal.toString()}`).substr(-2, 2)}`;
      }
    }
  };
</script>
