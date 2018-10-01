<template>
  <div id="navigation-tabs-container" class="tabs is-centered is-medium">
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

<style>
  .tabs li a {
    color: darkgray;
  }

  .tabs li:hover a {
    background: rgba(34, 85, 110, 1);
    color: white;
    font-weight: bold;
    border-bottom-color: white;
  }

  .tabs li.is-active a {
    background: rgba(34, 85, 110, 1);
    color: white;
    font-weight: bold;
    border-bottom-color: white;
  }

  #navigation-tabs {
    background-color: #2B3E50;
  }

  #navigation-tabs-container {
    display: none;
  }

  @media only screen and (max-width: 1087px), (max-device-width: 1087px) {
    #navigation-tabs-container {
      display: block;
    }
  }

  @media only screen and (max-width: 750px), (max-device-width: 750px) {
    #navigation-tabs-container {
      display: none;
    }
  }
</style>

<script>
</script>
