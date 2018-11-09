<template>
  <div class="tile is-inline-block is-parent is-4">
    <article class="tile is-child notification is-primary">
      <div id="playlistInput" class="field has-addons">
        <div class="control">
          <input id="name-input" class="input is-fullwidth" type="text" v-model="nameData" @focus="toggleSaveButton"
                 @blur="toggleSaveButton">
        </div>
        <div class="control">
          <a class="button is-info" @click="saveName" v-bind:style="{ display: displaySaveButton}">
            Save
          </a>
        </div>
        <!--<div class="control">-->
          <!--<a class="button is-delete" @click="deletePlaylist" v-bind:style="{ display: displayDeleteButton}">-->
            <!--Delete-->
          <!--</a>-->
        <!--</div>-->
        <div class="control goToPlaylistControl">
          <router-link id="go-to-playlist-button" class="button is-warning is-rounded is-outlined" @click="goToPlaylist" :to="{ name: 'Playlist', params: { id } }">
          <span class="icon is-small">
            <i class="fa fa-4x fa-play-circle"></i>
          </span>
          </router-link>
        </div>
        <div class="control">
          <div class="field" v-bind:style="{ display: displayDeleteCheckbox}">
            <input class="is-checkradio is-large" type="checkbox">
          </div>
          <!--<a class="button is-delete" @click="deletePlaylist" v-bind:style="{ display: displayDeleteButton}">-->
          <!--Delete-->
          <!--</a>-->
        </div>
      </div>
    </article>
  </div>
</template>

<style>
  .goToPlaylistControl {
    margin-left: 2rem;
  }
  .is-checkradio{
    margin-left: 2rem;
    min-width: 30px;
    min-height: 30px;
  }
</style>

<script>
  export default {
    props: {
      id: undefined,
      name: {
        type: String
      },
      tracks: [],
      // displayDeleteCheckbox: 'none',
    },
    data() {
      return {
        nameData: this.name,
        displaySaveButton: 'none',
        displayDeleteButton: 'block',
        displayDeleteCheckbox: 'none',
      };
    },
    methods: {
      toggleSaveButton() {
        this.displaySaveButton = this.displaySaveButton === 'block' ? 'none' : 'block';
        this.displayDeleteButton = this.displayDeleteButton === 'block' ? 'none' : 'block';
      },
      saveName() {
        const nameInput = document.getElementById('name-input');
        this.nameData = nameInput.value;
        fetch(`https://ubeat.herokuapp.com/unsecure/playlists/${this.id}`,
          {
            method: 'put',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              {
                name: this.nameData
              })
          })
          .then(response => response.json());
      },
      deletePlaylist() {
        // fetch(`https://ubeat.herokuapp.com/unsecure/playlists/${this.id}`,
        //   {
        //     method: 'delete',
        //   })
        //   .then(response => response.json());
        // this.$emit('playlist-deleted');
      },
      goToPlaylist() {
        // Todo
      },
    },
  };
</script>
