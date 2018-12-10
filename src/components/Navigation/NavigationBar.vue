<template>
  <nav id="navigation-bar" class="navbar" role="navigation">
    <div class="navbar-menu">
      <div class="navbar-start">
      </div>
      <div class="navbar-end">
        <router-link to="/">
          <div class="navbar-item">
            <i class="fas fa-home fa-2x"></i>
            <p>Home</p>
          </div>
        </router-link>
        <router-link to="/news">
          <div class="navbar-item">
            <i class="fas fa-newspaper fa-2x"></i>
            <p>News</p>
          </div>
        </router-link>
        <router-link v-if="userLoggedIn" to="/search">
          <div class="navbar-item">
            <i class="fas fa-search fa-2x"></i>
            <p>Search</p>
          </div>
        </router-link>
        <router-link v-if="userLoggedIn" to="/artists">
          <div class="navbar-item">
            <i class="fas fa-user-astronaut fa-2x"></i>
            <p>Artists</p>
          </div>
        </router-link>
        <router-link v-if="userLoggedIn" to="/albums">
          <div class="navbar-item">
            <i class="fas fa-compact-disc fa-2x"></i>
            <p>Albums</p>
          </div>
        </router-link>
        <router-link v-if="userLoggedIn" to="/tracks">
          <div class="navbar-item">
            <i class="fas fa-music fa-2x"></i>
            <p>Tracks</p>
          </div>
        </router-link>
        <router-link v-if="userLoggedIn" to="/users">
          <div class="navbar-item">
            <i class="fas fa-users fa-2x"></i>
            <p>Users</p>
          </div>
        </router-link>
        <router-link v-if="userLoggedIn" to="/playlists">
          <div class="navbar-item">
            <i class="fas fa-headphones fa-2x"></i>
            <p>Playlists</p>
          </div>
        </router-link>
        <router-link v-if="userLoggedIn" to="/account">
          <div class="navbar-item">
            <i class="fas fa-user fa-2x"></i>
            <p>Account</p>
          </div>
        </router-link>
        <router-link v-else to="/login">
          <div class="navbar-item">
            <i class="fas fa-sign-in-alt fa-2x"></i>
            <p>Log In</p>
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
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

  .fas {
    color: rgba(148, 207, 201, 1);
  }

  @media only screen and (max-width: 1200px), (max-device-width: 1200px) {
    .navbar-item {
      padding-left: 1em;
      padding-right: 1em;
    }

    .fas {
      display: none;
    }
  }

  @media only screen and (max-width: 1200px), (max-device-width: 1200px) {
    .navbar-item {
      padding-left: 1em;
      padding-right: 1em;
    }

    .fas {
      display: none;
    }
  }

  @media only screen and (max-width: 1087px), (max-device-width: 1087px) {
    #navigation-bar {
      display: none;
    }
  }
</style>

<script>
  import SearchInlineBar from '@/components/Search/SearchInlineBar';

  export default {
    props: ['userLoggedIn'],
    components: {
      'search-inline-bar': SearchInlineBar,
    },
  };
</script>
