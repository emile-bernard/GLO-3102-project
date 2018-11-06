<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent is-vertical is-4">
      <div class="tile is-horizontal">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title" contenteditable="true">{{name}}</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png">
              </figure>
            </article>
          </div>
        </div>
      </div>
    </div>
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
