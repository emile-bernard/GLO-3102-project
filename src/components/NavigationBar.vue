<template>
  <nav id="navigation-bar" class="navbar" role="navigation">
    <div class="navbar-menu">
      <div class="navbar-start">
        <div id="navigation-bar-search" class="navbar-item">
          <navigation-bar-search></navigation-bar-search>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-item">
          <router-link to="/">
            <i class="fas fa-home fa-2x"></i>
            <p>Home</p>
          </router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/album">
            <i class="fas fa-compact-disc fa-2x"></i>
            <p>Album</p>
          </router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/artist">
            <i class="fas fa-user-astronaut fa-2x"></i>
            <p>Artist</p>
          </router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/playlist">
            <i class="fas fa-headphones fa-2x"></i>
            <p>Playlist</p>
          </router-link>
        </div>
      </div>
      <div class="navbar-item">
        <navigation-bar-account-menu></navigation-bar-account-menu>
      </div>
    </div>
  </nav>
</template>

<style>
  .navbar-menu {
    /*align-items: stretch;*/
    /*display: flex;*/
    /*padding: 0;*/
    /*flex-grow: 1;*/
    /*flex-shrink: 0;*/
  }
  .navbar-start {
    justify-content: flex-start;
    margin-right: auto;
  }
  #navigation-bar {
    height: 100%;
    width: 100%;
    font-size: 1.1em;
    overflow: visible;
  }
  .navbar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    font-family: monospace;
    padding: 1.1em;
  }
  .navbar-item:hover {
    background: rgba(34, 85, 110, 1);
    font-weight: bold;
  }
  #navigation-bar-search:hover {
    background: none;
    font-weight: bold;
  }
  .fas {
    color: rgba(148, 207, 201, 1);
  }
  @media only screen and (max-width: 1200px) {
    .navbar-item {
      padding-left: 1em;
      padding-right: 1em;
    }
    .fas {
      display: none;
    }
  }
  @media only screen and (max-width: 1200px) {
    .navbar-item {
      padding-left: 1em;
      padding-right: 1em;
    }
    .fas {
      display: none;
    }
  }
  @media only screen and (max-device-width: 750px) {
    #navigation-bar {
      display: none;
    }
  }
</style>

<script>
  import NavigationBarSearch from '@/components/NavigationBarSearch';
  import NavigationBarAccountMenu from '@/components/NavigationBarAccountMenu';

  export default {
    components: {
      'navigation-bar-search': NavigationBarSearch,
      'navigation-bar-account-menu': NavigationBarAccountMenu
    }
  };
</script>
