<template>
     <div id="albumInfo">
        <div id="album-Title">{{albumTitle}}</div>
        <div id="album-genre">Genre : {{albumGenre}}</div>
        <div id="release-date">Release : {{releaseDate}} </div>
        <div id="track-count">Track count : {{trackCount}}</div>
       <ul id="songList" onclick="InitializePage">
           <li id="song" v-for="song in Tension" >{{Tension.indexOf(song) + 1}}-{{song.song[0].Name}} {{song.song[1].Time}}</li>
       </ul>
     </div>
</template>



<style scoped>

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
  }

  #album-genre{
     font-size: 0.8vw;
  }

  #release-date{
     font-size: 0.8vw;
  }

  #track-count{
     font-size: 0.8vw;
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
  }

</style>


<script>

  import AlbumTrackDisplayContent from './AlbumTrackDisplayContent';

  export default {
    name: 'AlbumInformation',

    data() {
      return { Tension: [{ song: [{ Name: 'Never Le Nkemise' }, { Time: '2:52' }] },
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
        { song: [{ Name: 'Never Le Nkemise (With Yo-Landi Vi$$er Vocal)' }, { Time: '3:21' }] },
      ],
        albumTitle: 'Tension',
        albumGenre: 'Hip-Hop/Rap',
        trackCount: '13',
        releaseDate: '29 Jan 2012',
      };
    },

    created() {
      const AlbumTitle = document.getElementById('album-Title');
      AlbumTitle.innerText.replace(AlbumTitle.innerText, 'lsls');
    },
    mounted: {
      InitializePage() {
        const AlbumTitle = document.getElementById('album-Title');
        AlbumTitle.innerText.replace(AlbumTitle.innerText, 'lsls');
      }
    },
    methods: {
      InitializePage() {
        const AlbumTitle = document.getElementById('album-Title');
        AlbumTitle.innerText.replace(AlbumTitle.innerText, 'lsls');

        const songList = document.getElementById('SongList');
        this.Tension.forEach(
            (song) => {
              const trackInfo = new AlbumTrackDisplayContent();
              trackInfo.TrackName = song.Name;
              trackInfo.Time = song.Time;
              songList.add(AlbumTrackDisplayContent, trackInfo);
            });
      }


    }
  };
</script>
