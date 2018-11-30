<template>
  <div class="container">
    <div id="flow">
      <span class="flow-1"></span>
      <span class="flow-2"></span>
      <span class="flow-3"></span>
    </div>

    <section id="hero-news" class="hero is-primary is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Current music news, artist interviews, album reviews, and music industry news from UBeat
            Music.</h1>
        </div>
      </div>
    </section>

    <div class="section">
      <news-article v-for="(item, index) in newsArticles"
                    v-bind:key=index
                    v-bind:articleAuthor="item.articleAuthor"
                    v-bind:articleContent="item.articleContent"
                    v-bind:articleDescription="item.articleDescription"
                    v-bind:articlePublishedAt="item.articlePublishedAt"
                    v-bind:articleSource="item.articleSource"
                    v-bind:articleTitle="item.articleTitle"
                    v-bind:articleUrl="item.articleUrl"
                    v-bind:articleUrlToImage="item.articleUrlToImage">
      </news-article>
    </div>
  </div>

</template>

<style>
  .content {
    color: white;
  }
</style>

<script>
  import NewsArticle from './NewsArticle';

  export default {
    name: 'News',
    components: {
      'news-article': NewsArticle,
    },
    data() {
      return {
        newsArticles: [],
      };
    },
    methods: {
      populateNewsArticles(articles) {
        const articlesArray = [];

        for (let i = 0; i < articles.length; i += 1) {
          articlesArray.push(
            {
              articleAuthor: articles[i].author,
              articleContent: articles[i].content,
              articleDescription: articles[i].description,
              articlePublishedAt: articles[i].publishedAt,
              articleSource: articles[i].source,
              articleTitle: articles[i].title,
              articleUrl: articles[i].url,
              articleUrlToImage: articles[i].urlToImage
            });
        }

        this.setNewsArticles(articlesArray);
      },
      setNewsArticles(articles) {
        console.log('News articles Retrieved');
        console.log(articles);
        this.newsArticles = articles;
      },
    },
    created() {
      const apiKey = 'cf21ecee96d94f34a71e17dcca6638f9';
      const url = 'https://newsapi.org/v2/everything?q=apple&from=2018-11-29&to=2018-11-29&sortBy=popularity&apiKey=';
      const fullUrl = url + apiKey;
      fetch(fullUrl,
        {
          method: 'get'
        })
        .then(response => response.json())
        .then((response) => {
          console.log('Response:');
          console.log(response);
          this.populateNewsArticles(response.articles);
        });
    },
  };
</script>
