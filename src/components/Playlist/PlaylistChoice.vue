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
        <button class="button is-success" @click="fetchTracks">
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
  import * as api from '@/Api';
  import PlaylistChoiceItem from '@/components/Playlist/PlayListChoiceItem';

  export default {
    name: 'PlaylistChoice',
    props: {
      isActive: undefined,
      trackIds: undefined,
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
      async populatePlaylists(playlist) {
        if (playlist.owner.name === 'unclebob') {
          const playList = await api.getPlayListCollection(playlist.id, true);
          this.playlists.push({
            id: playList.id,
            name: playList.name,
          });
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
      fetchTracks() {
        if (this.currentSelection === undefined) {
          this.closeModal();
        } else {
          for (let i = 0; i < this.trackIds.length; i += 1) {
            const currentTrackId = this.trackIds[i];
            const baseUri = 'https://ubeat.herokuapp.com/unsecure';
            const uri = `${baseUri}/tracks/${currentTrackId}`;
            const options = { method: 'get' };
            fetch(uri, options)
              .then(response => response.json())
              .then((response) => {
                this.addTrackToSelectedPlaylist(response.results[0]);
              });
          }
        }
      },
      addTrackToSelectedPlaylist(track) {
        const baseUri = 'https://ubeat.herokuapp.com/unsecure';
        const uri = `${baseUri}/playlists/${this.currentSelection}/tracks`;
        const headers = { 'Content-Type': 'application/json' };
        const body = JSON.stringify(track);
        const options = { method: 'post', headers, body };
        fetch(uri, options)
          .then();
        this.closeModal();
      },
      async getCommonPlayList() {
        const commonPlayList = await api.getCommonPlayList(true);
        this.filterPlaylists(commonPlayList);
        document.getElementById('playlist-modal')
              .classList
              .add('is-active');
      }
    },
    created() {
      this.getCommonPlayList();
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

