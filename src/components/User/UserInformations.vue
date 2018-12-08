<template>
  <div>
    <div class="account-info-element">
      <h2 class="title"><b>Username</b> <p>{{userName}}</p></h2>
      <!-- TODO: CTRL+F for "Uncle" and remove everywhere it's used.
      We might want to set the username and email in a new cookie too...-->

      <figure class="card-image is-centered card-header-icon ">
        <h2 class="title"><b>Gravatar</b></h2>
        <v-gravatar
          :email="email"
         ></v-gravatar>
      </figure>
      <a  href="https://fr.gravatar.com/">Not register to Gravatar.com? Create yout Gravatar account!</a>
    </div>
    <br>
    <div class="account-info-element">
      <h2 class="title"><b>Email</b> <p>{{email}}</p></h2>
    </div>
    <br>
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
