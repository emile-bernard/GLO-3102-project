<template>
  <div id="playlist-modal" v-bind:class="isActiveData">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="dropdown is-hoverable">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="populatePlaylists">
            <span>Select your playlist</span>
            <span class="icon is-small">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </button>
          <div class="dropdown-content">
            <playlistChoiceItem v-for="playlist in playlists"
                                v-bind:key="playlist.id"
                                v-bind:playListId.sync="playlist.id"
                                v-bind:playListName.sync="playlist.name"
            ></playlistChoiceItem>
          </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
  </div>
</template>

<style>

</style>

<script>
  /* eslint-disable quote-props */
  import PlaylistChoiceItem from '@/components/Playlist/PlayListChoiceItem';

  export default {
    name: 'PlaylistChoice',
    props: {
      isActive: undefined
    },
    components: {
      'playlistChoiceItem': PlaylistChoiceItem,
    },
    data() {
      return {
        playlists: [],
        isActiveData: 'modal',
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
          // Todo
        }
      },
      closeModal() {
        this.$emit('close-playlist-modal');
      },
    },
    created() {
      fetch('https://ubeat.herokuapp.com/unsecure/playlists/',
        {
          method: 'get'
        })
        .then(response => response.json())
        .then((response) => {
          this.filterPlaylists(response);
        }).then(() => {
          document.getElementById('playlist-modal').classList.add('is-active');
        }
      );
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

