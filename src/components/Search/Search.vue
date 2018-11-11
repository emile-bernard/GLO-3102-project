<template>
  <section class="section">
    <h1 class="title">{{typeTitleCase}}</h1>
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link :to="this.path"><span>{{typeTitleCase}}</span></router-link>
    </p>
    <br/>
    <div class="container">
      <navigation-bar-search></navigation-bar-search>
      <search-results></search-results>
    </div>
  </section>
</template>

<style>
</style>

<script>
  import NavigationBarSearch from './NavigationBarSearch';
  import SearchResults from './SearchResults';

  export default {
    components: {
      'navigation-bar-search': NavigationBarSearch,
      'search-results': SearchResults,
    },
    data() {
      return {
        path: '/albums',
        typeTitleCase: 'Albums', // TODO: set to null
      };
    },
    created() {
      // this.$route.query.q;
      this.path = this.$route.path;
      this.typeTitleCase = this.$route.name;
      // console.log(this.path);
      // console.log(this.typeTitleCase);
    }
  };
</script>
