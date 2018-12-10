<template>
  <div>
    <div class="account-info-element">
      <p>{{userName}}</p>
      <p>{{email}}</p>
      <figure class="card-image is-centered card-header-icon ">
        <v-gravatar :email="email"></v-gravatar>
      </figure>
      <a href="https://fr.gravatar.com/">
        Not register to Gravatar.com? <br>
        Create your Gravatar account!</a>
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
