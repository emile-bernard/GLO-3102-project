<head>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
</head>
<template>
  <li class="track">
    <a id="album-song-link" :href=previewUrl rel="nofollow">
      <p id="album-song-play-icon" class="far fa-play-circle fa-1x"></p>
      &nbsp;
      {{trackNumber}}.
      &nbsp;
      {{trackName}}
      &nbsp;
      -
      &nbsp;
      {{TrackTimeInMinutes}}
      <p id="add-song-to-playlist-icon"  onclick="addSongToPlaylist()" class="far f055 fa-plus fa-1x"></p>
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
        return `${minutes.toString()}:${decimalFinal.toString()}`;
      }
    }
  };
</script>
