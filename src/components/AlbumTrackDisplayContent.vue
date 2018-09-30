<template>
  <li class="album-song">
      <a id="song-link" v-bind:href="FindLink(title)" rel="nofollow">
        <i id="second-play-icon" class="far fa-play-circle fa-1x"></i>
      </a>
    {{id+1}}.
    {{title}}
    ({{time}})
  </li>
</template>

<style lang="scss">
  @import "~bulma/bulma.sass";
  @import "~bulmaswatch/superhero/bulmaswatch.scss";

  .album-song{
    font-size: 20px;
    color: $turquoise;
  }
   #second-play-icon{
     color: $turquoise;
   }

   #song-link ~ #second-play-icon {
       color:$white;
   }

   #second-play-icon:hover{
    cursor: pointer;
     color:$white;
     background-color: rgba(0,0,0,0.8);
  }
</style>

<script>
  export default {
    props: ['id', 'title', 'time'],
    methods: {
      FindLink(songTitle) {
        switch (songTitle) {
          case 'Never Le Nkemise' :
            return 'https://www.youtube.com/watch?v=GmwhBSh2rOs';
          case 'I Fink U Freeky':
            return 'https://www.youtube.com/watch?v=o8S2BrpUkRE';
          case 'Pielie (Skit)':
            return 'https://www.youtube.com/watch?v=GmwhBSh2rOs';
          case 'Hey Sexy':
            return 'https://www.youtube.com/watch?v=Q1OzUTbtTWw';
          case 'Fatty Boom Boom':
            return 'https://www.youtube.com/watch?v=M0e_0P9OZuM';
          case 'So What? (Interlude)' :
            return 'https://www.youtube.com/watch?v=pXPcY8oR74E';
          case 'Zefside Zol (Interlude)':
            return 'https://www.youtube.com/watch?v=O8Nfv9VSlIc';
          case 'Uncle Jimmy (Skit)':
            return 'https://www.youtube.com/watch?v=aBJTZuOLta4';
          case 'Baby\'s On Fire':
            return 'https://www.youtube.com/watch?v=zJquKj2Hiws';
          case 'U Make A Ninja Wanna Fuck':
            return 'https://www.youtube.com/watch?v=xFJ8VoaQkXc';
          case 'Fok Julie Naaiers' :
            return 'https://www.youtube.com/watch?v=w2uNNphEYis';
          case 'DJ Hi-Tek Rulez' :
            return 'https://www.youtube.com/watch?v=Mez_XxpX9MU';
          case 'Never Le Nkemise remix' :
            return 'https://www.youtube.com/watch?v=GmwhBSh2rOs';
          default:
            return '';
        }
      }
    }
  };
</script>
