<template>
  <section class="section">
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link to="/artists"><span>Artists</span></router-link>
      <span> > </span>
      <router-link :to="'/artists/'+albums[0].artistId">
        <span>{{albums[0].artistName}}</span>
      </router-link>
      <span> > </span>
      <router-link to="/albums"><span>Albums</span></router-link>
      <span> > </span>
      <router-link :to="'/albums'+albums[0].collectionId">
        <span>{{albums[0].collectionName}}</span>
      </router-link>
    </p>
    <br/>
    <div class="container">
      <h1 class="title is-size-2">{{albums[0].collectionName}}</h1>
      <section id="album-hero-parralax-bg" class="hero hero-parralax-bg">
        <div class="hero-body">
          <album-information
            v-for="album in albums"
            v-bind:key="album.collectionId"
            v-bind:wrapperType.sync="album.wrapperType"
            v-bind:collectionType.sync="album.collectionType"
            v-bind:artistId.sync="album.artistId"
            v-bind:collectionId.sync="album.collectionId"
            v-bind:artistName.sync="album.artistName"
            v-bind:collectionName.sync="album.collectionName"
            v-bind:artistViewUrl.sync="album.artistViewUrl"
            v-bind:collectionViewUrl.sync="album.collectionViewUrl"
            v-bind:artWorkUrl100.sync="album.artworkUrl100"
            v-bind:collectionPrice.sync="album.collectionPrice"
            v-bind:collectionExplicitness.sync="album.collectionExplicitness"
            v-bind:trackCount.sync="album.trackCount"
            v-bind:copyright.sync="album.copyright"
            v-bind:country.sync="album.country"
            v-bind:currency.sync="album.currency"
            v-bind:releaseDateString.sync="album.releaseDate"
            v-bind:primaryGenreName.sync="album.primaryGenreName"
          ></album-information>
        </div>
      </section>
      <!--Todo: timeline into another component-->
    </div>
  </section>
</template>

<style>
  .hero-parralax-bg {
    overflow: auto;
    position: relative;
  }

  #album-hero-parralax-bg:before {
    content: '';
    position: absolute;
    display: block;
    background: url('https://bit.ly/2P2Lo1n') no-repeat center center fixed;
    background-size: cover;
    -webkit-filter: blur(50px);
    -moz-filter: blur(50px);
    -o-filter: blur(50px);
    -ms-filter: blur(50px);
    filter: blur(50px);
    width: 100%;
    height: 100%;
  }

  .hero-parralax-bg * {
    z-index: 10;
  }

  .hero-body {
    background-color: rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
    align-items: center;
    flex-direction: row;
    column-gap: 0;
  }
</style>

<script>
  import AlbumInformation from '@/components/Album/AlbumInformation';
  import * as api from '@/Api';
  import { redirectToLoginIfNotLoggedIn } from '../../LoginCookies';

  export default {
    components: {
      'album-information': AlbumInformation
    },
    props: ['id'],
    data() {
      return {
        albumCount: 0,
        albums: [{
          collectionId: -1,
          collectionName: ''
        }]
      };
    },
    created() {
      redirectToLoginIfNotLoggedIn(this.$router, encodeURIComponent(this.$route.path));
      this.create();
    },
    methods: {
      async create() {
        const albumInfo = await api.getAlbum(this.id, true);
        if (albumInfo !== '') {
          this.albums = albumInfo.results;
          this.albumCount = albumInfo.resultCount;
        }
      }
    }
  };
</script>
