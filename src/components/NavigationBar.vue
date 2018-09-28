<template>
  <nav id="navigation-bar" class="navbar" role="navigation">
    <div class="navbar-menu">
      <div class="navbar-start">
        <div id="navigation-bar-search" class="navbar-item">
          <navigation-bar-search></navigation-bar-search>
        </div>
      </div>
      <div class="navbar-end">
        <router-link to="/">
          <div class="navbar-item">
            <i class="fas fa-home fa-2x"></i>
            <p>Home</p>
          </div>
        </router-link>
        <router-link to="/album">
          <div class="navbar-item">
            <i class="fas fa-compact-disc fa-2x"></i>
            <p>Album</p>
          </div>
        </router-link>
        <router-link to="/artist">
          <div class="navbar-item">
            <i class="fas fa-user-astronaut fa-2x"></i>
            <p>Artist</p>
          </div>
        </router-link>
        <router-link to="/playlist">
          <div class="navbar-item">
            <i class="fas fa-headphones fa-2x"></i>
            <p>Playlist</p>
          </div>
        </router-link>
        <navigation-bar-account-menu></navigation-bar-account-menu>
      </div>
    </div>
  </nav>
</template>

<style>
  .navbar-menu {
    display: flex;
  }

  .navbar-start {
    justify-content: flex-start;
    margin-left: 20px;
    margin-right: auto;
    flex-grow: 1;
  }

  .navbar-end {
    justify-content: flex-end;
    margin-left: 20px;
    margin-right: 20px;
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
    width: 140px;
    margin-left: auto;
    margin-right: auto;
    font-family: monospace;
    color: darkgray;
    padding: 1.1em;
    flex-grow: 1;
  }

  .navbar-item i {
    margin-bottom: 4px;
  }

  .navbar-item:hover {
    background: rgba(34, 85, 110, 1);
    font-weight: bold;
    color: white;
  }

  #navigation-bar-search {
    width: 100%;
    flex-grow: 2;
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

  @media only screen and (max-width: 1087px) {
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
