<template>
     <div id="albumInfo">
        <div id="album-Title">{{albumTitle}}</div>
        <div id="album-genre">Genre : {{albumGenre}}</div>
        <div id="release-date">Release : {{releaseDate}} </div>
        <div id="track-count">Track count : {{trackCount}}</div>
       <ul id="songList" >
           <li id="song" v-for="song in Tension" >
             <i id="second-play-icon" class="far fa-play-circle fa-1x"></i>
             {{Tension.indexOf(song) + 1}}-{{song.song[0].Name}}
             {{song.song[1].Time}}
           </li>
       </ul>
     </div>
</template>



<style lang="scss">

  @import "~bulma/bulma.sass";
  @import "~bulmaswatch/superhero/bulmaswatch.scss";

#albumInfo {
    flex-wrap: wrap;
    max-width: 100vw;
    max-height: 100vh;
    display: -webkit-inline-flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  #album-Title{
    font-size: 2vw;
    color: $grey-lighter;
  }

  #album-genre{
     font-size: 0.8vw;
    color: $grey-lighter;
  }

  #release-date{
     font-size: 0.8vw;
    color: $grey-lighter;
  }

  #track-count{
     font-size: 0.8vw;
    color: $grey-lighter;
  }

  #songList{
     display: -webkit-inline-flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
    position: relative;
    -webkit-margin-before: 10%;
    -webkit-margin-start: 20%;
  }

  #song{
     font-size: 1vw;
    color: $grey-lighter;
  }

</style>


<script>
  export default {
    name: 'AlbumInformation',

    data() {
      return {
        Tension: [{ song: [{ Name: 'Never Le Nkemise' }, { Time: '2:52' }] },
          { song: [{ Name: 'I Fink U Freeky' }, { Time: '4:40' }] },
          { song: [{ Name: 'Pielie (Skit)' }, { Time: '0:09' }] },
          { song: [{ Name: 'Hey Sexy' }, { Time: '5:08' }] },
          { song: [{ Name: 'Fatty Boom Boom' }, { Time: '3:45' }] },
          { song: [{ Name: 'Zefside Zol (Interlude)' }, { Time: '0:56' }] },
          { song: [{ Name: 'So What? (Interlude)' }, { Time: '3:51' }] },
          { song: [{ Name: 'Uncle Jimmy (Skit)' }, { Time: '1:21' }] },
          { song: [{ Name: 'Baby\'s On Fire' }, { Time: '3:56' }] },
          { song: [{ Name: 'U Make A Ninja Wanna Fuck' }, { Time: '3:16' }] },
          { song: [{ Name: 'Fok Julie Naaiers' }, { Time: '3:54' }] },
          { song: [{ Name: 'DJ Hi-Tek Rulez' }, { Time: '1:37' }] },
          { song: [{ Name: 'Never Le Nkemise' }, { Time: '3:21' }] },
        ],
        albumTitle: 'Tension',
        albumGenre: 'Hip-Hop/Rap',
        trackCount: '13',
        releaseDate: '29 Jan 2012',
      };
    }
  };
</script>
