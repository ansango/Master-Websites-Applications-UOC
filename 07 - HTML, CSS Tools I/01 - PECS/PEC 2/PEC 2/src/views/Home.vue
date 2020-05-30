<template>
  <div id="home">
    <section
      id="hero"
      class="hero is-large has-text-centered-mobile"
      v-for="dataHero in homeData.hero"
      :key="dataHero.id"
    >
      <div class="hero-body">
        <div class="container">
          <h1 class="text-secondary title is-1 is-size-3-mobile">{{dataHero.title}}</h1>
        </div>
        <div class="container">
          <p class="text-secondary subtitle is-3 is-size-5-mobile">{{dataHero.subtitle}}</p>
          <button
            class="btn violet-bg-primary is-size-6"
            @click="scrollToCards()"
          >{{dataHero.button}}</button>
        </div>
      </div>
    </section>
    <section id="features " class="section violet-bg-light">
      <div class="container" v-for="dataInfo in homeData.info" :key="dataInfo.id">
        <div
          class="cols reverse-column-order"
          :class="dataInfo.id % 2 === 0 ? '' : 'reverse-row-order'"
        >
          <div class="col has-text-centered">
            <h3 class="title is-3 text-primary">{{dataInfo.title}}</h3>
            <p class="subtitle is-5 text-primary paragraph">{{dataInfo.paragrapgh}}</p>
          </div>
          <div class="col">
            <img class="feature-img" :src="dataInfo.image" alt="feature" />
          </div>
        </div>
      </div>
    </section>
    <section class="section cards" id="card-id">
      <div class="card violet-bg-primary" v-for="road in roadmap" :key="road.name">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="road.image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="content has-text-centered">
            <h3 class="title text-primary is-3">{{road.name}}</h3>

            <span @click="go()" class="text-primary is-size-4">
              {{road.resume}}
              <br />
            </span>
            <router-link :to="{name: 'road', params: {slug: road.slug}}">
              <button class="btn-invert white-bg is-size-6">Go!</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import store from "../store/index.js";
export default {
  name: "Home",
  data() {
    return {
      roadmap: store.roadmap,
      homeData: store.homeData
    };
  },
  methods: {
    scrollToCards() {
      const element = document.getElementById("card-id");
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
};
</script>
<style scoped>
.section .container,
.hero .hero-body,
.hero .hero-head {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
}

/*
Hero
*/

@media (min-width: 1024px) {
  .hero-body {
    background-image: url(../assets/000.svg);
    background-size: 40%;
    background-position: 90% 50%;
    background-repeat: no-repeat;
  }
  .hero-body p {
    width: 600px;
  }
}

/*
Features
*/
.feature-img {
  max-width: 60%;
}

.feature-text {
  margin: auto 0;
}

#features .container {
  padding: 50px;
}

.cols {
  padding: 50px 0;
  align-items: center;
}
.col img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
}

@media (max-width: 1023px) {
  .reverse-column-order {
    flex-direction: column-reverse;
  }
}

@media (min-width: 1024px) {
  .cols {
    display: flex;
  }
  .col {
    width: 50%;
    margin: auto 0;
  }
  .reverse-row-order {
    flex-direction: row-reverse;
  }
}

/*
Cards
 */

.card,
.card b {
  border-radius: 30px;
  margin: 50px 0;
}

.card-image img {
  border-radius: 30px 30px 0px 0px;
  padding: 30px 30px 0 30px;
}

@media (min-width: 1024px) {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .card {
    width: 30%;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .card {
    width: 45%;
  }
}

@media (max-width: 768px){
  #hero{
    margin-top: 130px;
  }
}
</style>