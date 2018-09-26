<template>
  <section class="section">
    <p>UBeat > Artist > Savant (TODO: utiliser un component pour ça? et pourquoi n'avons nous pas une page de liste d'artistes?)</p>
    <div class="container">
      <h1 class="title">Artist: Savant</h1>

      <a href="https://www.apple.com/ca/itunes/link/" rel="nofollow">
        <img src="#" alt="Image"/>
      </a>
      <p>TODO: Image ici</p>
      <br/>

      <h2 class="subtitle">Genre: Savant</h2>

      <h2 class="subtitle">Albums:</h2>
      <div id="album-list">
        <p>TODO: flexbox et images ici:</p>
        <img src="#" alt="Some album"/>
        <img src="#" alt="Some album"/>
        <img src="#" alt="Some album"/>
        <img src="#" alt="Some album"/>
      </div>
      <br/>

    </div>
  </section>
</template>

<style>

  .album-list {
    flex: content;
    flex-wrap: wrap;
    flex-direction: column;
  }
</style>
