<template>
  <li class="album-song">
    <i id="second-play-icon" class="far fa-play-circle fa-1x"></i>
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
</style>

<script>
  export default {
    props: ['id', 'title', 'time'],
  };
</script>
