<template>
  <div class="tile is-inline-block is-parent is-4">
    <article class="tile is-child notification is-primary">
      <div id="playlistInput" class="field has-addons">
        <div class="control">
          <input id="name-input" class="input is-fullwidth" type="text" v-model="nameData" @focus="toggleSaveButton">
        </div>
        <div class="control">
          <a class="button is-info" @click="saveName" v-bind:style="{ display: displaySaveButton}">
            Save
          </a>
        </div>
        <div class="control go-to-playlist-control">
          <router-link id="go-to-playlist-button" class="button is-warning is-rounded is-outlined"
                       :to="{ name: 'Playlist', params: { id } }">
          <span class="icon is-small">
            <i class="fa fa-2x fa-play-circle"></i>
          </span>
          </router-link>
        </div>
        <div class="control">
          <div class="field" v-bind:style="{ display: displayPlaylistSelection }">
            <input class="is-checkradio is-medium" type="checkbox" v-model="isSelected">
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<style>
  .go-to-playlist-control {
    margin-left: 1rem;
  }

  #go-to-playlist-button {
    border: none;
  }

  .is-checkradio {
    margin-left: 1rem;
    min-width: 30px;
    min-height: 30px;
  }
</style>

<script>
  import { getLoginToken } from '../../LoginCookies';

  export default {
    props: {
      id: {
        typeTitleCase: String
      },
      name: {
        typeTitleCase: String
      },
      tracks: {
        typeTitleCase: Array
      },
      displayPlaylistSelection: {
        typeTitleCase: String
      },
      cancelSelection: {
        typeTitleCase: Boolean
      }
    },
    data() {
      return {
        nameData: this.name,
        isSelected: false,
        displaySaveButton: 'none',
      };
    },
    methods: {
      toggleSaveButton() {
        this.displaySaveButton = this.displaySaveButton === 'block' ? 'none' : 'block';
      },
      saveName() {
        const token = getLoginToken();
        if (typeof (token) !== 'undefined') {
          fetch(`https://ubeat.herokuapp.com/unsecure/playlists/${this.id}`,
            {
              method: 'put',
              headers: {
                'Content-Type': 'application/json',
                Authorization: token
              },
              body: JSON.stringify(
                {
                  name: this.nameData,
                  owner: 'unclebob@ubeat.com'
                })
            })
            .then(response => response.json())
            .then(this.toggleSaveButton());
        }
      },
    },
    watch: {
      isSelected(newValue) {
        if (newValue) {
          this.$emit('playlist-selected', this.id);
        } else {
          this.$emit('playlist-unselected', this.id);
        }
      },
      cancelSelection() {
        this.isSelected = false;
      }
    }
  }
  ;
</script>
