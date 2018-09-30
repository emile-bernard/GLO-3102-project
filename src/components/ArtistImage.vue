<template>
  <a :href=refLink>
    <img id="artist-image"
         :src=imgSrc
    />
  </a>
</template>

<style>
  #artist-image {
    min-width: 180px;
    width: 600px;
  }
</style>

<script>
  export default {
    props: ['refLink', 'imgSrc'],
  };
</script>
