<template>
  <div class="section">
    <div class="container">
      <h1 class="title">Account</h1>
      <div id="account-info">

        <div class="account-info-element">
          <h2 class="subtitle">Username</h2>
          <p>Uncle Bob
            <button class="button is-primary">Change Your Username</button>
          </p>
        </div>

        <div class="account-info-element">
          <h2 class="subtitle">Email</h2>
          <p>unclebob@gmail.com
            <button class="button is-primary">Change Your Email</button>
          </p>
        </div>

        <div class="account-info-element">
          <h2 class="subtitle">Password</h2>
          <br>
          <button class="button is-primary">Change Your Password</button>
        </div>

      </div>
    </div>
    <div class="container">
      <h2 class="subtitle">Volume Settings</h2>
    </div>
    <div class="container">
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
