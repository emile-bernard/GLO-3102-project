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
      <search-inline-bar
        v-bind:targetPath="path"
        v-bind:name="'Search in '+typeTitleCase+'...'"
      ></search-inline-bar>
      <search-results></search-results>
    </div>
  </section>
</template>

<style>
</style>

<script>
  import SearchInlineBar from './SearchInlineBar';
  import SearchResults from './SearchResults';

  export default {
    components: {
      'search-inline-bar': SearchInlineBar,
      'search-results': SearchResults,
    },
    data() {
      return {
        path: '/albums',
        typeTitleCase: 'Albums', // TODO: set to null
      };
    },
    watch: {
      $route() {
        this.init();
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.path = this.$route.path;
        this.typeTitleCase = this.$route.name;
      }
    }
  };
</script>
