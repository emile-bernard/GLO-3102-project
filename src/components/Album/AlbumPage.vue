<template>
  <section class="section">
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link to="/album"><span>Album</span></router-link>
      <span> > </span>
      <router-link to="/album"><span>Blink 182</span></router-link>
    </p>
    <br/>
    <div class="container">
      <h1 class="title is-size-2" v-on:click="getAlbum">Blink 182</h1>
      <section id="album-hero-parralax-bg" class="hero hero-parralax-bg">
        <div class="hero-body">
          <album-information
            v-for="(album, index) in albums"
            v-bind:key="index"
            v-bind:wrapperType="album.wrapperType"
            v-bind:collectionType="album.collectionType"
            v-bind:artistId="album.artistId"
            v-bind:collectionId="album.collectionId"
            v-bind:artistName="album.artistName"
            v-bind:collectionName="album.collectionName"
            v-bind:artistViewUrl="album.artistViewUrl"
            v-bind:collectionViewUrl="album.collectionViewUrl"
            v-bind:artWorkUrl100="album.artWorkUrl100"
            v-bind:collectionPrice="album.collectionPrice"
            v-bind:collectionExplicitness="album.collectionExplicitness"
            v-bind:trackCount="album.trackCount"
            v-bind:copyright="album.copyright"
            v-bind:country="album.country"
            v-bind:currency="album.currency"
            v-bind:releaseDate="album.releaseDate"
            v-bind:primaryGenreName="album.primaryGenreName"
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

  export default {
    components: {
      'album-information': AlbumInformation
    },
    data: () => ({
      albumCount: 0,
      albums: []
    }),
    methods: {
      async getAlbum() {
        // const {resultCount, results} = this.album;
        const album = await api.getAlbum(1125488753, true);
        this.albums = album.results;
        this.albumCount = album.resultCount;
      },
      async created() {
        const albumInfo = await api.getAlbum(1125488753, true);
        this.albums = albumInfo.results;
        this.albumCount = albumInfo.resultCount;
      }
    }
  };
</script>
