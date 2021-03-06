<template>
  <section class="section">
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link to="/playlists"><span>Playlists</span></router-link>
      <span> > </span>
      <router-link :to="'/playlists'+$route.params.id"><span>{{ name }}</span></router-link>
    </p>
    <br/>
    <div class="container">
      <h1 class="title is-size-2">{{ name }}</h1>
      <section id="playlist-hero-parralax-bg" class="hero hero-parralax-bg">
        <div class="hero-body">
          <div id="playlist-page-hero-body-layout">
            <div id="playlist-info">
              <div id="playlist-info-songs">
                <playlist-song
                  v-for="(track, index) in tracks"
                  v-bind:key="index"
                  v-bind:trackIndex="index"
                  v-bind:playlistId="$route.params.id"
                  v-bind:trackId="track.trackId"
                  v-bind:trackNumber="track.trackNumber"
                  v-bind:trackName="track.trackName"
                  v-bind:previewUrl="track.previewUrl"
                  v-bind:artistName="track.artistName"
                  v-bind:trackTimeMillis="track.trackTimeMillis"
                  v-bind:currentlyPlaying="activeSong"
                  v-on:track-deleted="tracks.splice(index,1)"
                  v-on:playing-song="muteIfNotActiveSong"
                ></playlist-song>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
  .hero-parralax-bg {
    overflow: auto;
    position: relative;
  }

  #playlist-hero-parralax-bg:before {
    content: '';
    position: absolute;
    display: block;
    background-size: cover;
    -webkit-filter: blur(50px);
    -moz-filter: blur(50px);
    -o-filter: blur(50px);
    -ms-filter: blur(50px);
    filter: blur(50px);
    width: 100%;
    height: 100%;
  }

  .hero-parralax-bg * {
    z-index: 10;
  }

  .hero-body {
    background-color: rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
    align-items: center;
    flex-direction: row;
    column-gap: 0;
  }

  #playlist-info {
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: #dee5ed;
  }

  #playlist-info-songs {
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

</style>

<script>
  import { getPlaylistLocalStorageKey, getPlayListCollection } from '@/Api';
  import PlaylistSong from '@/components/Playlist/PlaylistTrack';
  import { redirectToLoginIfNotLoggedIn } from '@/LoginCookies';

  export default {
    components: {
      'playlist-song': PlaylistSong,
    },
    data() {
      return {
        activeSong: undefined,
        tracks: [],
        name: '',
      };
    },
    methods: {
      async getPlayList() {
        const playList = await getPlayListCollection(this.$route.params.id, false);
        this.tracks = playList.tracks;
        this.name = playList.name;
      },
      muteIfNotActiveSong(trackId) {
        this.activeSong = trackId;
      },
    },
    created() {
      redirectToLoginIfNotLoggedIn(this.$router, encodeURIComponent(this.$route.path));
      const playlists = JSON.parse(localStorage.getItem(getPlaylistLocalStorageKey()));
      let found = false;
      for (let i = 0; i < playlists.length; i += 1) {
        const playlist = playlists[i];
        if (playlist.id === this.$route.params.id) {
          this.tracks = playlist.tracks;
          this.name = playlist.name;
          found = true;
        }
      }
      if (!found) {
        this.getPlayList();
      }
    },
  };
</script>
