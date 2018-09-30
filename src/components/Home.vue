<template>
  <div>
    <div class="background"></div>
    <div class="background second-background"></div>


    <div id="container">
      <div id="brand-name">Ubeat <i class="fas fa-music fa-2x"></i></div>
      <div id="flip-container-text">Listen to</div>
      <div id="flip-container">
        <div class="flip-element">Rock</div>
        <div class="flip-element">Rap</div>
        <div class="flip-element">Blues</div>
        <div class="flip-element">Jazz</div>
        <div class="flip-element">Dance</div>
        <div class="flip-element">Grunge</div>
      </div>

      <div id="button-container">
        <router-link class="button is-primary is-large" to="/artist">
          <p>Artist</p>
        </router-link>
        <router-link class="button is-primary is-large" to="/album">
          <p>Album</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
  .background {
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

  #container {
    height: 10%;
    color: #94CFC9;
    text-transform: uppercase;
    font-size: 5vw;
    font-weight: bold;
    position: fixed;
    width: 100%;
    display: block;
    margin: 1em;
    border-radius: .25em;
    text-align: center;
  }

  #flip-container {
    overflow: hidden;
    color: #93eeff;
    height: 100%;
    display: inline-block;
  }

    #flip-container-text {
      font-size: 3vw;
    }

  #flip-container div:first-child {
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

  #button-container {
    padding: auto;
    margin-top: 1em;
    display: inline-list-item;
  }

  @media only screen and (max-device-width: 750px) {
    #container {
      height: 10%;
      color: #94CFC9;
      text-transform: uppercase;
      font-size: 60px;
      font-weight: bold;
      position: fixed;
      width: 100%;
      display: block;
      margin: 0em;
    }
  }
</style>

<script>

</script>
