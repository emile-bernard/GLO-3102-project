<template>
  <div class="tabs is-centered is-boxed is-large">
    <ul id="navigation-tabs">
      <li id="navigation-tab-home" @click="updateTabs('navigation-tab-home')">
        <router-link to="/">Home</router-link>
      </li>
      <li id="navigation-tab-artist" @click="updateTabs('navigation-tab-artist')">
        <router-link to="/artist">Artist</router-link>
      </li>
      <li id="navigation-tab-album" @click="updateTabs('navigation-tab-album')">
        <router-link to="/album">Album</router-link>
      </li>
      <li id="navigation-tab-playlist" @click="updateTabs('navigation-tab-playlist')">
        <router-link to="/playlist">Playlist</router-link>
      </li>
      <li id="navigation-tab-account" @click="updateTabs('navigation-tab-account')">
        <router-link to="/account">Account</router-link>
      </li>
      <!--TODO: add search page-->
      <li id="navigation-tab-search" @click="updateTabs('navigation-tab-search')">
        <router-link to="/search">Search</router-link>
      </li>
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
  export default {
    methods: {
      updateTabs(tabId) {
        this.resetAllTabs();
        document.getElementById(tabId).className = 'is-active';
      },
      resetAllTabs() {
        const tabs = document.getElementById('navigation-tabs')
          .getElementsByTagName('li');
        for (let i = 0; i < tabs.length; i += 1) {
          const tab = document.getElementById(tabs[i].id);
          if (tab.classList.contains('is-active')) {
            tab.classList.remove('is-active');
          }
        }
      }
    }
  };
</script>
