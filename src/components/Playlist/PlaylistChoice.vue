<template>
  <div id="playlist-modal" v-bind:class="isActiveData">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="dropdown is-active">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Dropdown button</span>
            <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">
              Dropdown item
            </a>
            <a class="dropdown-item">
              Other dropdown item
            </a>
            <a href="#" class="dropdown-item is-active">
              Active dropdown item
            </a>
            <a href="#" class="dropdown-item">
              Other dropdown item
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item">
              With a divider
            </a>
          </div>
        </div>
      </div>

      <!--<label class="checkbox" v-for="playlist in playlists">-->
      <!--<input v-bind:value="playlist.id" type="checkbox">-->
      <!--{{playlist.name}}-->
      <!--</label>-->
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
  </div>
</template>

<style>
  .checkbox {
    margin-left: 1em;
  }
</style>

<script>
  export default {
    name: 'PlaylistChoice',
    props: {
      isActive: undefined
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

