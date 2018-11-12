<template>
  <div id="playlist-modal" v-bind:class="isActiveData">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div id="controls">
        <button class="button is-danger" @click="closeModal">
          <span>Cancel</span>
          <span class="icon is-small">
              <i class="fas fa-times" aria-hidden="false"></i>
            </span>
        </button>
        <button class="button is-success" @click="fetchTrack">
          <span>Add</span>
          <span class="icon is-small">
              <i class="fas fa-plus" aria-hidden="false"></i>
            </span>
        </button>
      </div>
      <div id="playlistSelectionDropDown" class="dropdown">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="toggleDropDown">
            <span>{{dropDownText}}</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="false"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <playlist-choice-item v-for="playlist in playlists"
                                  v-bind:key="playlist.id"
                                  v-bind:playlistId="playlist.id"
                                  v-bind:playlistName="playlist.name"
                                  v-on:playlist-selected="selectPlaylist">
            </playlist-choice-item>
          </div>
      </div>
    </div>
  </div>
</template>

<style>
  .modal-content {
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .fas {
    color: white;
  }

</style>

<script>
  import PlaylistChoiceItem from '@/components/Playlist/PlayListChoiceItem';

  export default {
    name: 'PlaylistChoice',
    props: {
      isActive: undefined,
      currentTrackId: undefined,
    },
    components: {
      'playlist-choice-item': PlaylistChoiceItem,
    },
    data() {
      return {
        playlists: [],
        isActiveData: 'modal',
        isDropDownOpen: false,
        dropDownText: 'Select your playlist',
        currentSelection: undefined,
      };
    },
    methods: {
      filterPlaylists(allPlaylists) {
        for (let i = 0; i < allPlaylists.length; i += 1) {
          this.populatePlaylists(allPlaylists[i]);
        }
      },
      populatePlaylists(playlist) {
        try {
          if (playlist.owner.name === 'unclebob') {
            fetch(`https://ubeat.herokuapp.com/unsecure/playlists/${playlist.id}`,
              {
                method: 'get'
              })
              .then(response => response.json())
              .then(response => this.playlists.push({
                id: response.id,
                name: response.name,
              }));
          }
        } catch (error) {
          // IGNORED
        }
      },
      closeModal() {
        this.$emit('close-playlist-modal');
      },
      toggleDropDown() {
        const dropDown = document.getElementById('playlistSelectionDropDown');
        if (this.isDropDownOpen) {
          dropDown.classList.remove('is-active');
        } else {
          dropDown.classList.add('is-active');
        }
        this.isDropDownOpen = !this.isDropDownOpen;
      },
      selectPlaylist(payload) {
        this.dropDownText = payload[0];
        this.currentSelection = payload[1];
        this.toggleDropDown();
      },
      fetchTrack() {
        const baseUri = 'https://ubeat.herokuapp.com/unsecure';
        const uri = `${baseUri}/tracks/${this.currentTrackId}`;
        const options = { method: 'get' };
        fetch(uri, options)
          .then(response => response.json())
          .then((response) => {
            this.addTrackToSelectedPlaylist(response.results[0]);
          });
      },
      addTrackToSelectedPlaylist(track) {
        console.log(track);
        const baseUri = 'https://ubeat.herokuapp.com/unsecure';
        const uri = `${baseUri}/playlists/${this.currentSelection}/tracks`;
        const headers = { 'Content-Type': 'application/json' };
        const body = JSON.stringify(track);
        const options = { method: 'post', headers, body };
        fetch(uri, options).then();
        this.closeModal();
      },
    },
    created() {
      const baseUri = 'https://ubeat.herokuapp.com/unsecure';
      const uri = `${baseUri}/playlists/`;
      const options = { method: 'get' };
      fetch(uri, options)
        .then(response => response.json())
        .then((response) => {
          this.filterPlaylists(response);
        })
        .then(() => {
          document.getElementById('playlist-modal')
            .classList
            .add('is-active');
        });
    },
    watch: {
      isActive(newValue) {
        if (newValue) {
          this.isActiveData = 'modal is-active';
        } else {
          this.isActiveData = 'modal';
        }
      }
    }
  };

</script>

