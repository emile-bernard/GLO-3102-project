<template>
  <section class="section">
    <div id='deleteModal' class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close" v-on:click="closeModal('deleteModal')"></button>
        </header>
        <section class="modal-card-body">
          Are you sure?
        </section>
        <footer class="modal-card-foot">
          <button class="button is-danger" v-on:click="deletePlaylist">Delete</button>
          <button class="button" v-on:click="closeModal('deleteModal')">Cancel</button>
        </footer>
      </div>
    </div>
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
        v-for="(song, index) in Tension"
        v-bind:key="index"
        v-bind:id="index"
        v-bind:title="song[0].title"
        v-bind:time="song[1].time"
        v-bind:playRef="song[2].playRef"
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
  .fas.action {
    color: white;
  }
  .modal-card-body {
    color: black;
    background: white;
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
        Tension: [[{ title: 'Never Le Nkemise' }, { time: '2:52' }, { playRef: 'https://www.youtube.com/watch?v=GmwhBSh2rOs' }],
          [{ title: 'I Fink U Freeky' }, { time: '4:40' }, { playRef: 'https://www.youtube.com/watch?v=o8S2BrpUkRE' }],
          [{ title: 'Pielie (Skit)' }, { time: '0:09' }, { playRef: 'https://www.youtube.com/watch?v=GmwhBSh2rOs' }],
        ],
        albumTitle: 'Tension',
        albumGenre: 'Hip-Hop/Rap',
        trackCount: '13',
        releaseDate: '2012/01/29',
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
      showModal(modalName) {
        document.getElementById(modalName).classList.add('is-active');
      },
      closeModal(modalName) {
        document.getElementById(modalName).classList.remove('is-active');
      },
      editPlaylist() {
        // Call api
        this.closeModal('editModal');
      },
      deletePlaylist() {
        // Call api
        this.closeModal('deleteModal');
      },
    },
  };
</script>
