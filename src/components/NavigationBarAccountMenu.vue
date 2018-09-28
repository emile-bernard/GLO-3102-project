<template>
  <router-link to="/account">
    <div class="navbar-item has-dropdown is-hoverable" @click="updateTabs('navigation-tab-account')">
      <i class="fas fa-user fa-2x"></i>
      <p>Account</p>
      <div class="navbar-dropdown">
        <router-link to="/account">
          <div class="navbar-item">
            <a href="#" id="user-name">Uncle Bob</a>
          </div>
        </router-link>
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
  </router-link>
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
