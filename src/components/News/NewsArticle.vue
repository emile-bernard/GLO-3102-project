<template>
  <div id="news-article-card" class="card large">
    <div class="card-image">
      <figure class="image">
        <a v-bind:href=articleUrl target="_blank">
          <img v-bind:src=articleUrlToImage alt="Article Image">
        </a>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <i class="fas fa-at fa-6x"></i>
        </div>
        <div class="media-content">
          <p class="title is-4 no-padding">{{ articleAuthor }}</p>
          <p><span class="title is-6">{{ articleSource.name }}</span></p>
          <p class="subtitle is-6">{{ articlePublishedAt }}</p>
        </div>
      </div>
      <div class="content">
        <p class="tile">{{ articleTitle }}</p>
        <p class="subtitle">{{ articleDescription }}</p>
        <p>{{ articleContent }}</p>
        <p>
          <span class="title is-6">
            <a v-bind:href=articleUrl target="_blank">Read More&nbsp;<i class="fas fa-glasses"></i></a>

          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
  #news-article-card {
    margin-bottom: 2em;
  }

  .content {
    color: white;
  }
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
