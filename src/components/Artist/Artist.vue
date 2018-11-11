<template>
  <section class="section">
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link to="/artists"><span>Artists</span></router-link>
      <span> > </span>
      <router-link to="/artists"><span>{{artist.artistName}}</span></router-link>
    </p>
    <br/>
    <div class="container">
      <h1 class="title is-size-2">Savant</h1>
      <h2 class="subtitle is-size-3"><b>Genres:</b> Dance, Electronica, House, Pop, House, Electronic, Hardcore</h2>
      <section id="artist-hero-parralax-bg" class="hero hero-parralax-bg">
        <div class="hero-body">
          <artist-image
            v-bind:refLink="artist.artistLinkUrl"
            v-bind:imgSrc="'https://upload.wikimedia.org/wikipedia/commons/d/df/ITunes_logo.svg'"
          ></artist-image>
          <artist-most-recent-album
            v-bind:title="albums[0].collectionName"
            v-bind:genre="albums[0].primaryGenreName"
            v-bind:refLink="getRefLink(albums[0].collectionId)"
            v-bind:imgSrc="albums[0].artworkUrl100"
            v-bind:copyright="albums[0].copyright"
          ></artist-most-recent-album>
        </div>
      </section>
      <br/>
      <div>
        <h2 class="subtitle is-size-3"><b>Albums</b></h2>
        <p>Most recent first.</p>
        <div id="album-list">
          <artist-album
            v-for="album in albums"
            v-bind:key="album.collectionId"
            v-bind:title="album.collectionName"
            v-bind:genre="album.primaryGenreName"
            v-bind:refLink="getRefLink(album.collectionId)"
            v-bind:imgSrc="album.artworkUrl100"
            v-bind:copyright="album.copyright"
          ></artist-album>
        </div>
      </div>
      <br/>
    </div>
  </section>
</template>

<style>
  .hero-parralax-bg {
    overflow: auto;
    position: relative;
  }

  #artist-hero-parralax-bg:before {
    content: "";
    position: absolute;
    display: block;
    background: url('https://upload.wikimedia.org/wikipedia/commons/d/df/ITunes_logo.svg') no-repeat center center fixed;
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

  #album-list {
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    margin: 10px;
    padding: 10px;
    color: #dee5ed;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-content: flex-start;
    column-gap: 0;
  }

  #album-list div img {
    width: 100%;
  }
</style>

<script>
  import ArtistImage from './ArtistImage';
  import ArtistMostRecentAlbum from './ArtistMostRecentAlbum';
  import ArtistAlbum from './ArtistAlbum';

  export default {
    components: {
      'artist-image': ArtistImage,
      'artist-most-recent-album': ArtistMostRecentAlbum,
      'artist-album': ArtistAlbum
    },
    props: ['id'],
    data() {
      return {
        artist: {
          wrapperType: 'artist',
          artistType: '',
          artistName: '',
          artistLinkUrl: '',
          artistId: -1,
          primaryGenreName: '',
          /*
          wrapperType: 'artist',
          artistType: 'Artist',
          artistName: 'Savant',
          artistLinkUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
          artistId: 301490824,
          amgArtistId: 2900484,
          primaryGenreName: 'Dance',
          primaryGenreId: 17
          */
        },
        albums: [/*
          {
            wrapperType: 'collection',
            collectionType: 'Album',
            artistId: 301490824,
            collectionId: 578643761,
            amgArtistId: 2900484,
            artistName: 'Savant',
            collectionName: 'Alchemist',
            collectionCensoredName: 'Alchemist',
            artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
            collectionViewUrl: 'https://itunes.apple.com/us/album/alchemist/578643761?uo=4',
            artworkUrl60: 'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/a2/ed/20/a2ed2016-acf9-1fec-0111-e247248d012b/source/60x60bb.jpg',
            artworkUrl100: 'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/a2/ed/20/a2ed2016-acf9-1fec-0111-e247248d012b/source/100x100bb.jpg',
            collectionPrice: 9.99,
            collectionExplicitness: 'notExplicit',
            trackCount: 22,
            copyright: '℗ 2012 SectionZ Records',
            country: 'USA',
            currency: 'USD',
            releaseDate: '2012-12-12T08:00:00Z',
            primaryGenreName: 'Dance'
          }
        */],
      };
    },
    created() {
      const GET_HEADER = { method: 'get' };
      fetch(`http://ubeat.herokuapp.com/unsecure/artists/${this.$route.params.id}`, GET_HEADER)
        .then(res => res.json())
        .then(res => this.initArtist(res));
      fetch(`http://ubeat.herokuapp.com/unsecure/artists/${this.$route.params.id}/albums`, GET_HEADER)
        .then(res => res.json())
        .then(res => this.initArtistAlbums(res));
    },
    methods: {
      initArtist(response) {
        this.artist = response.results[0];
      },
      initArtistAlbums(response) {
        let filteredAlbums = [];
        for (let albumKey = 0; albumKey < response.results.length; albumKey += 1) {
          const album = response.results[albumKey];
          if (album.collectionExplicitness === 'notExplicit') {
            filteredAlbums.push(album);
          }
        }
        filteredAlbums = filteredAlbums.reverse();
        this.albums = filteredAlbums;
      },
      getRefLink(collectionId) {
        return `/albums/${collectionId}`;
      }
    }
  };
</script>
