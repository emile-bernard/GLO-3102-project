<template>
  <div class="track">
    <span id="track-description">
      {{trackNumber}}. &nbsp;
      ({{TrackTimeInMinutes}}) &nbsp;-&nbsp;
      {{trackName}}
    </span>
    <div id="controls">
      <audio :id="trackId" :src="previewUrl"></audio>
      <div>
        <button class="button" @click="togglePlay">
          <i :id="playBtnId" class="fas fa-play action" aria-hidden="true"></i>
        </button>
        <button id="add-to-playlist" class="button is-success" @click="addSongToPlaylist">
          <i class="fas fa-plus action" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #track-description {
    display: table;
    text-align: left;
    min-width: 300px;
    max-width: 300px;
    text-wrap: normal;
  }

  .button {
    min-width: 50px;
  }

  .track {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: auto;
  }

  audio {
    /*min-height: 60px;*/
    display: inline-flex;
    margin-left: 20px;
  }

  #add-to-playlist {
    margin-left: 1em;
    display: inline-flex;
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

  import PlaylistChoice from '@/components/Playlist/PlaylistChoice';

  export default {
    props: {
      currentlyPlaying: String,
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
      togglePlay() {
        const player = document.getElementById(this.trackId);
        const playBtnIcon = document.getElementById(`${this.trackId}-play-btn`);
        if (player.paused) {
          this.$emit('playing-song', this.trackId);
          player.play();
          playBtnIcon.classList.remove('fa-play');
          playBtnIcon.classList.add('fa-pause');
        } else {
          player.pause();
          playBtnIcon.classList.remove('fa-pause');
          playBtnIcon.classList.add('fa-play');
        }
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
      },
      playBtnId() {
        return `${this.trackId}-play-btn`;
      },
      muteBtnId() {
        return `${this.trackId}-mute-btn`;
      }
    },
    watch: {
      currentlyPlaying(newValue) {
        if (this.trackId !== newValue) {
          const player = document.getElementById(this.trackId);
          if (!player.paused) {
            this.togglePlay();
          }
        }
      }
    }
  };
</script>
