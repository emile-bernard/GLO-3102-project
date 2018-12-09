<template>
  <div class="media">
    <div class="media-left tags has-addons">
      <span class="tag is-medium is-primary">Type:</span>
      <span class="tag is-medium is-white">{{result.getType()}}</span>
    </div>
    <div class="media-content">
      <router-link v-if="result.getType()==='collection'"
                   :to="result.getURL()">&nbsp;
        <span>{{result.getName()}}</span>&nbsp;
        <img class="album-artwork"
             id="album-cover-image"
             :src="result.getArtworkUrl()"
             alt="artist-img"/>
      </router-link>
      <router-link v-else :to="result.getURL()">&nbsp;
        <span>{{result.getName()}}</span>&nbsp;
      </router-link>
      <!--<playlist-choice-->
      <!--v-if="(result.getType() === 'collection' || result.getType() === 'track') && isPlaylistChoiceActive"-->
      <!--v-bind:isActive="isPlaylistChoiceActive"-->
      <!--v-bind:trackIds="trackIds"-->
      <!--v-on:close-playlist-modal="closePlaylistModal"-->
      <!--&gt;</playlist-choice>-->
    </div>
  </div>
</template>

<style>
  .album-artwork {
    float: left;
  }
</style>

<script>
  export default {
    name: 'SearchResultElement',
    props: ['result']
  };
  // TODO: On doit ajouter le boolean ici pour que le pop up de add to palylist focntionne
</script>
