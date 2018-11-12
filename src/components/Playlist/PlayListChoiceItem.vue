<template>
  <a class="dropdown-item" @click="selectPlaylist">
    {{playlistName}}
  </a>
</template>

<style>

</style>

<script>
  export default {
    name: 'PlayListChoiceItem',
    props: {
      playlistName: String,
      playlistId: String,
    },
    methods: {
      selectPlaylist() {
        this.$emit('playlist-selected', [this.playlistName, this.playlistId]);
      }
    }
  };
</script>
