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
          <span>Playlist Name</span>
        </p>
      <playlist-song
        v-for="(song, index) in testTracks"
        v-bind:key="index"
        v-bind:id="index"
        v-bind:title="song[0].title"
        v-bind:time="song[1].time"
        v-bind:playRef="song[2].playRef"
        v-on:song-deleted="testTracks.splice(index,1)"
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
</style>

<script>
  import PlaylistSong from './PlaylistSong';

  export default {
    components: {
      'playlist-song': PlaylistSong,
    },
    data() {
      return {
        testTracks: [[{ title: 'Never Le Nkemise' }, { time: '2:52' }, { playRef: 'https://www.youtube.com/watch?v=GmwhBSh2rOs' }],
          [{ title: 'I Fink U Freeky' }, { time: '4:40' }, { playRef: 'https://www.youtube.com/watch?v=o8S2BrpUkRE' }],
          [{ title: 'Pielie (Skit)' }, { time: '0:09' }, { playRef: 'https://www.youtube.com/watch?v=GmwhBSh2rOs' }],
        ],
        albumTitle: 'Tension',
        albumGenre: 'Hip-Hop/Rap',
        trackCount: '13',
        releaseDate: '2012/01/29',
        id: undefined,
        tracks: [],
        displayNewPlaylistBlock: 'none',
      };
    },
    methods: {
      toggleCreateNewPlaylist() {
        this.displayNewPlaylistBlock = this.displayNewPlaylistBlock === 'block' ? 'none' : 'block';
      },
      createNewPlaylist() {
        // Call api
        this.toggleCreateNewPlaylist();
      },
    },
    created() {
      fetch(`https://ubeat.herokuapp.com/unsecure/playlists/${this.id}`, { method: 'get' })
        .then(response => response.json())
        .then((response) => {
          this.tracks = response.tracks;
        });
    }
  };
</script>
