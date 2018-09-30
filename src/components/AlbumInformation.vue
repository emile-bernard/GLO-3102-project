<template>
  <div id="album-info">
    <h2 class="subtitle is-size-3">{{albumTitle}}</h2>
    <p>Genre: {{albumGenre}}</p>
    <p>Release: {{releaseDate}}</p>
    <p>Track count: {{trackCount}}</p>
    <br>
    <ul id="album-info-songs">
      <album-song
        v-for="(song, index) in Tension"
        v-bind:key="index"
        v-bind:id="index"
        v-bind:title="song[0].title"
        v-bind:time="song[1].time"
        v-bind:playRef="song[2].playRef"
      ></album-song>
    </ul>
  </div>
</template>

<style lang="scss">
  @import "~bulma/bulma.sass";
  @import "~bulmaswatch/superhero/bulmaswatch.scss";

  #album-info {
    background-color: rgba(0, 0, 0, 0.65);
    max-width: 100vw;
    max-height: 100vh;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 20px;
    color:$grey-lighter;
    padding: 40px;
  }

  #album-info-songs {
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    text-align: left;
  }
</style>

<script>
  import AlbumSong from './AlbumSong';

  export default {
    components: {
      'album-song': AlbumSong,
    },
    data() {
      return {
        Tension: [[{ title: 'Never Le Nkemise' }, { time: '2:52' }, { playRef: 'https://www.youtube.com/watch?v=GmwhBSh2rOs' }],
          [{ title: 'I Fink U Freeky' }, { time: '4:40' }, { playRef: 'https://www.youtube.com/watch?v=o8S2BrpUkRE' }],
          [{ title: 'Pielie (Skit)' }, { time: '0:09' }, { playRef: 'https://www.youtube.com/watch?v=GmwhBSh2rOs' }],
          [{ title: 'Hey Sexy' }, { time: '5:08' }, { playRef: 'https://www.youtube.com/watch?v=Q1OzUTbtTWw' }],
          [{ title: 'Fatty Boom Boom' }, { time: '3:45' }, { playRef: 'https://www.youtube.com/watch?v=M0e_0P9OZuM' }],
          [{ title: 'Zefside Zol (Interlude)' }, { time: '0:56' }, { playRef: 'https://www.youtube.com/watch?v=pXPcY8oR74E' }],
          [{ title: 'So What? (Interlude)' }, { time: '3:51' }, { playRef: 'https://www.youtube.com/watch?v=O8Nfv9VSlIc' }],
          [{ title: 'Uncle Jimmy (Skit)' }, { time: '1:21' }, { playRef: 'https://www.youtube.com/watch?v=aBJTZuOLta4' }],
          [{ title: 'Baby\'s On Fire' }, { time: '3:56' }, { playRef: 'https://www.youtube.com/watch?v=zJquKj2Hiws' }],
          [{ title: 'U Make A Ninja Wanna Fuck' }, { time: '3:16' }, { playRef: 'https://www.youtube.com/watch?v=xFJ8VoaQkXc' }],
          [{ title: 'Fok Julie Naaiers' }, { time: '3:54' }, { playRef: 'https://www.youtube.com/watch?v=w2uNNphEYis' }],
          [{ title: 'DJ Hi-Tek Rulez' }, { time: '1:37' }, { playRef: 'https://www.youtube.com/watch?v=Mez_XxpX9MU' }],
          [{ title: 'Never Le Nkemise' }, { time: '3:21' }, { playRef: 'https://www.youtube.com/watch?v=GmwhBSh2rOs' }],
        ],
        albumTitle: 'Tension',
        albumGenre: 'Hip-Hop/Rap',
        trackCount: '13',
        releaseDate: '2012/01/29',
      };
    }
  };
</script>
