<template>
  <div class="album-cover">
    <a id="album-cover-link" :href=refLink rel="nofollow">
      <img id="album-cover-image" :src=imgSrc alt="artist-img"/>
      <div id="album-cover-play-logo-container">
        <a id="album-cover-play-link" :href=playRef rel="nofollow">
          <i id="album-cover-play-icon" class="far fa-play-circle fa-6x"></i>
        </a>
      </div>
    </a>
  </div>
</template>

<style>
  .album-cover {
    flex-wrap: wrap;
    max-width: 100vw;
    max-height: 100vh;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .album-cover:hover #album-cover-image {
    opacity: 0.8;
  }

  #album-cover-link {
    width: 100%;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  #album-cover-image {
    position: relative;
    width: auto;
    height: auto;
  }

  #album-cover-play-logo-container {
    height: 100%;
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  #album-cover-play-link {
    width: 100%;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  #album-cover-play-icon {
    position: absolute;
    opacity: 1;
    z-index: 1;
  }
</style>

<script>
  export default {
    props: ['refLink', 'imgSrc', 'playRef']
  };
</script>
