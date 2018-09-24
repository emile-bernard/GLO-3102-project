<template>
  <ul>
    <li>
      <router-link to="/account">
        <a href="#" id="user-name">Uncle Bob</a>
      </router-link>
    </li>
    <li>
      <router-link to="/settings">
        <a href="#"><i class="fas fa-cog"></i>&nbsp;Settings</a>
      </router-link>
    </li>
    <li>
      <router-link to="/logout">
        <a href="#"><i class="fas fa-sign-out-alt"></i>&nbsp;Log out</a>
      </router-link>
    </li>
  </ul>
</template>

<style>
  .link ul {
    display: none;
    position: absolute;
    list-style: none;
    height: auto;
    width: auto;
    top: 7.8em;
    right: 0.1em;
    background: rgba(34, 85, 110, 1);
    color: rgba(148, 207, 201, 1);
  }

  .link ul li {
    padding: 1em 2em;
  }

  .link:hover > ul {
    display: initial;
  }

  .link ul li a:hover {
    color: white;
  }

  @media only screen and (max-device-width: 780px) {

    .link ul {
      top: 5.3em;
    }

    .link ul li {
      margin-top: 0;
      margin-bottom: 0;
      padding-right: 3em;
    }
  }
</style>

<script>

</script>
