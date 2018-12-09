<template>
  <div id="album-page-hero-body-layout">
    <div id="album-info">
      <div id="top-information">
        <album-cover
          v-bind:refLink=artistViewUrl
          v-bind:imgSrc=artWorkUrl100>
        </album-cover>
        <div id="album-description">
          <p>Genre: {{primaryGenreName}}</p>
          <p>Release: {{releaseDate.toLocaleDateString()}}</p>
          <p>Track count: {{trackCount}}</p>
        </div>
      </div>
      <div id="button-add-album">
        <button class="button is-rounded is-success" v-on:click="addAlbumToPlayList"> Add album to playlist</button>
      </div>
      <div id="album-info-songs">
        <album-track
          v-for="song in albumTracks"
          v-bind:key="song.trackId"
          v-bind:trackId.sync="song.trackId"
          v-bind:trackName.sync="song.trackName"
          v-bind:previewUrl.sync="song.previewUrl"
          v-bind:trackNumber.sync="song.trackNumber"
          v-bind:trackTimeMillis.sync="song.trackTimeMillis"
          v-bind:currentlyPlaying="activeSong"
          v-on:add-to-playlist="addSongToPlayList"
          v-on:playing-song="muteIfNotActiveSong"
        ></album-track>
      </div>
    </div>
    <playlist-choice
      v-if="isPlaylistChoiceActive"
      v-bind:isActive="isPlaylistChoiceActive"
      v-bind:trackIds="trackIds"
      v-on:close-playlist-modal="closePlaylistModal"
    ></playlist-choice>
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
    color: #dee5ed;
    padding: 40px;
  }

  #top-information {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #dee5ed;
  }

  #album-description {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
    color: #dee5ed;
    padding: 10px;
  }

  #button-add-album {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
    color: #dee5ed;
    padding: 10px;
  }

  #album-info-songs {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>

<script>
  /* eslint-disable quote-props */
  import * as api from '@/Api';
  import AlbumCover from '@/components/Album/AlbumCover';
  import PlaylistChoice from '@/components/Playlist/PlaylistChoice';
  import Track from '@/components/Album/AlbumTrack';

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
        activeSong: undefined,
        releaseDate: new Date(this.releaseDateString),
        resultsCount: 0,
        albumTracks: [],
        isPlaylistChoiceActive: false,
        trackIds: [],
      };
    },
    components: {
      'album-track': Track,
      'album-cover': AlbumCover,
      'playlist-choice': PlaylistChoice,
    },
    created() {
      this.create();
    },
    methods: {
      async getAlbum(albumId) {
        const albumTrack = await api.getAlbumTracks(albumId, false);
        if (typeof (albumTrack.errorCode) === 'undefined') {
          this.albumTracks = albumTrack;
        }
      },
      create() {
        this.init();
      },
      muteIfNotActiveSong(trackId) {
        this.activeSong = trackId;
      },
      addSongToPlayList(trackId) {
        this.trackIds = [trackId];
        this.isPlaylistChoiceActive = true;
      },
      addAlbumToPlayList() {
        this.trackIds = [];
        for (let i = 0; i < this.albumTracks.length; i += 1) {
          const track = this.albumTracks[i];
          this.trackIds.push(track.trackId);
        }
        this.isPlaylistChoiceActive = true;
      },
      closePlaylistModal() {
        this.isPlaylistChoiceActive = false;
      },
      async init() {
        await api.getAlbumTracks(this.collectionId, false)
          .then((response) => {
            if (typeof (response.errorCode) === 'undefined') {
              this.setInfo(response);
            }
          });
      },
      setInfo(albumInfo) {
        this.albumTracks = albumInfo.results;
        this.resultsCount = albumInfo.resultCount;
      }
    },
  };

</script>
