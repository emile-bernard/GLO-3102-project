<template>
  <div id="album-page-hero-body-layout">
    <album-cover
      v-bind:refLink="'https://itunes.apple.com/gb/album/ten%24ion/732912112'"
      v-bind:imgSrc="'https://bit.ly/2P2Lo1n'"
      v-bind:playRef="'https://www.youtube.com/watch?v=GmwhBSh2rOs'"
    ></album-cover>
    <div id="album-info">
      <h2 class="subtitle is-size-3">{{albumTitle}}</h2>
      <p>Genre: {{primaryGenreName}}</p>
      <p>Release: {{releaseDate}}</p>
      <p>Track count: {{trackCount}}</p>
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
      releaseDate: Date,
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
        const albumInfo = await api.getAlbumTracks(1125488753, true);
        this.albumTracks = albumInfo.results;
        this.resultsCount = albumInfo.resultCount;
      }
    },
  };
</script>
