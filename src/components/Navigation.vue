<template>
  <nav>
    <div id="bar">
      <div class="link search-link">
        <form class="search-form">
          <button type="submit"><i class="fas fa-search fa-2x"></i></button>
          <input type="text" placeholder="Search..."/>
        </form>
      </div>
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
      <div class="vertical-bar">
        <span>|</span>
      </div>
      <div class="link">
        <router-link to="/account">
          <i class="fas fa-user fa-2x"></i>
          <p>&nbsp;</p>
        </router-link>
        <ul>
          <li><a href="#" id="user-name">Uncle Bob</a></li>
          <li><a href="#"><i class="fas fa-cog"></i>&nbsp;Settings</a></li>
          <li><a href="#"><i class="fas fa-sign-out-alt"></i>&nbsp;Log out</a></li>
        </ul>
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

  .search-link {
    margin-right: auto;
  }

  .search-form {
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow: hidden;
  }

  .search-form button {
    border-right: none;
    height: 100%;
    background: rgba(34, 85, 110, 1);
    color: rgba(148, 207, 201, 1);
    border-radius: 10px 0 0 10px;
    cursor: pointer;
    float: left;
  }

  .search-form button:hover {
    color: white;
  }

  form.search-form input {
    padding-left: 15px;
    min-height: 27px;
    background: rgba(148, 207, 201, 1);
    color: white;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
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

  .link ul {
    display: none;
    position: absolute;
    list-style: none;
    height: auto;
    width: auto;
    top: 90px;
    right: 10px;
    background: rgba(34, 85, 110, 0.98);
    color: rgba(148, 207, 201, 1);;
  }

  .link ul li{
    margin-top: 30px;
    margin-bottom: 30px;
    padding-right: 60px;
  }

  .link:hover {
    background: rgba(34, 85, 110, 1);
    font-weight: bold;
  }

  .link:hover > a {
    color: white;
  }

  .link:hover > ul {
    display: initial;
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

    .search-form {
      margin-left: 10px;
    }

    form.search-form button {
      display: none;
    }

    form.search-form input {
      border-radius: 10px 10px 10px 10px;
    }
  }

</style>
