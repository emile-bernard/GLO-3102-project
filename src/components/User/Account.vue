<template>
  <div class="section">
    <div class="container">
      <h1 class="title is-size-2">Account</h1>
      <div id="account-info">
        <div class="account-info-element">
          <h2 class="title"><b>Username</b> <p>Uncle Bob</p></h2>
          <img
            src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fd39kb1fcbt5kgr.cloudfront.net%2Fassets%2Fillustrations%2Fhappy-laptop-user-7545a7e8a53e3b86259de890f00e15d7.png&f=1">
        </div>
        <br>
        <div class="account-info-element">
          <h2 class="title"><b>Email</b> <p>unclebob@gmail.com</p></h2>
          <p>
            <button class="button is-primary">Change Your Email</button>
          </p>
        </div>
        <br>
        <div class="account-info-element">
          <h2 class="title"><b>Password</b></h2>
          <button class="button is-primary">Change Your Password</button>
        </div>
        <br>
        <div class="account-info-element">
          <h2 class="title"><b>Volume Settings</b></h2>
          <input id="sliderWithValue" class="slider has-output is-fullwidth"
                 min="0" max="100" value="50" step="1" type="range">
          <output for="sliderWithValue"></output>
        </div>
      </div>
    </div>
    <hr>
    <div id="acount-info-logout-button" class="container">
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
