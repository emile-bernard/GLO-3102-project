<template>
  <div id="album-page-hero-body-layout">
    <album-cover
      v-bind:refLink= artistViewUrl
      v-bind:imgSrc= artWorkUrl100 >
      <!--v-bind:playRef="'https://www.youtube.com/watch?v=GmwhBSh2rOs'"   ceci faisait jouer l'album au complet, est-ce que l'on conserve cela??-->
    </album-cover>
    <div id="album-info">
      <h2 class="subtitle is-size-3">{{collectionName}}</h2>
      <p>Genre: {{primaryGenreName}}</p>
      <p>Release: {{releaseDate}}</p>
      <p>Track count: {{trackCount}}</p>
      <i id="add-album-to-playlist-icon" v-on:click="addAlbumToPlayList" class="far fa-plus-circle fa-1x"></i>
      <br>
      <ul id="album-info-songs">
        <Track
          v-for="(song, index) in albumTracks"
          v-bind:key="index"
          v-bind:wrapperType="song.wrapperType"
          v-bind:kind="song.kind"
          v-bind:trackId="song.trackId"
          v-bind:trackName="song.trackName"
          v-bind:previewUrl="song.previewUrl"
          v-bind:trackPrice="song.trackPrice"
          v-bind:trackExplicitness="song.trackExplicitness"
          v-bind:diskCount="song.diskCount"
          v-bind:diskNumber="song.diskNumber"
          v-bind:trackNumber="song.trackNumber"
          v-bind:trackTimeMillis="song.trackTimeMillis"
          v-bind:isStreamable="song.isStreamable"
          v-bind:addSongToPlaylist="addSongToPlayList"
        ></Track>
      </ul>
    </div>
  </div>
</template>

<style>
  #album-info {
    background-color: rgba(0, 0, 0, 0.65);
    max-width: 100vw;
    max-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 20px;
    color: #dee5ed;
    padding: 40px;
  }

  #album-info-songs {
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    text-align: left;
  }
</style>

<script>
  /* eslint-disable quote-props */
  import * as api from '@/Api';
  import AlbumCover from '@/components/Album/AlbumCover';
  import track from './Track';

  export default {
    props: {
      wrapperType: String,
      collectionType: String,
      artistId: Number,
      collectionId: Number, // ceci est l'id de l'album
      artistName: String,
      collectionName: String, // ceci est le nom de l'Album
      artistViewUrl: String,
      collectionViewUrl: String,
      artWorkUrl100: String,
      collectionPrice: Number,
      collectionExplicitness: String,
      trackCount: Number,
      copyright: String,
      country: String,
      currency: String,
      releaseDate: String,
      primaryGenreName: String
    },
    components: {
      'Track': track,
      'album-cover': AlbumCover,
    },
    data: () => ({
      resultsCount: 0,
      albumTracks: []
    }),
    methods: {
      async getAlbum(albumId) {
        // const {resultCount, results} = this.album;
        this.albumTracks = await api.getAlbumTracks(albumId, true);
      },
      async created() {
        const albumInfo = await api.getAlbumTracks(this.collectionId, true); // 1125488753
        this.albumTracks = albumInfo.results;
        this.resultsCount = albumInfo.resultCount;
      },
      addSongToPlayList() {
        throw new Error('NotImplementedException');
        // TODO: add song to playlist here
      },
      async addAlbumToPlayList() {
        const albumInfo = await api.getAlbumTracks(this.collectionId, true); // 1125488753
        this.albumTracks = albumInfo.results;
        // TODO : ajouter toutes les chanson à la playlist ici
      }
    },
  };
</script>
