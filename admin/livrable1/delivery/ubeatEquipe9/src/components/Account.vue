<template>
  <div class="container">
    <h1 class="title">Account</h1>
    <div id="account-info">
      <h2 class="subtitle">Username: Uncle Bob</h2>

      <h2 class="subtitle">Email</h2>
      <p>unclebob@gmail.com</p>
      <button class="button is-primary">Change Your Email</button>

      <button class="button is-primary">Change Your Password</button>

      <router-link class="button is-primary" to="/logout">
        Logout
      </router-link>
    </div>
  </div>
</template>

<style>
  #account-info {
    background: rgba(0, 0, 0, 0.1);
  }
</style>
