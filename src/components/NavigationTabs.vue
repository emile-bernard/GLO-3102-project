<template>
  <div class="tabs is-centered is-boxed is-medium">
    <ul>
      <li class="is-active"><a>Home</a></li>
      <li><a>Album</a></li>
      <li><a>Artist</a></li>
      <li><a>Playlist</a></li>
      <li><a>Account</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
</template>

<style>
  .tabs {
    display: none;
  }

  @media only screen and (max-width: 1087px) {
    .tabs {
      display: block;
    }
  }

  @media only screen and (max-device-width: 750px) {
    .tabs {
      display: none;
    }
  }
</style>

<script>

</script>
