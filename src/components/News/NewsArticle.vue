<template>
  <div class="card small news-article-card">
    <figure class="image">
      <a v-bind:href=articleUrl target="_blank">
        <img class="news-image" v-bind:src=articleUrlToImage alt="Article Image">
      </a>
    </figure>
    <div class="media">
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
</template>

<style>
  .news-article-card {
    margin-bottom: 2em;
  }

  .content {
    color: white;
  }

  .read-more-link {
    color: white;
  }

  .card {
    min-width: 320px;
    width: 40%;
    display: block;
    border-radius: 1em;
    padding: 10px;
    color: #fff;
    font-size: 18px;
    background-color: #3c3f42;
    box-shadow: 0 5px 20px rgba(87, 225, 181, .5);
  }

  .news-image {
    border-radius: 1.5em;
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
