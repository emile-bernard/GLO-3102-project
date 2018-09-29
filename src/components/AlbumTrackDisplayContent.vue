<template>
  <li id="track-name">{{TrackName}} {{Time}}</li>
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






