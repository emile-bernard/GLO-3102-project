<template>
  <div id="album-page-hero-body-layout">
    <album-cover
      v-bind:refLink=artistViewUrl
      v-bind:imgSrc=artWorkUrl100>
      <!--v-bind:playRef="'https://www.youtube.com/watch?v=GmwhBSh2rOs'"   ceci faisait jouer l'album au complet, est-ce que l'on conserve cela??-->
    </album-cover>
    <div id="album-info">
      <h2 class="subtitle is-size-3">{{collectionName}}</h2>
      <p>Genre: {{primaryGenreName}}</p>
      <p>Release: {{releaseDate.toLocaleDateString()}}</p>
      <p>Track count: {{trackCount}}</p>
      <!--<p id="add-album-to-playlist-icon" v-on:click="addAlbumToPlayList" class="far fa-plus fa-1x"></p>-->
      <br>
      <div id="album-info-songs">
        <Track
          v-for="song in albumTracks"
          v-bind:key="song.trackId"
          v-bind:wrapperType.sync="song.wrapperType"
          v-bind:kind.sync="song.kind"
          v-bind:trackId.sync="song.trackId"
          v-bind:trackName.sync="song.trackName"
          v-bind:previewUrl.sync="song.previewUrl"
          v-bind:trackPrice.sync="song.trackPrice"
          v-bind:trackExplicitness.sync="song.trackExplicitness"
          v-bind:diskCount.sync="song.discCount"
          v-bind:diskNumber.sync="song.discNumber"
          v-bind:trackNumber.sync="song.trackNumber"
          v-bind:trackTimeMillis.sync="song.trackTimeMillis"
          v-bind:isStreamable.sync="song.isStreamable"
          v-bind:addSongToPlaylist.sync="addSongToPlayList"
        ></Track>
      </div>
    </div>
  </div>
</template>

<style>
  #album-info {
    background-color: rgba(0, 0, 0, 0.65);
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
    margin: auto;
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
      collectionId: Number,
      artistName: String,
      collectionName: String,
      artistViewUrl: String,
      collectionViewUrl: String,
      artWorkUrl100: String,
      collectionPrice: Number,
      collectionExplicitness: String,
      trackCount: Number,
      copyright: String,
      country: String,
      currency: String,
      releaseDateString: String,
      primaryGenreName: String
    },
    data() {
      return {
        releaseDate: new Date(this.releaseDateString),
        resultsCount: 0,
        albumTracks: []
      };
    },
    components: {
      'Track': track,
      'album-cover': AlbumCover,
    },
    created() {
      this.create();
    },
    methods: {
      async getAlbum(albumId) {
        // const {resultCount, results} = this.album;
        this.albumTracks = await api.getAlbumTracks(albumId, true);
      },
      async create() {
        const albumInfo = await api.getAlbumTracks(this.collectionId, true);
        this.albumTracks = albumInfo.results;
        this.resultsCount = albumInfo.resultCount;
      },
      addSongToPlayList() {
        throw new Error('NotImplementedException');
        // TODO: add song to playlist here
      },
      async addAlbumToPlayList() {
        const albumInfo = await api.getAlbumTracks(this.collectionId, true);
        this.albumTracks = albumInfo.results;
        // TODO : ajouter toutes les chanson à la playlist ici
      }
    },
  };
</script>
