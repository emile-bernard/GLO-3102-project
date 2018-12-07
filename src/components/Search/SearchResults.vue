<template>
  <div>
    <h2 class="title">Search Results:</h2>
    <hr>
    <div v-if="isResultsEmpty">No search Results. Try searching something or something else in the search bar right
      above.
    </div>
    <pulse-loader v-if="displaySearchSpinner"></pulse-loader>
    <search-result-element
      v-for="result in searchResultObjects"
      v-bind:key="result.getId()"
      v-bind:result="result"
    ></search-result-element>
    <hr>
  </div>
</template>

<script>
  import SearchResultFactory from './SearchResultElementObject';
  import SearchResultElement from './SearchResultElement';
  import { getLoginToken } from '../../LoginCookies';
  import PulseLoader from '../../../node_modules/vue-spinner/src/ScaleLoader';


  export default {
    components: {
      'search-result-element': SearchResultElement,
      'pulse-loader': PulseLoader,
    },
    data() {
      return {
        path: '',  // e.g.: '/albums',
        typeTitleCase: '',  // e.g.: 'Albums',
        searchResultRaw: [],
        displaySearchSpinner: false,
      };
    },
    computed: {
      searchResultObjects() {
        const newResults = [];
        for (let i = 0; i < this.searchResultRaw.length; i += 1) {
          newResults.push(
            new SearchResultFactory(this.searchResultRaw[i])
          );
        }
        return newResults;
      },
      isResultsEmpty() {
        return this.searchResultRaw.length === 0;
      }
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
        this.searchResultRaw = [];
        this.path = this.$route.path;
        this.typeTitleCase = this.$route.name;

        if (typeof (this.$route.query.q) !== 'undefined') {
          this.query = this.$route.query.q;
          this.findResults();
        } else {
          this.query = null;
        }
      },
      findResults() {
        this.displaySearchSpinner = true;

        let remoteSearchPath = this.path;
        if (remoteSearchPath === '/search') {
          remoteSearchPath = '';
        }
        const token = getLoginToken();
        const GET_HEADER = { method: 'get', Authorization: token };
        if (typeof (token) !== 'undefined') {
          fetch(`http://ubeat.herokuapp.com/unsecure/search${remoteSearchPath}?q=${encodeURI(this.query)}`, GET_HEADER)
            .then(res => res.json())
            .then(res => this.initSearchResults(res));
        }
      },
      initSearchResults(response) {
        this.displaySearchSpinner = false;
        let results;
        if (this.path === '/users') {
          results = response;
        } else {
          results = response.results;
        }
        this.searchResultRaw = results;
      }
    }
  };
</script>
