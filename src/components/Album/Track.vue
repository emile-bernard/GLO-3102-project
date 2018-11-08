<template>
  <li class="track">
    <a id="album-song-link" :href=previewUrl rel="nofollow">
      <i id="album-song-play-icon" class="far fa-play-circle fa-1x"></i>
      &nbsp;
      {{trackNumber}}.
      &nbsp;
      {{trackName}}
      &nbsp;
      -
      &nbsp;
      {{TrackTimeInMinutes}}
      <i id="add-song-to-playlist-icon" v-on:click="addSongToPlaylist" class="far fa-plus-circle fa-1x"></i>
    </a>
  </li>
</template>

<style>
  .track {
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

  #add-song-to-playlist-icon {
    color: #dee5ed;
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
        const numberRoundedToTwoDecimal = Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);
        return numberRoundedToTwoDecimal;
      }
    },
    computed: {
      TrackTimeInMinutes() {
        let trackTime = this.trackTimeMillis;
        trackTime = Math.round(trackTime / 1000 / 60);
        return this.round(trackTime, 2);
      }
    }


  };
</script>
