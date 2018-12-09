<template>
  <div>
    <div class="account-info-element">
      <h2 class="title">
        <b>Username</b>
      </h2>
      <p>{{userName}}</p>
      <figure class="card-image is-centered card-header-icon ">
        <h2 class="title"><b>Gravatar</b></h2>
        <v-gravatar :email="email"></v-gravatar>
      </figure>
      <a  href="https://fr.gravatar.com/">Not register to Gravatar.com? Create yout Gravatar account!</a>
    </div>
    <br>
    <div class="account-info-element">
      <h2 class="title">
        <b>Email</b>
      </h2>
      <p>{{email}}</p>
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
