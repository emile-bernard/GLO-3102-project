<template>
  <div id="home-page-wrapper">
    <div class="home-page-background"></div>
    <div class="home-page-background second-background"></div>
    <div id="home-page-container">
      <div id="home-page-brand-name">Ubeat <i class="fas fa-music fa-2x"></i></div>
      <div id="home-page-flip-container-text">Listen to</div>
      <div id="home-page-flip-container">
        <div class="home-page-flip-element">Rock</div>
        <div class="home-page-flip-element">Rap</div>
        <div class="home-page-flip-element">Blues</div>
        <div class="home-page-flip-element">Jazz</div>
        <div class="home-page-flip-element">Dance</div>
        <div class="home-page-flip-element">Grunge</div>
      </div>
      <div id="home-page-button-container">
        <router-link class="button is-primary is-large" to="/artists">
          <p>Artist</p>
        </router-link>
        <router-link class="button is-primary is-large" to="/albums">
          <p>Album</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
  #home-page-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .home-page-background {
    animation: slide 6s infinite alternate;
    background-image: linear-gradient(-40deg, #22556E 50%, #4799B7 50%);
    top: 0;
    bottom: 0;
    left: -50%;
    right: -50%;
    opacity: .3;
    position: fixed;
    z-index: -1;
  }

  .second-background {
    animation-duration: 8s;
  }

  h1 {
    font-family: monospace;
  }

  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  }

  #home-page-container {
    height: 10%;
    color: #94CFC9;
    font-size: 60px;
    position: fixed;
    width: 100%;
    display: block;
    margin-top: 2em;
    border-radius: .25em;
    text-align: center;
  }

  #home-page-flip-container {
    overflow: hidden;
    color: #93eeff;
    height: 100%;
    display: block;
  }

  #home-page-flip-container-text {
    font-size: 3vw;
  }

  #home-page-flip-container div:first-child {
    animation: show 8s linear infinite;
  }

  @keyframes show {
    0% {
      margin-top: -270px;
    }
    5% {
      margin-top: -180px;
    }
    33% {
      margin-top: -180px;
    }
    38% {
      margin-top: -90px;
    }
    66% {
      margin-top: -90px;
    }
    71% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  }

  #home-page-button-container {
    padding: auto;
    margin-top: 1em;
    display: inline-list-item;
  }

  #home-page-button-container {
    padding: auto;
    margin-top: 1em;
    display: inline-list-item;
  }

  @media only screen and (max-device-width: 750px), (max-width: 750px) {
    #home-page-container {
      height: 10%;
      color: #94CFC9;
      font-size: 60px;
      font-weight: bold;
      position: fixed;
      width: 100%;
      display: block;
      margin-top: 2em;
    }

    #home-page-flip-container {
      overflow: hidden;
      color: #93eeff;
      height: 130%;
      display: block;
    }

    #home-page-flip-container-text {
      font-size: 40px;
    }
  }
</style>
