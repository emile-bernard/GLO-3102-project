<template>
  <div class="navbar-end">
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">
        <router-link to="/account">
          <i class="fas fa-user fa-2x"></i>
          <p>Account</p>
        </router-link>
      </a>
      <div class="navbar-dropdown is-right">
        <a class="navbar-item">
          <router-link to="/account">
            <a href="#" id="user-name">Uncle Bob</a>
          </router-link>
        </a>
        <a class="navbar-item">
          <router-link to="/settings">
            <a href="#"><i class="fas fa-cog"></i>&nbsp;Settings</a>
          </router-link>
        </a>
        <hr class="navbar-divider">
        <a class="navbar-item">
          <router-link to="/logout">
            <a href="#"><i class="fas fa-sign-out-alt"></i>&nbsp;Log out</a>
          </router-link>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
</script>
