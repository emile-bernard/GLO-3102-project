<template>
  <a href="#" class="dropdown-item">
    {{playListName}}
  </a>
</template>

<script>
  export default {
    name: 'PlayListChoiceItem',
    props: {
      playListName: String,
      playListId: Number,
    },
  };
</script>

<style scoped>

</style>
