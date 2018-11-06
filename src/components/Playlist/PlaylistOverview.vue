<template>
  <div class="tile is-inline-block is-parent is-4">
    <article class="tile is-child notification is-primary">
      <p class="title" contenteditable="true">{{name}}</p>
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/640x480.png">
      </figure>
    </article>
  </div>
</template>

<style>
</style>

<script>
  export default {
    props: {
      name: undefined,
      tracks: [],
    }
  };
</script>
