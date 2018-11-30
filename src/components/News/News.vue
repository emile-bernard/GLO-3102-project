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
      <div class="box">
        <div class="field has-addons">
          <div class="control is-expanded">
            <input class="input has-text-centered" type="search" placeholder="» » » » » » find me « « « « « «">
          </div>
          <div class="control">
            <a class="button is-info">Search</a>
          </div>
        </div>
      </div>

      <!-- Developers -->
      <div class="row columns">
        <!--<div class="column is-one-third">-->
        <!--<div class="card large">-->
        <!--<div class="card-image">-->
        <!--<figure class="image">-->
        <!--<img-->
        <!--src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop="-->
        <!--alt="Image">-->
        <!--</figure>-->
        <!--</div>-->
        <!--<div class="card-content">-->
        <!--<div class="media">-->
        <!--<div class="media-left">-->
        <!--<figure class="image is-96x96">-->
        <!--<img src="https://i.imgsafe.org/a4/a4bb9acc5e.jpeg" alt="Image">-->
        <!--</figure>-->
        <!--</div>-->
        <!--<div class="media-content">-->
        <!--<p class="title is-4 no-padding">Okinami</p>-->
        <!--<p><span class="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>-->
        <!--<p class="subtitle is-6">Lead Developer</p>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="content">-->
        <!--The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken,-->
        <!--trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for-->
        <!--it had become hideous and twisted.-->
        <!--<div class="background-icon"><span class="icon-twitter"></span></div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="column is-one-third">-->
        <!--<div class="card large">-->
        <!--<div class="card-image">-->
        <!--<figure class="image">-->
        <!--<img src="https://source.unsplash.com/uzDLtlPY8kQ" alt="Image">-->
        <!--</figure>-->
        <!--</div>-->
        <!--<div class="card-content">-->
        <!--<div class="media">-->
        <!--<div class="media-left">-->
        <!--<figure class="image is-96x96">-->
        <!--<img-->
        <!--src="https://cdn.discordapp.com/avatars/244932903530659841/0c924a19fcf1b5c59bc9dc1b58b61bb0.jpg?size=1024"-->
        <!--alt="Image">-->
        <!--</figure>-->
        <!--</div>-->
        <!--<div class="media-content">-->
        <!--<p class="title is-4 no-padding">McSocks</p>-->
        <!--<p><span class="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>-->
        <!--<p class="subtitle is-6">Developer</p>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="content">-->
        <!--The soul of the Beast seemed lost forever. Then, by the full moon's light, a child was born; child with-->
        <!--the unbridled soul of the Beast that would make all others pale in comparison.-->
        <!--<div class="background-icon"><span class="icon-facebook"></span></div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="column is-one-third">-->
        <!--<div class="card large">-->
        <!--<div class="card-image">-->
        <!--<figure class="image">-->
        <!--<img src="https://source.unsplash.com/pe_R74hldW4" alt="Image">-->
        <!--</figure>-->
        <!--</div>-->
        <!--<div class="card-content">-->
        <!--<div class="media">-->
        <!--<div class="media-left">-->
        <!--<figure class="image is-96x96">-->
        <!--<img src="https://i.imgsafe.org/a5/a5e978ce20.jpeg" alt="Image">-->
        <!--</figure>-->
        <!--</div>-->
        <!--<div class="media-content">-->
        <!--<p class="title is-4 no-padding">The Conceptionist</p>-->
        <!--<p><span class="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>-->
        <!--<p class="subtitle is-6">Developer</p>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="content">-->
        <!--Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad-->
        <!--amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore-->
        <!--reprehenderit beatae magnam animi!-->
        <!--<div class="background-icon"><span class="icon-barcode"></span></div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->


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
      <!-- End Developers -->
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
