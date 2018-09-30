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
      <h1 class="title">Savant</h1>
      <h2 class="subtitle"><b>Genres:</b> Dance, Electronica, House, Pop, House, Electronic, Hardcore</h2>

      <section class="hero hero-parralax-bg">
        <div class="hero-body">

          <a href="https://www.apple.com/ca/itunes/link/">
            <img id="artist-img"
                 src="https://is3-ssl.mzstatic.com/image/thumb/Music19/v4/57/fb/61/57fb61dc-a5c9-7211-0a97-0204abaf4da6/source/570x570cc.png"
                 alt="Savant artist"
            />
          </a>
          <!-- TODO: potentially add this:
          <div class="hero-album">
            <div><h3>Most recent album: Savior - Single</h3>
              <p>Pop</p><a href="https://itunes.apple.com/us/album/savior-single/1423941730?uo=4"><img
                src="https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/b2/fe/ef/b2feefec-d096-2656-734f-3b3cf4850f76/source/100x100bb.jpg"></a>
              <p>℗ 2016 Vybz</p></div>
          </div>
          -->

        </div>
      </section>

      <br/>
      <h2 class="subtitle"><b>Albums</b></h2>
      <div id="album-list">
        <artist-album
          v-for="(album, index) in albums"
          v-bind:key="index"
          v-bind:title="album[0].title"
          v-bind:genre="album[1].genre"
          v-bind:refLink="album[2].refLink"
          v-bind:imgSrc="album[3].imgSrc"
          v-bind:copyright="album[4].copyright"
        ></artist-album>
      </div>
      <br/>
    </div>
  </section>
</template>

<style lang="scss">
  // TODO: clean imports?
  @import "~bulma/bulma.sass";
  @import "~bulmaswatch/superhero/bulmaswatch.scss";

  #album-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-content: flex-start;
    column-gap: 0;
  }

  #album-list .hero-album {
    background-color: rgba(0, 0, 0, 0.1);
    width: 200px;
    margin: 10px;
    padding: 10px;
    color: $grey-lighter;
  }

  #album-list .hero-album div img {
    width: 100%;
  }

  .hero-album {
    background-color: rgba(0, 0, 0, 0.7);
    width: 50%;
    min-width: 180px;
  }

  #artist-img {
    width: 50%;
    min-width: 180px;
  }

  .hero-body {
    background-color: rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
    column-gap: 0;
  }

  .hero-parralax-bg {
    overflow: auto;
    position: relative;
  }

  .hero-parralax-bg:before {
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
</style>

<script>
  import ArtistAlbum from './ArtistAlbum';

  export default {
    components: { ArtistAlbum },
    component: {
      'artist-album': ArtistAlbum,
    },
    data() {
      return {
        albums: [
          [{ title: 'Savior - Single' }, { genre: 'Pop' }, { refLink: 'https://itunes.apple.com/us/album/savior-single/1423941730?uo=4' }, { imgSrc: 'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/b2/fe/ef/b2feefec-d096-2656-734f-3b3cf4850f76/source/100x100bb.jpg' }, { copyright: '℗ 2016 Vybz' }],
          [{ title: 'Invasion' }, { genre: 'Electronic' }, { refLink: 'https://itunes.apple.com/us/album/invasion/1420794820?uo=4' }, { imgSrc: 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/e5/ee/4c/e5ee4c35-a872-6ea2-0ca2-6ec9f50933b8/source/100x100bb.jpg' }, { copyright: '℗ 2015 SectionZ Records' }],
          [{ title: 'Overkill' }, { genre: 'Dance' }, { refLink: 'https://itunes.apple.com/us/album/overkill/1420778632?uo=4' }, { imgSrc: 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/c0/1d/2f/c01d2f4e-9b7a-8e64-1e09-6416860a8d92/source/100x100bb.jpg' }, { copyright: '℗ 2013 SectionZ Records' }],
          [{ title: 'Derby - Single' }, { genre: 'Hardcore' }, { refLink: 'https://itunes.apple.com/us/album/derby-single/887015070?uo=4' }, { imgSrc: 'https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/81/0a/09/810a0974-780b-cd0a-07c5-483a3d8b8b4e/source/100x100bb.jpg' }, { copyright: '℗ 2014 SectionZ, Inc.' }],
          [{ title: 'Protos' }, { genre: 'Pop' }, { refLink: 'https://itunes.apple.com/us/album/protos/1420799872?uo=4' }, { imgSrc: 'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/a5/a4/3a/a5a43af2-e21e-395d-9a25-6d08ad602cfd/source/100x100bb.jpg' }, { copyright: '℗ 2014 SectionZ Records' }],
          [{ title: 'Vybz' }, { genre: 'Electronic' }, { refLink: 'https://itunes.apple.com/us/album/vybz/1423943098?uo=4' }, { imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/7b/f1/29/7bf12931-c042-4150-2332-8aacb63794df/source/100x100bb.jpg' }, { copyright: '℗ 2016 Vybz' }],
          [{ title: 'Zion' }, { genre: 'Electronic' }, { refLink: 'https://itunes.apple.com/us/album/zion/1420795815?uo=4' }, { imgSrc: 'https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/92/45/e5/9245e50a-241a-1f7d-27d4-e85b7517c7ff/source/100x100bb.jpg' }, { copyright: '℗ 2014 SectionZ Records' }],
          [{ title: 'Outcasts (UNRELEASED)' }, { genre: 'Electronic' }, { refLink: 'https://itunes.apple.com/us/album/outcasts-unreleased/1423944594?uo=4' }, { imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/bc/75/b4/bc75b44f-aaf1-1199-d861-e60091f5d748/source/100x100bb.jpg' }, { copyright: '℗ 2016 Vybz' }],
          [{ title: 'Overkill' }, { genre: 'House' }, { refLink: 'https://itunes.apple.com/us/album/overkill/672257666?uo=4' }, { imgSrc: 'https://is3-ssl.mzstatic.com/image/thumb/Music6/v4/53/68/1d/53681d9f-a0fc-1dde-af65-3a3461a7d683/source/100x100bb.jpg' }, { copyright: '℗ 2013 Savant Love, LLC.' }],
          [{ title: 'Protos' }, { genre: 'Pop' }, { refLink: 'https://itunes.apple.com/us/album/protos/897844899?uo=4' }, { imgSrc: 'https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/1a/b9/4e/1ab94eba-f343-0fce-cf6d-6ffaffdb3688/source/100x100bb.jpg' }, { copyright: '℗ 2014 SectionZ, Inc.' }],
          [{ title: 'Overworld' }, { genre: 'Dance' }, { refLink: 'https://itunes.apple.com/us/album/overworld/533040114?uo=4' }, { imgSrc: 'https://is3-ssl.mzstatic.com/image/thumb/Music/v4/41/be/09/41be090c-9ae6-5341-0326-124554b48646/source/100x100bb.jpg' }, { copyright: '℗ 2012 Aleksander Vinter' }],
          [{ title: 'Zion' }, { genre: 'Dance' }, { refLink: 'https://itunes.apple.com/us/album/zion/937758778?uo=4' }, { imgSrc: 'https://is4-ssl.mzstatic.com/image/thumb/Music1/v4/5f/3a/cc/5f3acc50-bbae-6806-1780-0bed3c35a21f/source/100x100bb.jpg' }, { copyright: '℗ 2014 SectionZ, Inc.' }],
          [{ title: 'Orakel' }, { genre: 'House' }, { refLink: 'https://itunes.apple.com/us/album/orakel/768684597?uo=4' }, { imgSrc: 'https://is4-ssl.mzstatic.com/image/thumb/Music/v4/70/a4/b6/70a4b6f8-1ea4-52fc-6230-5fd115f528b9/source/100x100bb.jpg' }, { copyright: '℗ 2013 Savant Love, LLC - under exclusive license to Universal Music AS, Norway' }],
          [{ title: 'Invasion' }, { genre: 'Electronica' }, { refLink: 'https://itunes.apple.com/us/album/invasion/961741240?uo=4' }, { imgSrc: 'https://is4-ssl.mzstatic.com/image/thumb/Music3/v4/b3/36/fe/b336fe69-8be7-0692-a1e5-2ad5a653eb6b/source/100x100bb.jpg' }, { copyright: '℗ 2015 SectionZ, Inc.' }],
          [{ title: 'Vario' }, { genre: 'Dance' }, { refLink: 'https://itunes.apple.com/us/album/vario/501943616?uo=4' }, { imgSrc: 'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/b0/00/ba/b000ba0f-5792-b5db-8157-ea8fd2469460/source/100x100bb.jpg' }, { copyright: '℗ 2012 Aleksander Vinter' }],
          [{ title: 'ISM' }, { genre: 'Dance' }, { refLink: 'https://itunes.apple.com/us/album/ism/560448869?uo=4' }, { imgSrc: 'https://is4-ssl.mzstatic.com/image/thumb/Music/v4/17/af/61/17af6170-bd90-bd00-b1ab-6c5d1ea07a0f/source/100x100bb.jpg' }, { copyright: '℗ 2012 SectionZ Records' }],
          [{ title: 'Alchemist' }, { genre: 'Dance' }, { refLink: 'https://itunes.apple.com/us/album/alchemist/578643761?uo=4' }, { imgSrc: 'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/a2/ed/20/a2ed2016-acf9-1fec-0111-e247248d012b/source/100x100bb.jpg' }, { copyright: '℗ 2012 SectionZ Records' }]
        ],
      };
    }
  };
</script>
