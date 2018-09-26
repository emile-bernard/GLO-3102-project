<template>
  <div class="link search-link">
    <form class="search-form">
      <button type="submit"><i class="fas fa-search fa-2x"></i></button>
      <input type="text" placeholder="Search..."/>
    </form>
  </div>
</template>

<style>

  .search-link {
    margin-right: auto;
  }

  .search-form {
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow: hidden;
  }

  .search-form button {
    border-right: none;
    height: 100%;
    background: rgba(34, 85, 110, 1);
    color: rgba(148, 207, 201, 1);
    border-radius: 10px 0 0 10px;
    cursor: pointer;
    float: left;
  }

  .search-form button:hover {
    color: white;
  }

  form.search-form input {
    padding-left: 15px;
    min-height: 27px;
    background: rgba(148, 207, 201, 1);
    color: white;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
  }

  @media only screen and (max-width: 1200px) {
    .search-form {
      margin-left: 10px;
    }

    form.search-form button {
      display: none;
    }

    form.search-form input {
      border-radius: 10px 10px 10px 10px;
    }
  }

</style>

<script>

</script>
