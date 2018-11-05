<template>
  <div>
    <div id='editModal' class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </div>
    <div id='deleteModal' class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </div>
    <h1>Playlist</h1>
    <div>GLO-3102 Playlist page</div>
    <br>
    <nav class="panel">
      <p class="panel-heading">
        <button class="button is-success is-fullwidth" v-on:click="createNewPlaylist">
          Create new playlist&nbsp;
          <i class="fas fa-plus action"></i>
        </button>
        <div id="new-playlist-block" class="panel-block" v-bind:style="{ display: displayNewPlaylistBlock}">
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Playlist name..."/>
            <button class="button is-link">Create</button>
          </p>
        </div>
      </p>
      <p class="panel-tabs">
        <a class="is-active">All</a>
        <a>Recent</a>
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          Uncle Bob's playlist
          <button class="button is-info" v-on:click="showEditModal">
            Edit&nbsp;
            <i class="fas fa-pencil-alt action"></i>
          </button>
          <button class="button is-danger" v-on:click="showDeleteModal">
            Delete&nbsp;
            <i class="fas fa-trash-alt action"></i>
          </button>
        </p>
      </div>
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
  .panel{
    background: white;
  }
  .fas.action{
    color: white;
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
          [{ title: 'Hey Sexy' }, { time: '5:08' }, { playRef: 'https://www.youtube.com/watch?v=Q1OzUTbtTWw' }],
          [{ title: 'Fatty Boom Boom' }, { time: '3:45' }, { playRef: 'https://www.youtube.com/watch?v=M0e_0P9OZuM' }],
          [{ title: 'Zefside Zol (Interlude)' }, { time: '0:56' }, { playRef: 'https://www.youtube.com/watch?v=pXPcY8oR74E' }],
          [{ title: 'So What? (Interlude)' }, { time: '3:51' }, { playRef: 'https://www.youtube.com/watch?v=O8Nfv9VSlIc' }],
          [{ title: 'Uncle Jimmy (Skit)' }, { time: '1:21' }, { playRef: 'https://www.youtube.com/watch?v=aBJTZuOLta4' }],
          [{ title: 'Baby\'s On Fire' }, { time: '3:56' }, { playRef: 'https://www.youtube.com/watch?v=zJquKj2Hiws' }],
          [{ title: 'U Make A Ninja Wanna Fuck' }, { time: '3:16' }, { playRef: 'https://www.youtube.com/watch?v=xFJ8VoaQkXc' }],
          [{ title: 'Fok Julie Naaiers' }, { time: '3:54' }, { playRef: 'https://www.youtube.com/watch?v=w2uNNphEYis' }],
          [{ title: 'DJ Hi-Tek Rulez' }, { time: '1:37' }, { playRef: 'https://www.youtube.com/watch?v=Mez_XxpX9MU' }],
          [{ title: 'Never Le Nkemise' }, { time: '3:21' }, { playRef: 'https://www.youtube.com/watch?v=GmwhBSh2rOs' }],
        ],
        albumTitle: 'Tension',
        albumGenre: 'Hip-Hop/Rap',
        trackCount: '13',
        releaseDate: '2012/01/29',
        displayNewPlaylistBlock: 'none',
      };
    },
    methods: {
      createNewPlaylist() {
        this.displayNewPlaylistBlock = 'block';
      },
      showEditModal() {
        document.getElementById('editModal').classList.add('is-active');
      },
      showDeleteModal() {
        document.getElementById('deleteModal').classList.add('is-active');
      },
    },
  };
</script>
