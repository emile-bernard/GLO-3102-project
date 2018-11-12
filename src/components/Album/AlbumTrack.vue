<template>
  <div class="track">
    <span id="track-description">
      {{trackNumber}}. &nbsp;
      ({{TrackTimeInMinutes}}) &nbsp;-&nbsp;
      {{trackName}}
    </span>
    <div id="controls">
      <audio id="player" :src="previewUrl"></audio>
      <div>
        <button class="button" @click="playTrack">
          <i class="fas fa-play action" aria-hidden="true"></i>
        </button>
        <button class="button" @click="pauseTrack">
          <i class="fas fa-pause action" aria-hidden="true"></i>
        </button>
        <button class="button" @click="toggleMute">
          <i id="mute-unmute-btn" class="fas fa-volume-up action" aria-hidden="true"></i>
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
    width: 300px;
    display: inline-flex;
    align-content: flex-start;
    text-align: left;
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
      playTrack() {
        document.getElementById('player')
          .play();
      },
      pauseTrack() {
        document.getElementById('player')
          .pause();
      },
      toggleMute() {
        const player = document.getElementById('player');
        player.muted = !player.muted;
        const muteBtnIcon = document.getElementById('mute-unmute-btn');
        if (player.muted) {
          muteBtnIcon.classList.remove('fa-volume-up');
          muteBtnIcon.classList.add('fa-volume-off');
        } else {
          muteBtnIcon.classList.remove('fa-volume-off');
          muteBtnIcon.classList.add('fa-volume-up');
        }
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

        try {
          return `${minutes.toString()}:${(`00${decimalFinal.toString()}`).substr(-2, 2)}`;
        } catch (e) {
          return `${minutes.toString()}:${(`00${'0'.toString()}`).substr(-2, 2)}`;
        }
      }
    }
  };
</script>
