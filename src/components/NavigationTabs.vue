<template>
  <div class="tabs is-centered is-large">
    <ul id="navigation-tabs">
      <li id="navigation-tab-home" class="is-active">
        <router-link to="/">Home</router-link>
      </li>
      <li id="navigation-tab-artist">
        <router-link to="/artist">Artist</router-link>
      </li>
      <li id="navigation-tab-album">
        <router-link to="/album">Album</router-link>
      </li>
      <li id="navigation-tab-playlist">
        <router-link to="/playlist">Playlist</router-link>
      </li>
      <li id="navigation-tab-account">
        <router-link to="/account">Account</router-link>
      </li>
      <!--TODO: add search page-->
      <li id="navigation-tab-search">
        <router-link to="/search">Search</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  @import "~bulma/bulma.sass";
  @import "~bulmaswatch/superhero/bulmaswatch.scss";

  .tabs {
    display: none;
  }

  @media only screen and (max-width: 1087px), (max-device-width: 1087px) {
    .tabs {
      display: block;
    }
  }

  @media only screen and (max-width: 750px), (max-device-width: 750px) {
    .tabs {
      display: none;
    }

  }
</style>

<script>
</script>
