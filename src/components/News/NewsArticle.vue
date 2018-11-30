<template>
  <div class="card large news-article-card">
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
          <p class="title is-3 no-padding">{{ articleAuthor }}</p>
          <p><span class="title is-6"> <span class="tag is-primary">{{ articleSource.name }}</span></span></p>
          <p class="subtitle is-6"><span class="tag is-light">{{ articlePublishedAt }}</span></p>
        </div>
      </div>
      <div class="content">
        <p class="tile">{{ articleTitle }}</p>
        <p class="subtitle">{{ articleDescription }}</p>
        <p>{{ articleContent }}</p>
        <p class="read-more-paragraph">
          <span class="tag is-success is-large"><span class="title is-6">
            <a class="read-more-link" v-bind:href=articleUrl target="_blank">Read More</a>
          </span></span>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
  .news-article-card {
    margin-bottom: 2em;
  }

  .card-content {
    background-color: #3c3f42;
  }

  .content {
    color: white;
  }

  .read-more-link {
    color: white;
  }

  .card {
    display: inline-block;
    border-radius: 1em;
    padding: 5px;
    color: #fff;
    font-size: 18px;
    background-color: rgba(87, 225, 181, 1);
    box-shadow: 0 5px 20px rgba(87, 225, 181, .5);
  }

  .tag {
    margin-bottom: 2em;
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
