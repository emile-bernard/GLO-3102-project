<template>
  <nav>
    <div id="bar">
      <div class="link">
        <router-link to="/"><i class="fas fa-home fa-2x"></i>
          <p>Home</p></router-link>
      </div>
      <div class="vertical-bar">
        <span>|</span>
      </div>
      <div class="link">
        <router-link to="/album"><i class="fas fa-compact-disc fa-2x"></i>
          <p>Album</p></router-link>
      </div>
      <div class="vertical-bar">
        <span>|</span>
      </div>
      <div class="link">
        <router-link to="/artist"><i class="fas fa-user-astronaut fa-2x"></i>
          <p>Artist</p></router-link>
      </div>
      <div class="vertical-bar">
        <span>|</span>
      </div>
      <div class="link">
        <router-link to="/playlist"><i class="fas fa-headphones fa-2x"></i>
          <p>Playlist</p></router-link>
      </div>
    </div>
  </nav>
</template>

<style>
  nav {
    height: 7em;
    width: 100%;
    background: rgba(21, 54, 65, 1);
    padding: 2.1em 0;
  }

  #bar {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .vertical-bar {
    display: flex;
    align-items: center;
    height: 100%;
    color: rgba(148, 207, 201, 1);
    font-weight: bold;
    font-size: 1.1em;
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
    padding: 0 2.1em;
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

  @media only screen and (max-device-width: 1200px) {
    nav {
      height: 2em;
    }

    #bar {
      justify-content: space-between;
    }

    .fas {
      display: none;
    }
  }

</style>
