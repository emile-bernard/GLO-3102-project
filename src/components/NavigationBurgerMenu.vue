<template>
  <div id="navigation-burger-menu">
    <div id="navigation-burger-menu-items" class="navigation-burger-menu-items-close">
      <router-link to="/">Home</router-link>
      <router-link to="/artist">Artist</router-link>
      <router-link to="/album">Album</router-link>
      <router-link to="/playlist">Playlist</router-link>
      <router-link to="/account">Account</router-link>
    </div>
  </div>
</template>

<style>
  #navigation-burger-menu {
  }

  #navigation-burger-menu-items {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    font-size: 2em;
    background: rgba(34, 85, 110, 1);
    list-style-type: none;
    float: left;
  }

  #navigation-burger-menu-items a {
    padding: 0.3em 0;
  }

  #navigation-burger-menu-items a:hover {
    color: white;
    font-weight: bold;
  }

  .navigation-burger-menu-items-close {
    max-height: 0;
    padding: 0.85em 0;
    transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), max-height 0.5s ease-in, padding 0.5s ease-in;
    transform: translate(-150%, 0);
  }

  .navigation-burger-menu-items-open {
    max-height: 500px;
    padding: 2em 0;
    transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), max-height 0.5s ease-out, padding 0.5s ease-out;
    transform: none;
  }
</style>

<script>

</script>
