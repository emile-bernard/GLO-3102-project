<template>
  <div id="albumInfo">
    <div id="album-artist"><b>Die Antword</b></div>
    <div id="album-title"><b>{{albumTitle}}</b></div>
    <div id="album-genre"><b>Genre:</b> {{albumGenre}}</div>
    <div id="album-release-date"><b>Release:</b> {{releaseDate}}</div>
    <div id="album-track-count"><b>Track count:</b> {{trackCount}}</div>
    <br>
    <ul id="songList">
      <album-track-display-content
        v-for="(song, index) in Tension"
        v-bind:key="index"
        v-bind:id="index"
        v-bind:title="song[0].title"
        v-bind:time="song[1].time"
      ></album-track-display-content>
    </ul>
  </div>
</template>

<style lang="scss">
  @import "~bulma/bulma.sass";
  @import "~bulmaswatch/superhero/bulmaswatch.scss";

  #albumInfo {
    max-width: 100vw;
    max-height: 100vh;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 20px;
    color: $turquoise;
    font-size: 24px;
  }

  #album-artist {
    font-size: 34px;
  }

  #album-title {
    font-size: 30px;
  }

  #album-genre {
    font-size: 20px;
  }

  #album-release-date {
    font-size: 20px;
  }

  #album-track-count {
    font-size: 20px;
  }

  #songList {
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    text-align: left;
  }
</style>

<script>
  import AlbumTrackDisplayContent from './AlbumTrackDisplayContent';

  export default {
    components: { AlbumTrackDisplayContent },
    component: {
      'album-track-display-content': AlbumTrackDisplayContent,
    },
    data() {
      return {
        Tension: [[{ title: 'Never Le Nkemise' }, { time: '2:52' }],
          [{ title: 'I Fink U Freeky' }, { time: '4:40' }],
          [{ title: 'Pielie (Skit)' }, { time: '0:09' }],
          [{ title: 'Hey Sexy' }, { time: '5:08' }],
          [{ title: 'Fatty Boom Boom' }, { time: '3:45' }],
          [{ title: 'Zefside Zol (Interlude)' }, { time: '0:56' }],
          [{ title: 'So What? (Interlude)' }, { time: '3:51' }],
          [{ title: 'Uncle Jimmy (Skit)' }, { time: '1:21' }],
          [{ title: 'Baby\'s On Fire' }, { time: '3:56' }],
          [{ title: 'U Make A Ninja Wanna Fuck' }, { time: '3:16' }],
          [{ title: 'Fok Julie Naaiers' }, { time: '3:54' }],
          [{ title: 'DJ Hi-Tek Rulez' }, { time: '1:37' }],
          [{ title: 'Never Le Nkemise' }, { time: '3:21' }],
        ],
        albumTitle: 'Tension',
        albumGenre: 'Hip-Hop/Rap',
        trackCount: '13',
        releaseDate: '29 Jan 2012',
      };
    }
  };
</script>
