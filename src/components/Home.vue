<template>
  <div>
    <div id="container">
      <div id="brand-name">Ubeat</div>
      <br/>
      <div id="flip-container-text">Listen to</div>
      <div id="flip-container">
        <div class="flip-element">Rock</div>
        <div class="flip-element">Rap</div>
        <div class="flip-element">Blues</div>
        <div class="flip-element">Jazz</div>
        <div class="flip-element">Dance</div>
        <div class="flip-element">Grunge</div>
      </div>
    </div>
  </div>
</template>

<style>
  #container {
    height: 10%;
    color: #94CFC9;
    text-transform: uppercase;
    font-size: 60px;
    font-weight: bold;
    position: fixed;
    width: 100%;
    display: block;
    margin: 1em;
  }

  #flip-container {
    overflow: hidden;
    color: #93eeff;
    height: 100%;
    display: block;
  }

  #flip-container div:first-child {
    animation: show 5s linear infinite;
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
</style>

<script>

</script>
