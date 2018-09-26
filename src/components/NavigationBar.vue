<template>
  <div id="navigation-bar">
    <navigation-bar-search></navigation-bar-search>
    <div class="link">
      <router-link to="/"><i class="fas fa-home fa-2x"></i>
        <p>Home</p></router-link>
    </div>
    <div class="vertical-bar">
    </div>
    <div class="link">
      <router-link to="/album"><i class="fas fa-compact-disc fa-2x"></i>
        <p>Album</p></router-link>
    </div>
    <div class="vertical-bar">
    </div>
    <div class="link">
      <router-link to="/artist"><i class="fas fa-user-astronaut fa-2x"></i>
        <p>Artist</p></router-link>
    </div>
    <div class="vertical-bar">
    </div>
    <div class="link">
      <router-link to="/playlist"><i class="fas fa-headphones fa-2x"></i>
        <p>Playlist</p></router-link>
    </div>
    <div class="vertical-bar">
    </div>
    <div class="link">
      <router-link to="/account">
        <i class="fas fa-user fa-2x"></i>
        <p>Account</p>
      </router-link>
      <navigation-bar-account-menu></navigation-bar-account-menu>
    </div>
  </div>
</template>

<style>
  #navigation-bar {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
  }

  .vertical-bar {
    display: flex;
    align-items: center;
    height: 100%;
    min-height: 75px;
    font-weight: bold;
    font-size: 1.1em;
    border-right: 3px solid rgba(148, 207, 201, 1);
  }

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    font-family: monospace;
    font-size: 1.5em;
    padding: 2.1em;
  }

  .link:hover {
    background: rgba(34, 85, 110, 1);
    font-weight: bold;
  }

  .link:hover > a {
    color: white;
  }

  a {
    color: rgba(148, 207, 201, 1);
    text-decoration: none;
  }

  p {
    margin: 0.5em;
  }

  @media only screen and (max-width: 1200px) {
    .link {
      padding-left: 1em;
      padding-right: 1em;
    }

    #navigation-bar {
      justify-content: space-between;
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
