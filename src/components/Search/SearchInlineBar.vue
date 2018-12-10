<template>
  <div id="navigation-bar-search" class="navbar-item">
    <div class="field has-addons">
      <div id="navigation-bar-search-input" class="control has-icons-left">
        <input v-model="query" class="input" type="text" :placeholder="name">
        <span class="icon is-small is-left">
      <i class="fas fa-search"></i>
      </span>
      </div>
      <router-link :to="getResults()">
        <div class="control" id="search-button">
          <a class="button is-primary">
            Search
          </a>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  #navigation-bar-search {
    width: 100%;
    flex-grow: 2;
  }

  #navigation-bar-search:hover {
    background: none;
  }
</style>

<script>
  export default {
    name: 'SearchInlineBar',
    props: ['name', 'targetPath'],
    data() {
      return {
        query: ''
      };
    },
    methods: {
      getResults() {
        return `${this.targetPath}?q=${this.query}`;
      }
    }
  };
</script>
