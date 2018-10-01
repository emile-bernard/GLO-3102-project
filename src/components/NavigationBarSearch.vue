<template>
  <div id="navigation-bar-search" class="navbar-item">
    <div class="field has-addons">
      <div id="navigation-bar-search-input" class="control has-icons-left">
        <input class="input" type="text" placeholder="Search...">
        <span class="icon is-small is-left">
      <i class="fas fa-search"></i>
      </span>
      </div>
      <div class="control" id="search-button">
        <a class="button is-primary">
          Search
        </a>
      </div>
    </div>
  </div>
</template>

<style>
  #navigation-bar-search {
    width: 100%;
    flex-grow: 2;
  }

  #navigation-bar-search:hover {
    background: none;
  }
</style>

<script>
</script>
