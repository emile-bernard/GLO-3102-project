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
          <h1 class="title">Current music news</h1>
        </div>
      </div>
    </section>

    <div class="box">
      <div class="tabs is-centered">
        <ul>
          <li class="is-active">
            <a>
              <span @click="changeTab('Music')">All</span>
            </a>
          </li>
          <li>
            <a>
              <span @click="changeTab('Country Music')">Country</span>
            </a>
          </li>
          <li>
            <a>
              <span @click="changeTab('Rock Music')">Rock</span>
            </a>
          </li>
          <li>
            <a>
              <span @click="changeTab('Rap Music')">Rap</span>
            </a>
          </li>
          <li>
            <a>
              <span @click="changeTab('Techno Music')">Techno</span>
            </a>
          </li>
          <li>
            <a>
              <span @click="changeTab('Dubstep')">Dubstep</span>
            </a>
          </li>
        </ul>
      </div>


      <div id="news-container" class="section">
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
  </div>
</template>

<style>
  #news-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;
    justify-content: space-around;
    background-color: transparent;
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
      changeTab(musicStyle) {
        this.queryApi(musicStyle);
      },
      populateNewsArticles(articles) {
        const articlesArray = [];

        for (let i = 0; i < articles.length; i += 1) {
          articlesArray.push(
            {
              articleAuthor: articles[i].author,
              articleContent: articles[i].content,
              articleDescription: articles[i].description,
              articlePublishedAt: new Date(articles[i].publishedAt).toLocaleString(),
              articleSource: articles[i].source,
              articleTitle: articles[i].title,
              articleUrl: articles[i].url,
              articleUrlToImage: articles[i].urlToImage
            });
        }

        this.setNewsArticles(articlesArray);
      },
      setNewsArticles(articles) {
        this.newsArticles = articles;
      },
      queryApi(musicStyle) {
        const apiKey = 'cf21ecee96d94f34a71e17dcca6638f9';
        const querySubject = encodeURIComponent(musicStyle);
        const toDate = new Date();
        const fromDate = new Date();
        fromDate.setDate(fromDate.getDate() - 5);
        const toDateFormat = toDate.toISOString().split('T')[0];
        const fromDateFormat = fromDate.toISOString().split('T')[0];

        const queryFrom = `${fromDateFormat}&to=${toDateFormat}`;
        const querySortBy = encodeURIComponent('relevance');
        const url = `https://newsapi.org/v2/everything?q=${querySubject}&from=${queryFrom}&sortBy=${querySortBy}&apiKey=`;
        const fullUrl = url + apiKey;
        fetch(fullUrl,
          {
            method: 'get'
          })
          .then(response => response.json())
          .then((response) => {
            this.populateNewsArticles(response.articles);
          });
      }
    },
    created() {
      this.queryApi('Music');
    },
  };
</script>
