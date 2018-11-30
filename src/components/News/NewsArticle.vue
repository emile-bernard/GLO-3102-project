<template>
  <div class="column is-one-third">
    <div class="card large">
      <div class="card-image">
        <figure class="image">
          <img v-bind:src=articleUrlToImage alt="Article Image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-96x96">
              <img
                src="https://cdn.discordapp.com/avatars/244932903530659841/0c924a19fcf1b5c59bc9dc1b58b61bb0.jpg?size=1024"
                alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4 no-padding">{{ articleAuthor }}</p>
            <p><span class="title is-6"><a href="http://twitter.com/#">{{ articleSource.name }}</a></span></p>
            <p class="subtitle is-6">{{ articlePublishedAt }}</p>
          </div>
        </div>
        <div class="content">
          <p class="tile">{{ articleTitle }}</p>
          <p class="subtitle">{{ articleDescription }}</p>
          <p>{{ articleContent }}</p>
          <p><span class="title is-6"><a v-bind:href=articleUrl>Read More</a></span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>
  export default {
    name: 'NewsArticle',
    props: {
      articleAuthor: {
        typeTitleCase: String
      },
      articleContent: {
        typeTitleCase: String
      },
      articleDescription: {
        typeTitleCase: String
      },
      articlePublishedAt: {
        typeTitleCase: String
      },
      articleSource: {
        typeTitleCase: String
      },
      articleTitle: {
        typeTitleCase: String
      },
      articleUrl: {
        typeTitleCase: String
      },
      articleUrlToImage: {
        typeTitleCase: String
      },
    }
  };
</script>
