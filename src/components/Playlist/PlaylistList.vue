<template>
  <section class="section">
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link to="/settings"><span>Uncle Bob</span></router-link>
      <span> > </span>
      <router-link to="/playlists"><span>Playlists</span></router-link>
    </p>
    <br/>
    <button class="button is-success" v-on:click="toggleCreateNewPlaylist">
      Create new playlist&nbsp;
      <i class="fas fa-plus action"></i>
    </button>
    <div id="new-playlist-block" class="panel-block" v-bind:style="{ display: displayNewPlaylistBlock}">
      <div class="field has-addons">
        <div class="control">
          <input id="new-playlist-input" class="input is-primary" type="text" placeholder="Playlist name..." value="Uncle Bob's Playlist"/>
        </div>
        <div class="control">
          <button class="button is-primary" v-on:click="createNewPlaylist">Create</button>
        </div>
      </div>
    </div>
    <br/>
    <playlist-overview v-for="playlist in playlists"
                       v-bind:key=playlist.id
                       v-bind:id="playlist.id"
                       v-bind:name="playlist.name"
                       v-on:playlist-deleted="playlists.splice(index,1)">
    </playlist-overview>
  </section>
</template>

<style>
  #new-playlist-block {
    background-color: white;
  }
</style>

<script>
  import PlaylistOverview from './PlaylistOverview';

  export default {
    data() {
      return {
        playlists: [],
        displayNewPlaylistBlock: 'none',
      };
    },
    components: {
      'playlist-overview': PlaylistOverview,
    },
    methods: {
      toggleCreateNewPlaylist() {
        this.displayNewPlaylistBlock = this.displayNewPlaylistBlock === 'block' ? 'none' : 'block';
      },
      createNewPlaylist() {
        fetch('https://ubeat.herokuapp.com/unsecure/playlists',
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              {
                name: document.getElementById('new-playlist-input').value
              })
          })
          .then(response => response.json());
        this.toggleCreateNewPlaylist();
      },
      filterPlaylists(allPlaylists) {
        for (let i = 0; i < 10; i += 1) {
          this.populatePlaylists(allPlaylists[i]);
        }
      },
      populatePlaylists(playlist) {
        fetch(`https://ubeat.herokuapp.com/unsecure/playlists/${playlist.id}`, { method: 'get' })
          .then(response => response.json())
          .then(response => this.playlists.push({
            id: response.id,
            name: response.id,
            tracks: playlist.tracks
          }));
      },
    },
    created() {
      fetch('https://ubeat.herokuapp.com/unsecure/playlists', { method: 'get' })
        .then(response => response.json())
        .then((response) => {
          this.filterPlaylists(response);
        });
    }
  };
</script>
