<template>
  <section class="section">
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link to="/artist"><span>Artist</span></router-link>
      <span> > </span>
      <router-link to="/artist"><span>Savant</span></router-link>
      <!--  (TODO: artist ID in breadcrum link) -->
    </p>
    <br/>
    <div class="container">
      <h1 class="title">Artist: Savant</h1>
      <h2 class="subtitle">Genres: Dance, Electronica, House, Pop, House, Electronic, Hardcore</h2>

      <section class="hero">
        <div class="hero-body">

          <a href="https://www.apple.com/ca/itunes/link/">
            <img id="artist-img"
                 src="https://is3-ssl.mzstatic.com/image/thumb/Music19/v4/57/fb/61/57fb61dc-a5c9-7211-0a97-0204abaf4da6/source/570x570cc.png"
                 alt="Savant artist"
            />
          </a>

        </div>
      </section>

      <br/>
      <h2 class="subtitle">Albums:</h2>
      <div id="album-list">

        <div class="album">
          <div><h3>Alchemist</h3>
            <p>Dance</p><a href="https://itunes.apple.com/us/album/alchemist/578643761?uo=4"><img
              src="https://is2-ssl.mzstatic.com/image/thumb/Music/v4/a2/ed/20/a2ed2016-acf9-1fec-0111-e247248d012b/source/100x100bb.jpg"></a>
            <p>℗ 2012 SectionZ Records</p></div>
        </div>
        <div class="album">
          <div><h3>ISM</h3>
            <p>Dance</p><a href="https://itunes.apple.com/us/album/ism/560448869?uo=4"><img
              src="https://is4-ssl.mzstatic.com/image/thumb/Music/v4/17/af/61/17af6170-bd90-bd00-b1ab-6c5d1ea07a0f/source/100x100bb.jpg"></a>
            <p>℗ 2012 SectionZ Records</p></div>
        </div>
        <div class="album">
          <div><h3>Vario</h3>
            <p>Dance</p><a href="https://itunes.apple.com/us/album/vario/501943616?uo=4"><img
              src="https://is2-ssl.mzstatic.com/image/thumb/Music/v4/b0/00/ba/b000ba0f-5792-b5db-8157-ea8fd2469460/source/100x100bb.jpg"></a>
            <p>℗ 2012 Aleksander Vinter</p></div>
        </div>
        <div class="album">
          <div><h3>Invasion</h3>
            <p>Electronica</p><a href="https://itunes.apple.com/us/album/invasion/961741240?uo=4"><img
              src="https://is4-ssl.mzstatic.com/image/thumb/Music3/v4/b3/36/fe/b336fe69-8be7-0692-a1e5-2ad5a653eb6b/source/100x100bb.jpg"></a>
            <p>℗ 2015 SectionZ, Inc.</p></div>
        </div>
        <div class="album">
          <div><h3>Orakel</h3>
            <p>House</p><a href="https://itunes.apple.com/us/album/orakel/768684597?uo=4"><img
              src="https://is4-ssl.mzstatic.com/image/thumb/Music/v4/70/a4/b6/70a4b6f8-1ea4-52fc-6230-5fd115f528b9/source/100x100bb.jpg"></a>
            <p>℗ 2013 Savant Love, LLC - under exclusive license to Universal Music AS, Norway</p></div>
        </div>
        <div class="album">
          <div><h3>Zion</h3>
            <p>Dance</p><a href="https://itunes.apple.com/us/album/zion/937758778?uo=4"><img
              src="https://is4-ssl.mzstatic.com/image/thumb/Music1/v4/5f/3a/cc/5f3acc50-bbae-6806-1780-0bed3c35a21f/source/100x100bb.jpg"></a>
            <p>℗ 2014 SectionZ, Inc.</p></div>
        </div>
        <div class="album">
          <div><h3>Overworld</h3>
            <p>Dance</p><a href="https://itunes.apple.com/us/album/overworld/533040114?uo=4"><img
              src="https://is3-ssl.mzstatic.com/image/thumb/Music/v4/41/be/09/41be090c-9ae6-5341-0326-124554b48646/source/100x100bb.jpg"></a>
            <p>℗ 2012 Aleksander Vinter</p></div>
        </div>
        <div class="album">
          <div><h3>Protos</h3>
            <p>Pop</p><a href="https://itunes.apple.com/us/album/protos/897844899?uo=4"><img
              src="https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/1a/b9/4e/1ab94eba-f343-0fce-cf6d-6ffaffdb3688/source/100x100bb.jpg"></a>
            <p>℗ 2014 SectionZ, Inc.</p></div>
        </div>
        <div class="album">
          <div><h3>Overkill</h3>
            <p>House</p><a href="https://itunes.apple.com/us/album/overkill/672257666?uo=4"><img
              src="https://is3-ssl.mzstatic.com/image/thumb/Music6/v4/53/68/1d/53681d9f-a0fc-1dde-af65-3a3461a7d683/source/100x100bb.jpg"></a>
            <p>℗ 2013 Savant Love, LLC.</p></div>
        </div>
        <div class="album">
          <div><h3>Outcasts (UNRELEASED)</h3>
            <p>Electronic</p><a href="https://itunes.apple.com/us/album/outcasts-unreleased/1423944594?uo=4"><img
              src="https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/bc/75/b4/bc75b44f-aaf1-1199-d861-e60091f5d748/source/100x100bb.jpg"></a>
            <p>℗ 2016 Vybz</p></div>
        </div>
        <div class="album">
          <div><h3>Zion</h3>
            <p>Electronic</p><a href="https://itunes.apple.com/us/album/zion/1420795815?uo=4"><img
              src="https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/92/45/e5/9245e50a-241a-1f7d-27d4-e85b7517c7ff/source/100x100bb.jpg"></a>
            <p>℗ 2014 SectionZ Records</p></div>
        </div>
        <div class="album">
          <div><h3>Vybz</h3>
            <p>Electronic</p><a href="https://itunes.apple.com/us/album/vybz/1423943098?uo=4"><img
              src="https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/7b/f1/29/7bf12931-c042-4150-2332-8aacb63794df/source/100x100bb.jpg"></a>
            <p>℗ 2016 Vybz</p></div>
        </div>
        <div class="album">
          <div><h3>Protos</h3>
            <p>Pop</p><a href="https://itunes.apple.com/us/album/protos/1420799872?uo=4"><img
              src="https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/a5/a4/3a/a5a43af2-e21e-395d-9a25-6d08ad602cfd/source/100x100bb.jpg"></a>
            <p>℗ 2014 SectionZ Records</p></div>
        </div>
        <div class="album">
          <div><h3>Derby - Single</h3>
            <p>Hardcore</p><a href="https://itunes.apple.com/us/album/derby-single/887015070?uo=4"><img
              src="https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/81/0a/09/810a0974-780b-cd0a-07c5-483a3d8b8b4e/source/100x100bb.jpg"></a>
            <p>℗ 2014 SectionZ, Inc.</p></div>
        </div>
        <div class="album">
          <div><h3>Overkill</h3>
            <p>Dance</p><a href="https://itunes.apple.com/us/album/overkill/1420778632?uo=4"><img
              src="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/c0/1d/2f/c01d2f4e-9b7a-8e64-1e09-6416860a8d92/source/100x100bb.jpg"></a>
            <p>℗ 2013 SectionZ Records</p></div>
        </div>
        <div class="album">
          <div><h3>Invasion</h3>
            <p>Electronic</p><a href="https://itunes.apple.com/us/album/invasion/1420794820?uo=4"><img
              src="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/e5/ee/4c/e5ee4c35-a872-6ea2-0ca2-6ec9f50933b8/source/100x100bb.jpg"></a>
            <p>℗ 2015 SectionZ Records</p></div>
        </div>
        <div class="album">
          <div><h3>Savior - Single</h3>
            <p>Pop</p><a href="https://itunes.apple.com/us/album/savior-single/1423941730?uo=4"><img
              src="https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/b2/fe/ef/b2feefec-d096-2656-734f-3b3cf4850f76/source/100x100bb.jpg"></a>
            <p>℗ 2016 Vybz</p></div>
        </div>
      </div>
      <br/>

      <!-- TODO: learn how to use Vue templates to redo this:
      <script>

        // const albums = http://ubeat.herokuapp.com/unsecure/artists/301490824/albums
        const albums = {
          resultCount: 34,
          results: [
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 578643761,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Alchemist',
              collectionCensoredName: 'Alchemist',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/alchemist/578643761?uo=4',
              artworkUrl60: 'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/a2/ed/20/a2ed2016-acf9-1fec-0111-e247248d012b/source/60x60bb.jpg',
              artworkUrl100: 'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/a2/ed/20/a2ed2016-acf9-1fec-0111-e247248d012b/source/100x100bb.jpg',
              collectionPrice: 9.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 22,
              copyright: '℗ 2012 SectionZ Records',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2012-12-12T08:00:00Z',
              primaryGenreName: 'Dance'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 560448869,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'ISM',
              collectionCensoredName: 'ISM',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/ism/560448869?uo=4',
              artworkUrl60: 'https://is4-ssl.mzstatic.com/image/thumb/Music/v4/17/af/61/17af6170-bd90-bd00-b1ab-6c5d1ea07a0f/source/60x60bb.jpg',
              artworkUrl100: 'https://is4-ssl.mzstatic.com/image/thumb/Music/v4/17/af/61/17af6170-bd90-bd00-b1ab-6c5d1ea07a0f/source/100x100bb.jpg',
              collectionPrice: 9.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 13,
              copyright: '℗ 2012 SectionZ Records',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2012-10-07T07:00:00Z',
              primaryGenreName: 'Dance'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 501943616,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Vario',
              collectionCensoredName: 'Vario',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/vario/501943616?uo=4',
              artworkUrl60: 'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/b0/00/ba/b000ba0f-5792-b5db-8157-ea8fd2469460/source/60x60bb.jpg',
              artworkUrl100: 'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/b0/00/ba/b000ba0f-5792-b5db-8157-ea8fd2469460/source/100x100bb.jpg',
              collectionPrice: 9.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 16,
              copyright: '℗ 2012 Aleksander Vinter',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2012-03-21T07:00:00Z',
              primaryGenreName: 'Dance'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 961741240,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Invasion',
              collectionCensoredName: 'Invasion',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/invasion/961741240?uo=4',
              artworkUrl60: 'https://is4-ssl.mzstatic.com/image/thumb/Music3/v4/b3/36/fe/b336fe69-8be7-0692-a1e5-2ad5a653eb6b/source/60x60bb.jpg',
              artworkUrl100: 'https://is4-ssl.mzstatic.com/image/thumb/Music3/v4/b3/36/fe/b336fe69-8be7-0692-a1e5-2ad5a653eb6b/source/100x100bb.jpg',
              collectionPrice: 4.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 18,
              copyright: '℗ 2015 SectionZ, Inc.',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2015-02-09T08:00:00Z',
              primaryGenreName: 'Electronica'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 768684597,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Orakel',
              collectionCensoredName: 'Orakel',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/orakel/768684597?uo=4',
              artworkUrl60: 'https://is4-ssl.mzstatic.com/image/thumb/Music/v4/70/a4/b6/70a4b6f8-1ea4-52fc-6230-5fd115f528b9/source/60x60bb.jpg',
              artworkUrl100: 'https://is4-ssl.mzstatic.com/image/thumb/Music/v4/70/a4/b6/70a4b6f8-1ea4-52fc-6230-5fd115f528b9/source/100x100bb.jpg',
              collectionPrice: 15.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 21,
              copyright: '℗ 2013 Savant Love, LLC - under exclusive license to Universal Music AS, Norway',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2013-12-11T08:00:00Z',
              primaryGenreName: 'House'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 937758778,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Zion',
              collectionCensoredName: 'Zion',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/zion/937758778?uo=4',
              artworkUrl60: 'https://is4-ssl.mzstatic.com/image/thumb/Music1/v4/5f/3a/cc/5f3acc50-bbae-6806-1780-0bed3c35a21f/source/60x60bb.jpg',
              artworkUrl100: 'https://is4-ssl.mzstatic.com/image/thumb/Music1/v4/5f/3a/cc/5f3acc50-bbae-6806-1780-0bed3c35a21f/source/100x100bb.jpg',
              collectionPrice: 14.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 16,
              copyright: '℗ 2014 SectionZ, Inc.',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2014-12-13T08:00:00Z',
              primaryGenreName: 'Dance'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 533040114,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Overworld',
              collectionCensoredName: 'Overworld',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/overworld/533040114?uo=4',
              artworkUrl60: 'https://is3-ssl.mzstatic.com/image/thumb/Music/v4/41/be/09/41be090c-9ae6-5341-0326-124554b48646/source/60x60bb.jpg',
              artworkUrl100: 'https://is3-ssl.mzstatic.com/image/thumb/Music/v4/41/be/09/41be090c-9ae6-5341-0326-124554b48646/source/100x100bb.jpg',
              collectionPrice: 9.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 17,
              copyright: '℗ 2012 Aleksander Vinter',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2012-07-04T07:00:00Z',
              primaryGenreName: 'Dance'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 897844899,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Protos',
              collectionCensoredName: 'Protos',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/protos/897844899?uo=4',
              artworkUrl60: 'https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/1a/b9/4e/1ab94eba-f343-0fce-cf6d-6ffaffdb3688/source/60x60bb.jpg',
              artworkUrl100: 'https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/1a/b9/4e/1ab94eba-f343-0fce-cf6d-6ffaffdb3688/source/100x100bb.jpg',
              collectionPrice: 12.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 18,
              copyright: '℗ 2014 SectionZ, Inc.',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2014-08-08T07:00:00Z',
              primaryGenreName: 'Pop'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 611171346,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Heart',
              collectionCensoredName: 'Heart',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/heart/611171346?uo=4',
              artworkUrl60: 'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/02/61/fe/0261fe00-0da7-1592-a66d-defde5a546af/source/60x60bb.jpg',
              artworkUrl100: 'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/02/61/fe/0261fe00-0da7-1592-a66d-defde5a546af/source/100x100bb.jpg',
              collectionPrice: 5.99,
              collectionExplicitness: 'explicit',
              contentAdvisoryRating: 'Explicit',
              trackCount: 5,
              copyright: '℗ 2013 SectionZ Records',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2013-03-27T07:00:00Z',
              primaryGenreName: 'Dance'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 668733385,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Cult',
              collectionCensoredName: 'Cult',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/cult/668733385?uo=4',
              artworkUrl60: 'https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/0b/41/85/0b4185c2-e4f2-bce1-f43d-8c0f1e12a43f/source/60x60bb.jpg',
              artworkUrl100: 'https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/0b/41/85/0b4185c2-e4f2-bce1-f43d-8c0f1e12a43f/source/100x100bb.jpg',
              collectionPrice: 9.99,
              collectionExplicitness: 'explicit',
              contentAdvisoryRating: 'Explicit',
              trackCount: 10,
              copyright: '℗ 2013 Savant Love, LLC.',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2013-07-21T07:00:00Z',
              primaryGenreName: 'Dance'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 672257666,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Overkill',
              collectionCensoredName: 'Overkill',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/overkill/672257666?uo=4',
              artworkUrl60: 'https://is3-ssl.mzstatic.com/image/thumb/Music6/v4/53/68/1d/53681d9f-a0fc-1dde-af65-3a3461a7d683/source/60x60bb.jpg',
              artworkUrl100: 'https://is3-ssl.mzstatic.com/image/thumb/Music6/v4/53/68/1d/53681d9f-a0fc-1dde-af65-3a3461a7d683/source/100x100bb.jpg',
              collectionPrice: 9.99,
              collectionExplicitness: 'cleaned',
              contentAdvisoryRating: 'Clean',
              trackCount: 11,
              copyright: '℗ 2013 Savant Love, LLC.',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2013-03-13T07:00:00Z',
              primaryGenreName: 'House'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 1423944594,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Outcasts (UNRELEASED)',
              collectionCensoredName: 'Outcasts (UNRELEASED)',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/outcasts-unreleased/1423944594?uo=4',
              artworkUrl60: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/bc/75/b4/bc75b44f-aaf1-1199-d861-e60091f5d748/source/60x60bb.jpg',
              artworkUrl100: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/bc/75/b4/bc75b44f-aaf1-1199-d861-e60091f5d748/source/100x100bb.jpg',
              collectionPrice: 8.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 16,
              copyright: '℗ 2016 Vybz',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2016-10-21T07:00:00Z',
              primaryGenreName: 'Electronic'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 1423943602,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Outcasts (UNRELEASED 2)',
              collectionCensoredName: 'Outcasts (UNRELEASED 2)',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/outcasts-unreleased-2/1423943602?uo=4',
              artworkUrl60: 'https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/13/f1/7a/13f17a5e-ea55-f12f-8ba2-fce0afbfe6ce/source/60x60bb.jpg',
              artworkUrl100: 'https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/13/f1/7a/13f17a5e-ea55-f12f-8ba2-fce0afbfe6ce/source/100x100bb.jpg',
              collectionPrice: 8.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 15,
              copyright: '℗ 2016 Vybz',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2016-10-21T07:00:00Z',
              primaryGenreName: 'Electronic'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 1420795815,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Zion',
              collectionCensoredName: 'Zion',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/zion/1420795815?uo=4',
              artworkUrl60: 'https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/92/45/e5/9245e50a-241a-1f7d-27d4-e85b7517c7ff/source/60x60bb.jpg',
              artworkUrl100: 'https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/92/45/e5/9245e50a-241a-1f7d-27d4-e85b7517c7ff/source/100x100bb.jpg',
              collectionPrice: 8.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 16,
              copyright: '℗ 2014 SectionZ Records',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2014-12-13T08:00:00Z',
              primaryGenreName: 'Electronic'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 1423943098,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Vybz',
              collectionCensoredName: 'Vybz',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/vybz/1423943098?uo=4',
              artworkUrl60: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/7b/f1/29/7bf12931-c042-4150-2332-8aacb63794df/source/60x60bb.jpg',
              artworkUrl100: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/7b/f1/29/7bf12931-c042-4150-2332-8aacb63794df/source/100x100bb.jpg',
              collectionPrice: 8.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 16,
              copyright: '℗ 2016 Vybz',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2016-07-15T07:00:00Z',
              primaryGenreName: 'Electronic'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 1420799872,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Protos',
              collectionCensoredName: 'Protos',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/protos/1420799872?uo=4',
              artworkUrl60: 'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/a5/a4/3a/a5a43af2-e21e-395d-9a25-6d08ad602cfd/source/60x60bb.jpg',
              artworkUrl100: 'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/a5/a4/3a/a5a43af2-e21e-395d-9a25-6d08ad602cfd/source/100x100bb.jpg',
              collectionPrice: 8.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 18,
              copyright: '℗ 2014 SectionZ Records',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2014-08-08T07:00:00Z',
              primaryGenreName: 'Pop'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 331718838,
              collectionId: 691038782,
              artistName: 'Young Kcaz & Savant',
              collectionName: 'Sun and Moon',
              collectionCensoredName: 'Sun and Moon',
              artistViewUrl: 'https://itunes.apple.com/us/artist/young-kcaz/331718838?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/sun-and-moon/691038782?uo=4',
              artworkUrl60: 'https://is3-ssl.mzstatic.com/image/thumb/Music/v4/f7/21/a8/f721a8fb-1ada-8775-dc45-4005391da92e/source/60x60bb.jpg',
              artworkUrl100: 'https://is3-ssl.mzstatic.com/image/thumb/Music/v4/f7/21/a8/f721a8fb-1ada-8775-dc45-4005391da92e/source/100x100bb.jpg',
              collectionPrice: 9.99,
              collectionExplicitness: 'explicit',
              contentAdvisoryRating: 'Explicit',
              trackCount: 12,
              copyright: '℗ 2013 Zachary Mendoza and Timothy Olympio',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2013-08-06T07:00:00Z',
              primaryGenreName: 'Hip-Hop/Rap'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 472876811,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Ninur',
              collectionCensoredName: 'Ninur',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/ninur/472876811?uo=4',
              artworkUrl60: 'https://is4-ssl.mzstatic.com/image/thumb/Music/v4/26/3e/c3/263ec3d9-5a17-11c8-fbd3-d7442a2c97ac/source/60x60bb.jpg',
              artworkUrl100: 'https://is4-ssl.mzstatic.com/image/thumb/Music/v4/26/3e/c3/263ec3d9-5a17-11c8-fbd3-d7442a2c97ac/source/100x100bb.jpg',
              collectionPrice: 9.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 13,
              copyright: '℗ 2011 Aleksander Vinter',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2011-11-11T08:00:00Z',
              primaryGenreName: 'Dance'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 466180563,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Ninur - Single',
              collectionCensoredName: 'Ninur - Single',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/ninur-single/466180563?uo=4',
              artworkUrl60: 'https://is5-ssl.mzstatic.com/image/thumb/Music/v4/66/0e/47/660e476c-bfae-9aef-1a43-718bcefe0cf0/source/60x60bb.jpg',
              artworkUrl100: 'https://is5-ssl.mzstatic.com/image/thumb/Music/v4/66/0e/47/660e476c-bfae-9aef-1a43-718bcefe0cf0/source/100x100bb.jpg',
              collectionPrice: 1.29,
              collectionExplicitness: 'notExplicit',
              trackCount: 1,
              copyright: '℗ 2011 Alexsander Vinter',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2011-10-27T07:00:00Z',
              primaryGenreName: 'Dance'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 571118648,
              collectionId: 571118647,
              artistName: 'Axel Morris',
              collectionName: 'Licence to Chill 2012 (feat. Savant & Celina Svanberg) - Single',
              collectionCensoredName: 'Licence to Chill 2012 (feat. Savant & Celina Svanberg) - Single',
              artistViewUrl: 'https://itunes.apple.com/us/artist/axel-morris/571118648?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/licence-to-chill-2012-feat-savant-celina-svanberg-single/571118647?uo=4',
              artworkUrl60: 'https://is3-ssl.mzstatic.com/image/thumb/Music/v4/a6/09/17/a6091791-73e7-218c-f337-d6a989add427/source/60x60bb.jpg',
              artworkUrl100: 'https://is3-ssl.mzstatic.com/image/thumb/Music/v4/a6/09/17/a6091791-73e7-218c-f337-d6a989add427/source/100x100bb.jpg',
              collectionPrice: 0.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 1,
              copyright: '℗ 2012 Axel Morris',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2012-04-13T07:00:00Z',
              primaryGenreName: 'Dance'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 639116659,
              amgArtistId: 2900484,
              artistName: 'Savant, Jelo & Adam K',
              collectionName: 'Four Days - Single',
              collectionCensoredName: 'Four Days - Single',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/four-days-single/639116659?uo=4',
              artworkUrl60: 'https://is2-ssl.mzstatic.com/image/thumb/Music2/v4/06/9b/ce/069bcef6-569d-f6f7-68bf-f277eb549413/source/60x60bb.jpg',
              artworkUrl100: 'https://is2-ssl.mzstatic.com/image/thumb/Music2/v4/06/9b/ce/069bcef6-569d-f6f7-68bf-f277eb549413/source/100x100bb.jpg',
              collectionPrice: 2.58,
              collectionExplicitness: 'explicit',
              contentAdvisoryRating: 'Explicit',
              trackCount: 2,
              copyright: '℗ 2013 SectionZ Records',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2013-05-20T07:00:00Z',
              primaryGenreName: 'House'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 290687093,
              collectionId: 852534404,
              amgArtistId: 1038824,
              artistName: 'Rich Tycoon, Young Kcaz & Savant',
              collectionName: 'I\'m Chillin (Like Korbel) - Single',
              collectionCensoredName: 'I\'m Chillin (Like Korbel) - Single',
              artistViewUrl: 'https://itunes.apple.com/us/artist/rich-tycoon/290687093?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/im-chillin-like-korbel-single/852534404?uo=4',
              artworkUrl60: 'https://is2-ssl.mzstatic.com/image/thumb/Music4/v4/2e/08/8e/2e088e46-c103-84fc-db43-79d8642a5a51/source/60x60bb.jpg',
              artworkUrl100: 'https://is2-ssl.mzstatic.com/image/thumb/Music4/v4/2e/08/8e/2e088e46-c103-84fc-db43-79d8642a5a51/source/100x100bb.jpg',
              collectionPrice: 0.99,
              collectionExplicitness: 'explicit',
              contentAdvisoryRating: 'Explicit',
              trackCount: 1,
              copyright: '℗ 2014 Richie Hampton',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2014-03-28T07:00:00Z',
              primaryGenreName: 'Hip-Hop/Rap'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 887015070,
              amgArtistId: 2900484,
              artistName: 'Savant & Jelo',
              collectionName: 'Derby - Single',
              collectionCensoredName: 'Derby - Single',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/derby-single/887015070?uo=4',
              artworkUrl60: 'https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/81/0a/09/810a0974-780b-cd0a-07c5-483a3d8b8b4e/source/60x60bb.jpg',
              artworkUrl100: 'https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/81/0a/09/810a0974-780b-cd0a-07c5-483a3d8b8b4e/source/100x100bb.jpg',
              collectionPrice: 1.29,
              collectionExplicitness: 'notExplicit',
              trackCount: 1,
              copyright: '℗ 2014 SectionZ, Inc.',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2014-07-07T07:00:00Z',
              primaryGenreName: 'Hardcore'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 954836383,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Mov\'n (Gun\'n) [feat. Bo Dixon] - Single',
              collectionCensoredName: 'Mov\'n (Gun\'n) [feat. Bo Dixon] - Single',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/movn-gunn-feat-bo-dixon-single/954836383?uo=4',
              artworkUrl60: 'https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/a3/fa/80/a3fa80e7-dcfb-7ca4-e763-61a9191495e2/source/60x60bb.jpg',
              artworkUrl100: 'https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/a3/fa/80/a3fa80e7-dcfb-7ca4-e763-61a9191495e2/source/100x100bb.jpg',
              collectionPrice: 0.99,
              collectionExplicitness: 'explicit',
              contentAdvisoryRating: 'Explicit',
              trackCount: 1,
              copyright: '℗ 2014 Savant',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2014-12-11T08:00:00Z',
              primaryGenreName: 'Hip-Hop/Rap'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 987509545,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Up N\' Smoke - Single',
              collectionCensoredName: 'Up N\' Smoke - Single',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/up-n-smoke-single/987509545?uo=4',
              artworkUrl60: 'https://is2-ssl.mzstatic.com/image/thumb/Music7/v4/b0/3c/d6/b03cd695-c3ad-90f1-a9b6-663ea8c1e0af/source/60x60bb.jpg',
              artworkUrl100: 'https://is2-ssl.mzstatic.com/image/thumb/Music7/v4/b0/3c/d6/b03cd695-c3ad-90f1-a9b6-663ea8c1e0af/source/100x100bb.jpg',
              collectionPrice: 1.29,
              collectionExplicitness: 'notExplicit',
              trackCount: 1,
              copyright: '℗ 2015 SectionZ Inc.',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2015-04-23T07:00:00Z',
              primaryGenreName: 'Dance'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 135710,
              collectionId: 1124685688,
              amgArtistId: 68246,
              artistName: 'DMX & Savant',
              collectionName: 'Get It Get It (feat. Snoop Dogg) - Single',
              collectionCensoredName: 'Get It Get It (feat. Snoop Dogg) - Single',
              artistViewUrl: 'https://itunes.apple.com/us/artist/dmx/135710?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/get-it-get-it-feat-snoop-dogg-single/1124685688?uo=4',
              artworkUrl60: 'https://is4-ssl.mzstatic.com/image/thumb/Music18/v4/da/92/0d/da920da8-e6e1-2312-5e70-4d6c6734ac4b/source/60x60bb.jpg',
              artworkUrl100: 'https://is4-ssl.mzstatic.com/image/thumb/Music18/v4/da/92/0d/da920da8-e6e1-2312-5e70-4d6c6734ac4b/source/100x100bb.jpg',
              collectionPrice: 1.29,
              collectionExplicitness: 'notExplicit',
              trackCount: 1,
              copyright: '℗ 2016 X-Ray Records, a division of Cleopatra Records, Inc.',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2016-07-01T07:00:00Z',
              primaryGenreName: 'Hip-Hop/Rap'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 1404177033,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Sweet Tooth - Single',
              collectionCensoredName: 'Sweet Tooth - Single',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/sweet-tooth-single/1404177033?uo=4',
              artworkUrl60: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5c/37/af/5c37af9a-1aef-70e0-b1d0-7b0f546f7062/source/60x60bb.jpg',
              artworkUrl100: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5c/37/af/5c37af9a-1aef-70e0-b1d0-7b0f546f7062/source/100x100bb.jpg',
              collectionPrice: 0.99,
              collectionExplicitness: 'explicit',
              contentAdvisoryRating: 'Explicit',
              trackCount: 1,
              copyright: '℗ 2018 Savant',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2018-07-06T07:00:00Z',
              primaryGenreName: 'Hip-Hop/Rap'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 1420778632,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Overkill',
              collectionCensoredName: 'Overkill',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/overkill/1420778632?uo=4',
              artworkUrl60: 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/c0/1d/2f/c01d2f4e-9b7a-8e64-1e09-6416860a8d92/source/60x60bb.jpg',
              artworkUrl100: 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/c0/1d/2f/c01d2f4e-9b7a-8e64-1e09-6416860a8d92/source/100x100bb.jpg',
              collectionPrice: 8.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 11,
              copyright: '℗ 2013 SectionZ Records',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2013-03-13T07:00:00Z',
              primaryGenreName: 'Dance'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 1420794425,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Ninur - Single',
              collectionCensoredName: 'Ninur - Single',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/ninur-single/1420794425?uo=4',
              artworkUrl60: 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/77/35/49/77354913-9819-f32d-dbda-c811abe4676a/source/60x60bb.jpg',
              artworkUrl100: 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/77/35/49/77354913-9819-f32d-dbda-c811abe4676a/source/100x100bb.jpg',
              collectionPrice: 0.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 1,
              copyright: '℗ 2011 SectionZ Records',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2011-10-13T07:00:00Z',
              primaryGenreName: 'Electronic'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 1420794820,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Invasion',
              collectionCensoredName: 'Invasion',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/invasion/1420794820?uo=4',
              artworkUrl60: 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/e5/ee/4c/e5ee4c35-a872-6ea2-0ca2-6ec9f50933b8/source/60x60bb.jpg',
              artworkUrl100: 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/e5/ee/4c/e5ee4c35-a872-6ea2-0ca2-6ec9f50933b8/source/100x100bb.jpg',
              collectionPrice: 8.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 18,
              copyright: '℗ 2015 SectionZ Records',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2015-02-09T08:00:00Z',
              primaryGenreName: 'Electronic'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 1420799168,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Ninur',
              collectionCensoredName: 'Ninur',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/ninur/1420799168?uo=4',
              artworkUrl60: 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/35/00/26/3500260f-4c1b-12f2-908a-88e3f2befece/source/60x60bb.jpg',
              artworkUrl100: 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/35/00/26/3500260f-4c1b-12f2-908a-88e3f2befece/source/100x100bb.jpg',
              collectionPrice: 8.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 13,
              copyright: '℗ 2011 SectionZ Records',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2011-11-11T08:00:00Z',
              primaryGenreName: 'Electronic'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 1423941730,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Savior - Single',
              collectionCensoredName: 'Savior - Single',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/savior-single/1423941730?uo=4',
              artworkUrl60: 'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/b2/fe/ef/b2feefec-d096-2656-734f-3b3cf4850f76/source/60x60bb.jpg',
              artworkUrl100: 'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/b2/fe/ef/b2feefec-d096-2656-734f-3b3cf4850f76/source/100x100bb.jpg',
              collectionPrice: 1.98,
              collectionExplicitness: 'notExplicit',
              trackCount: 2,
              copyright: '℗ 2016 Vybz',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2016-03-18T07:00:00Z',
              primaryGenreName: 'Pop'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 1423942647,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'Forsaken - Single',
              collectionCensoredName: 'Forsaken - Single',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/forsaken-single/1423942647?uo=4',
              artworkUrl60: 'https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/9a/70/d8/9a70d8e5-b3e0-839c-dd33-09790915f35f/source/60x60bb.jpg',
              artworkUrl100: 'https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/9a/70/d8/9a70d8e5-b3e0-839c-dd33-09790915f35f/source/100x100bb.jpg',
              collectionPrice: 0.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 1,
              copyright: '℗ 2016 Vybz',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2016-04-15T07:00:00Z',
              primaryGenreName: 'Pop'
            },
            {
              wrapperType: 'collection',
              collectionType: 'Album',
              artistId: 301490824,
              collectionId: 1423945140,
              amgArtistId: 2900484,
              artistName: 'Savant',
              collectionName: 'SURPRISE - Single',
              collectionCensoredName: 'SURPRISE - Single',
              artistViewUrl: 'https://itunes.apple.com/us/artist/savant/301490824?uo=4',
              collectionViewUrl: 'https://itunes.apple.com/us/album/surprise-single/1423945140?uo=4',
              artworkUrl60: 'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/d5/94/ea/d594ea2f-8a39-d001-4004-057bb2a392a8/source/60x60bb.jpg',
              artworkUrl100: 'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/d5/94/ea/d594ea2f-8a39-d001-4004-057bb2a392a8/source/100x100bb.jpg',
              collectionPrice: 0.99,
              collectionExplicitness: 'notExplicit',
              trackCount: 1,
              copyright: '℗ 2017 Vybz',
              country: 'USA',
              currency: 'USD',
              releaseDate: '2017-03-13T07:00:00Z',
              primaryGenreName: 'Dance'
            }
          ]
        };

        class Album {
          constructor(albumJson) {
            this.collectionCensoredName = albumJson.collectionCensoredName;
            this.collectionViewUrl = albumJson.collectionViewUrl;
            this.artworkUrl100 = albumJson.artworkUrl100;
            this.copyright = albumJson.copyright;
            this.primaryGenreName = albumJson.primaryGenreName;
          }

          addAsChildTo(albumsList) {
            const albumDivString = '<h3>' + this.collectionCensoredName + '</h3>'
              + '<p>' + this.primaryGenreName + '</p>'
              + '<a href="' + this.collectionViewUrl + '"><img src="' + this.artworkUrl100 + '" /></a>'
              + '<p>' + this.copyright + '</p>';

            const divAlbum = document.createElement('div');
            divAlbum.class = 'album';
            divAlbum.className = 'album';
            divAlbum.innerHTML = albumDivString;

            albumsList.appendChild(divAlbum);
          }
        }

        const albumsList = document.getElementById('album-list');

        albums.results.forEach((album) => {
          if (album.collectionExplicitness !== 'explicit') {
            const albumElem = new Album(album);
            albumElem.addAsChildTo(albumsList);
          }
        });

      </script>
      -->

    </div>
  </section>
</template>

<style lang="scss">

  // TODO: clean imports?
  @import "~bulma/bulma.sass";
  @import "~bulmaswatch/superhero/bulmaswatch.scss";

  .hero-body {
    background-color: rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  #artist-img {
    width: 30%;
    min-width: 180px;
  }

  #album-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
    color: $grey-lighter;
    column-gap: 0;
  }

  #album-list .album {
    background-color: rgba(0, 0, 0, 0.1);
    width: 200px;
    margin: 10px;
    padding: 10px;
  }

  #album-list .album div img {
    width: 100%;
  }

</style>
