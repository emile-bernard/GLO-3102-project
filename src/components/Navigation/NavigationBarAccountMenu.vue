<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <i class="fas fa-user fa-2x"></i>
    <p>Account</p>
    <div class="navbar-dropdown">
      <div id="user-name">
        <a href="#"><i class="fas fa-user"></i> My Account</a>
      </div>
      <router-link to="/settings">
        <div class="navbar-item">
          <a href="#"><i class="fas fa-cog"></i>&nbsp;Settings</a>
        </div>
      </router-link>
      <hr class="navbar-divider">
      <router-link to="/logout">
        <div class="navbar-item">
          <a href="#"><i class="fas fa-sign-out-alt"></i>&nbsp;Log out</a>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style>
  .navbar-item.has-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    font-family: monospace;
    padding: 1.1em;
  }

  .navbar-dropdown .navbar-item:hover {
    background: rgba(34, 85, 110, 1);
  }

  #user-name a {
    color: white;
    font-weight: bold;
  }
</style>

<script>
</script>
