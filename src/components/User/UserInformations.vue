<template>
  <div>
    <div class="account-info-element">
      <h2 class="title"><b>Username</b> <p>{{userName}}</p></h2>
      <!-- TODO: CTRL+F for "Uncle" and remove everywhere it's used.
      We might want to set the username and email in a new cookie too...-->

      <figure class="card-image is-centered card-header-icon ">
        <v-gravatar></v-gravatar>
      </figure>
    </div>
    <br>
    <div class="account-info-element">
      <h2 class="title"><b>Email</b> <p>{{email}}</p></h2>
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
</template>

<script>
  export default {
    name: 'UserInformations',
    props: {
      userName: String,
      email: String,
      id: String,
    },
  };
</script>

<style scoped>

</style>
