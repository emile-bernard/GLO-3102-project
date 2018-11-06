<template xmlns:vbind="http://www.w3.org/1999/xhtml">
  <div class="tile is-inline-block is-parent is-4">
    <article class="tile is-child notification is-primary">
      <div id="playlistInput" class="field has-addons">
        <div class="control">
          <input id="name-input" class="input" type="text" v-bind:value="name" @focus="toggleSaveButton"
                 @blur="toggleSaveButton">
        </div>
        <div class="control">
          <a class="button is-info" @click="saveName" v-bind:style="{ display: displaySaveButton}">
            Save
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
      name: undefined,
      tracks: [],
    },
    data() {
      return {
        displaySaveButton: 'none',
      };
    },
    methods: {
      toggleSaveButton() {
        this.displaySaveButton = this.displaySaveButton === 'block' ? 'none' : 'block';
      },
      saveName() {
        const nameInput = document.getElementById('name-input');
        this.name = nameInput.value;
        fetch(`https://ubeat.herokuapp.com/unsecure/playlists/${this.id}`,
          {
            method: 'put',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              {
                name: this.name,
              })
          })
          .then(response => response.json());
      }
    }
  };
</script>
