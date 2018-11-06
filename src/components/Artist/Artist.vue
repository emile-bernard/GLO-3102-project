<template>
  <section class="section">
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link to="/artist"><span>Artist</span></router-link>
      <span> > </span>
      <router-link to="/artist"><span>Savant</span></router-link>
      <!--  TODO: artist ID in breadcrum link -->
    </p>
    <br/>
    <div class="container">
      <h1 class="title is-size-2">Savant</h1>
      <h2 class="subtitle is-size-3"><b>Genres:</b> Dance, Electronica, House, Pop, House, Electronic, Hardcore</h2>
      <section id="artist-hero-parralax-bg" class="hero hero-parralax-bg">
        <div class="hero-body">
          <artist-image
            v-bind:refLink="'https://www.apple.com/ca/itunes/link/'"
            v-bind:imgSrc="'https://is3-ssl.mzstatic.com/image/thumb/Music19/v4/57/fb/61/57fb61dc-a5c9-7211-0a97-0204abaf4da6/source/570x570cc.png'"
          ></artist-image>
          <artist-most-recent-album
            v-bind:title="'Savior - Single'"
            v-bind:genre="'Pop'"
            v-bind:refLink="'https://itunes.apple.com/us/album/savior-single/1423941730?uo=4'"
            v-bind:imgSrc="'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/b2/fe/ef/b2feefec-d096-2656-734f-3b3cf4850f76/source/100x100bb.jpg'"
            v-bind:copyright="'℗ 2016 Vybz'"
          ></artist-most-recent-album>
        </div>
      </section>
      <br/>
      <artist-album-list></artist-album-list>
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
    background: url('https://is3-ssl.mzstatic.com/image/thumb/Music19/v4/57/fb/61/57fb61dc-a5c9-7211-0a97-0204abaf4da6/source/570x570cc.png') no-repeat center center fixed;
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
  import ArtistImage from './ArtistImage';
  import ArtistMostRecentAlbum from './ArtistMostRecentAlbum';
  import ArtistAlbumList from './ArtistAlbumList';

  export default {
    components: {
      'artist-image': ArtistImage,
      'artist-most-recent-album': ArtistMostRecentAlbum,
      'artist-album-list': ArtistAlbumList,
    }
  };
</script>
