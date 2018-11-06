<template xmlns:vbind="http://www.w3.org/1999/xhtml">
  <div class="tile is-inline-block is-parent is-4">
    <article class="tile is-child notification is-primary">
      <div id="playlistInput" class="field has-addons">
        <div class="control">
          <input id="name-input" class="input" type="text" v-model="nameData" @focus="toggleSaveButton"
                 @blur="toggleSaveButton">
        </div>
        <div class="control">
          <a class="button is-info" @click="saveName" v-bind:style="{ display: displaySaveButton}">
            Save
          </a>
        </div>
        <div class="control">
          <a class="button is-delete" @click="deletePlaylist" v-bind:style="{ display: displayDeleteButton}">
            Delete
          </a>
        </div>
      </div>
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/640x480.png">
      </figure>
    </article>
  </div>
</template>

<style>
</style>

<script>
  export default {
    props: {
      id: undefined,
      name: {
        type: String
      },
      tracks: [],
    },
    data() {
      return {
        nameData: this.name,
        displaySaveButton: 'none',
        displayDeleteButton: 'block'
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
        fetch(`https://ubeat.herokuapp.com/unsecure/playlists/${this.id}`,
          {
            method: 'delete',
          })
          .then(response => response.json());
        this.$emit('playlist-deleted');
      }
    }
  };
</script>
