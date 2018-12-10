<template>
  <div id="search-bar-container" class="container">
    <div id="navigation-bar-search" class="navbar-item">
      <div class="field has-addons">
        <div id="navigation-bar-search-input" class="control has-icons-left">
          <input v-model="query" class="input" type="text" :placeholder="name" v-on:keyup.enter="search()">
          <span class="icon is-small is-left">
      <i class="fas fa-search"></i>
      </span>
        </div>
        <router-link :to="getResults()">
          <div class="control" id="search-button" v-on:click="search">
            <a class="button is-primary">
              Search
            </a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #search-bar-container{
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #navigation-bar-search {
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
      },
      search() {
        this.$router.push({ path: this.getResults() });
        this.query = '';
      }
    }
  };
</script>
