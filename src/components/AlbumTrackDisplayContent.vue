<template>
  <li id="track-name">
    {{TrackName}}
    {{Time}}
     <i id="second-play-icon" class="far fa-play-circle fa-1x"></i>
  </li>
</template>


<style scoped>

</style>


<script>
    export default {
      name: 'AlbumTrackDisplayContent',

      data() {
        return {
          TrackName: 'defaultTrackName',
          Time: '0:00',
        };
      },
    };
</script>






