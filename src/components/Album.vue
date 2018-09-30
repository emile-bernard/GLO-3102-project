<template>
  <section class="section">
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link to="/album"><span>Album</span></router-link>
      <span> > </span>
      <router-link to="/album"><span>Die Antword</span></router-link>
    </p>
    <br/>
    <h1 class="title">Die Antword</h1>
    <section class="hero hero-parralax-bg">
      <div class="hero-body">
        <div id="album-container">
          <album-cover
            v-bind:refLink="'https://itunes.apple.com/gb/album/ten%24ion/732912112'"
            v-bind:imgSrc="'https://bit.ly/2P2Lo1n'"
            v-bind:playRef="'https://www.youtube.com/watch?v=GmwhBSh2rOs'"
          ></album-cover>
          <album-information></album-information>
        </div>
      </div>
    </section>
    <!--Todo: timeline into another component-->
  </section>
</template>

<style lang="scss">
  @import "~bulma/bulma.sass";
  @import "~bulmaswatch/superhero/bulmaswatch.scss";

  .hero-parralax-bg {
    overflow: auto;
    position: relative;
  }

  .hero-parralax-bg:before {
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
  }

  #album-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>

<script>
  import AlbumCover from '@/components/AlbumCover';
  import AlbumInformation from '@/components/AlbumInformation';

  export default {
    components: {
      'album-cover': AlbumCover,
      'album-information': AlbumInformation }
  };
</script>
