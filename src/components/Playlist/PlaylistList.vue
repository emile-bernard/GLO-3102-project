<template>
  <section class="section">
    <playlist-overview v-for="playlist in playlists"
                       v-bind:key=playlist.id
                       v-bind:id="playlist.id"
                       v-bind:name="playlist.name"
                       v-on:playlist-deleted="playlists.splice(index,1)">
    </playlist-overview>
  </section>
</template>

<style>

</style>

<script>
  import PlaylistOverview from './PlaylistOverview';

  export default {
    data() {
      return {
        playlists: [],
      };
    },
    components: {
      'playlist-overview': PlaylistOverview,
    },
    methods: {
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
