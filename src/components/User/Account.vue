<template>
  <div class="columns is-vcentered">
      <div class="column is-fullheight is-2 is-sidebar-menu is-hidden-mobile">
        <aside class="menu">
            <ul class="menu-list">
              <li>
                <p class="menu-label">Transactions</p>
                <ul>
                  <li><a>Buy music</a></li>
                  <li><a>Current offers</a></li>
                  <li><a>Transactions historic</a></li>
                </ul>
              </li>
            </ul>
          <ul class="menu-list">
            <li>
              <p class="menu-label">Manage Your Friends</p>
              <ul>
                <li><a>Members</a></li>
                <li><a>Add a member as friend</a></li>
                <li><a>Invite a friend</a></li>
                <li><a>Share playlist</a></li>
              </ul>
            </li>
            <p class="menu-label">
              Administration
            </p>
            <li><a>Cloud Storage Environment Settings</a></li>
            <li><a>Authentication</a></li>
            <li><a>MemberShip</a></li>
          </ul>
          <p class="menu-label">
            Transactions
          </p>
        </aside>
      </div>

    <div class="section">
      <div class="container">
        <h1 class="title is-size-2">Account</h1>
        <div class="card">
          <div class="account-info-element">
            <h2 class="title"><b>Username</b> <p>Uncle Bob</p></h2>
            <figure class="card-image is-centered card-header-icon ">
              <v-gravatar></v-gravatar>
            </figure>
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
  </div>
</template>

<style>
  #account-info {
    background: rgba(0, 0, 0, 0.1);
  }
</style>

