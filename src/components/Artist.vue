<template>
  <section class="section">
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link to="/artist"><span>Artist</span></router-link>
      <span> > </span>
      <router-link to="/artist"><span>Savant</span></router-link>
    </p>
    <!--  (TODO: utiliser un component pour ça? et pourquoi n'avons nous pas une page de liste d'artistes?) -->
    <br/>
    <div class="container">
      <h1 class="title">Artist: Savant</h1>

      <section class="hero">
        <div class="hero-body">
          <a href="https://www.apple.com/ca/itunes/link/" rel="nofollow">
            <img id="artist-img" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                 alt="artist-img"/>
            <!-- Source:              https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg -->
          </a>
          <p>TODO: Image ici</p>
        </div>
      </section>

      <br/>

      <h2 class="subtitle">Genre: Savant</h2>

      <h2 class="subtitle">Albums:</h2>
      <div id="album-list">
        <!--  <p>TODO: flexbox et images ici:</p> -->
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
  #artist-img {
    width: 50%;
    min-width: 250px;
  }

  #album-list {
    flex: content;
    flex-wrap: wrap;
    flex-direction: column;
  }
</style>
