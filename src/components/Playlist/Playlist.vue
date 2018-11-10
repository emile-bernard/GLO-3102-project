<template>
  <section class="section">
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link to="/settings"><span>Uncle Bob</span></router-link>
      <span> > </span>
      <router-link to="/playlists"><span>Playlists</span></router-link>
      <span> > </span>
      <router-link to="/playlist"><span>Playlist Name</span></router-link>
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
        <playlist-song
          v-for="(track, index) in tracks"
          v-bind:key="index"
          v-bind:trackIndex="index"
          v-bind:playlistId="$route.params.id"
          v-bind:track_Id="track._id"
          v-bind:trackId="track.trackId"
          v-bind:trackNumber="track.trackNumber"
          v-bind:trackName="track.trackName"
          v-bind:previewUrl="track.previewUrl"
          v-bind:artistName="track.artistName"
          v-bind:trackTimeMillis="track.trackTimeMillis"
          v-on:track-deleted="tracks.splice(index,1)"
        ></playlist-song>
      </nav>
    </div>
  </section>
</template>

<style>
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
  import PlaylistSong from './PlaylistSong';

  export default {
    components: {
      'playlist-song': PlaylistSong,
    },
    data() {
      return {
        tracks: [],
        name: {
          type: String
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
    }
  };
</script>
