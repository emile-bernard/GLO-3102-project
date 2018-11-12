<template>
  <section class="section">
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link to="/settings"><span>Uncle Bob</span></router-link>
      <span> > </span>
      <router-link to="/playlists"><span>Playlists</span></router-link>
      <span> > </span>
      <router-link :to="'/playlists'+$route.params.id"><span>{{ name }}</span></router-link>
    </p>
    <br/>
    <div>
      <br>
      <nav class="panel">
        <p class="panel-heading">
          <i class="fas fa-headphones fa-2x"></i>
          <span>{{ name }}</span>
        </p>
        <div v-if="tracks.length===0">
          <h2 class="subtitle">This playlist is empty</h2>
        </div>
      </nav>
      <div id="playlist-tracks-container">
        <playlist-song
          v-for="(track, index) in tracks"
          v-bind:key="index"
          v-bind:trackNumber="index"
          v-bind:trackId="track.trackId"
          v-bind:trackName="track.trackName"
          v-bind:previewUrl="track.previewUrl"
          v-bind:trackTimeMillis="track.trackTimeMillis"
          v-on:track-deleted="tracks.splice(index,1)"
        ></playlist-song>
      </div>
    </div>
  </section>
</template>

<style>

  #playlist-tracks-container {
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 20px;
    color: #dee5ed;
    padding: 40px;
  }

  .panel {
    background: white;
    line-height: 3.5;
    font-size: 1.1em;
  }

  .panel {
    background: white;
    line-height: 3.5;
    font-size: 1.1em;
  }

  .subtitle {
    color: black;
    margin: 1em;
  }
</style>

<script>
  import PlaylistSong from '@/components/Playlist/PlaylistTrack';

  export default {
    components: {
      'playlist-song': PlaylistSong,
    },
    data() {
      return {
        tracks: [],
        name: {
          typeTitleCase: String
        },
      };
    },
    methods: {},
    created() {
      fetch(`https://ubeat.herokuapp.com/unsecure/playlists/${this.$route.params.id}`,
        {
          method: 'get'
        })
        .then(response => response.json())
        .then((response) => {
          this.tracks = response.tracks;
          this.name = response.name;
        });
    },
  };
</script>
