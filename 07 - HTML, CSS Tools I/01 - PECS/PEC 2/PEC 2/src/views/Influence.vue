<template>
  <div id="influence">
    <section id="hero" class="section hero has-text-centered">
      <div class="hero-body">
        <div class="container" v-for="dataHero in influenceData.hero" :key="dataHero.id">
          <h1 class="title title-hero is-1 text-secondary is-size-3-mobile">{{dataHero.title}}</h1>
          <p class="subtitle is-4 text-secondary">{{dataHero.subtitle}}</p>
        </div>
        <div class="container-icons">
          <div v-for="person in influenceData.info" :key="person.id">
            <span class="icons-hero is-size-3">
              <i :class="'text-secondary ' + ' ' + person.icon"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="section" v-for="person in influenceData.info" :key="person.id">
      <div class="container sub-section">
        <div class="author-head has-text-centered">
          <h2 class="title text-secondary is-2">{{person.author}}</h2>
          <div class="avatar">
            <img :src="person.avatar" :alt="person.author" />
          </div>
        </div>

        <div class="author-biography">
          <p class="subtitle is-5 text-secondary">{{person.biography.paragraph1}}</p>
          <p class="subtitle is-5 text-secondary">{{person.biography.paragraph2}}</p>
        </div>
        <div class="author-project">
          <h3 class="subtitle is-4 text-secondary">Proyectos:</h3>
          <ul class="projects">
            <li
              class="subtitle is-5 text-secondary"
              v-for="(project, index) in person.project"
              :key="index"
            >
              <span class="icons-hero is-size-3">
                <i :class="'text-secondary ' + ' ' + person.icon"></i>
              </span>
              <span>{{project}}</span>
            </li>
          </ul>
        </div>
        <div class="author-gallery">
          <div class="pic-container" v-for="(gallery, index) in person.gallery" :key="index">
            <img :src="gallery" :alt="person.author" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import store from "../store/index.js";
export default {
  name: "Influence",
  data() {
    return {
      influenceData: store.influenceData
    };
  }
};
</script>


<style scoped>
.hero .hero-body {
  max-width: 100%;
  margin: 0 auto;
  width: 1200px;
}
.section .container {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
}

.title-hero {
  padding-bottom: 20px;
}

.container-icons {
  display: flex;
  justify-content: center;
  padding: 50px;
}

.icons-hero {
  margin: 20px;
}

@media (min-width: 768px) {
  .hero .hero-body .container {
    width: 70%;
  }
}
.sub-section {
  width: 768px !important;
}

.content-paragraph {
  padding: 20px 0;
}

.author-head {
  padding-bottom: 80px;
}

.avatar img {
  width: 130px;
  clip-path: circle(50% at 50% 50%);
}

.author-biography,
.author-project,
.author-gallery {
  padding: 50px 0;
}

.author-project h3{
    font-weight: bold;
}

.pic-container {
  padding: 20px 0;
}
</style>