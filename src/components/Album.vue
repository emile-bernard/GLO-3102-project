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
    <!--comment exemple!!!-->
    <section class="hero">
        <div class="hero-body">
          <div id="album_container">
            <div class="AlbumCover">
              <a id="cover-link" href="https://itunes.apple.com/gb/album/ten%24ion/732912112" rel="nofollow">
                <img id="artist-image-album" src="https://bit.ly/2P2Lo1n" alt="artist-img"/>
                <div id="play-logo-container">
                  <a id="play-link" href="https://www.youtube.com/watch?v=GmwhBSh2rOs" rel="nofollow">
                    <i id="play-icon" class="far fa-play-circle fa-6x"></i>
                  </a>
                </div>
              </a>
             </div>
            <album-information></album-information>
          </div>
        </div>
      </section>
    <div class="album-timeLine">Todo: timeline into another component</div>
  </section>
</template>

<style lang="scss">
  @import "~bulma/bulma.sass";
  @import "~bulmaswatch/superhero/bulmaswatch.scss";

  .hero-body {
    background-color: rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  #album_container {
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .AlbumCover {
    flex-wrap: wrap;
    max-width: 100vw;
    max-height: 100vh;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .AlbumCover:hover #artist-image-album {
    opacity: 0.2;
  }

 #cover-link {
    width: 100%;
    height: 100%;
    display: -webkit-inline-flex;
    justify-content: center;
    align-items: center;
  }

  #artist-image-album {
    position: relative;
    width: auto;
    height: auto;
  }

 #play-link {
    width: 100%;
    height: 100%;
    display: -webkit-inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  #play-logo-container {
    height: 100%;
    position: absolute;
    display: -webkit-inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  #play-icon {
    position: absolute;
    opacity: 1;
    z-index: 1;
  }

  .album-timeLine {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }
</style>

<script>
  import AlbumInformation from '@/components/AlbumInformation';

  export default {
    components: { 'album-information': AlbumInformation }
  };
</script>
