<template>
  <div>
    <div id='editModal' class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close" v-on:click="closeModal('editModal')"></button>
        </header>
        <section class="modal-card-body">
          Are you sure?
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" v-on:click="editPlaylist">Save changes</button>
          <button class="button" v-on:click="closeModal('editModal')">Cancel</button>
        </footer>
      </div>
    </div>
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
    <h1>Playlist</h1>
    <div>GLO-3102 Playlist page</div>
    <br>
    <nav class="panel">
      <p class="panel-heading">
      <p class="panel-tabs">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">
                <span class="icon is-small">
                  <i class="fas fa-user-astronaut" aria-hidden="true"></i>
                </span>
                <span>Uncle Bob</span>
              </a>
            </li>
            <li>
              <a href="#">
              <span class="icon is-small">
                  <i class="fas fa-headphones" aria-hidden="true"></i>
                </span>
                <span>Playlist</span>
              </a>
            </li>
            <li class="is-active">
              <a href="#">
                <span>Uncle Bob's Playlist</span>
              </a>
      <p class="control has-icons-left">
        <button class="button is-info" v-on:click="showModal('editModal')">
          Edit&nbsp;
          <i class="fas fa-pencil-alt action"></i>
        </button>
        <button class="button is-danger" v-on:click="showModal('deleteModal')">
          Delete&nbsp;
          <i class="fas fa-trash-alt action"></i>
        </button>
        <button class="button is-success" v-on:click="toggleCreateNewPlaylist">
          Create new playlist&nbsp;
          <i class="fas fa-plus action"></i>
        </button>
      </p>
      </li>
      </ul>
    </nav>
    </p>
        <div id="new-playlist-block" class="panel-block" v-bind:style="{ display: displayNewPlaylistBlock}">
        <p class="control has-icons-left">
          <div class="field">
            <div class="control">
              <input class="input is-primary" type="text" placeholder="Playlist name..." value="Uncle Bob's Playlist"/>
            </div>
          </div>
      <button class="button is-primary" v-on:click="createNewPlaylist">Create</button>
    </p>
        </div>
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
