<template>
  <div>
    <!--<go-back></go-back>-->
    <section id="hero" class="section hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title title-hero is-1 text-secondary is-size-3-mobile">{{road.name}}</h1>
          <p class="subtitle is-4 text-secondary">{{road.resume}}</p>
        </div>
        <div class="container-icons">
          <div v-for="tool in road.tools" :key="tool.id">
            <a :href="tool.url" target="_blank" class="icons-hero is-size-3">
              <i :class="'text-secondary ' + ' ' + tool.icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container faqs text-secondary">
        <h2 class="title text-secondary is-2">FAQS</h2>
        <ul v-for="faq in road.faqs" :key="faq.id">
          <li class="question text-secondary title is-5">{{faq.question}}</li>
          <li class="answer text-secondary subtitle">{{faq.answer}}</li>
        </ul>
      </div>
    </section>
    <section class="section cards has-text-centered">
      <div class="wrapper-icons" v-for="tool in road.tools" :key="tool.slug">
        <router-link :to="{name: 'tool', params: {toolSlug: tool.slug}, hash: '#tool'}">
          <div class="block zoom text-secondary block-shadow has-text-centered">
            <img :src="tool.image" :alt="tool.name" />
            <p class="tool-name text-secondary subtitle is-6">{{tool.name}}</p>
          </div>
        </router-link>
      </div>
    </section>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import store from "../store/index.js";
import GoBack from "../components/GoBack.vue";
export default {
  name: "Road",
  components: {
    GoBack
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    road() {
      return store.roadmap.find(road => road.slug === this.slug);
    }
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

@media (min-width: 768px) {
  .hero .hero-body .container {
    width: 70%;
  }
}

.container-icons {
  display: flex;
  justify-content: center;
  padding: 50px;
}

.icons-hero {
  margin: 20px;
}

.faqs {
  width: 768px !important;
}

ul {
  padding: 20px 0;
}

li {
  padding: 1px;
}

.question {
  font-weight: bold;
}

.cards {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
}

.block {
  border-radius: 6px;
  display: block;
  padding: 50px;
  margin: 20px;
  width: 251px;
  height: 320px;
  transition: transform 0.2s;
}

.block:hover {
  transform: scale(
    1.05
  );
}

.block-shadow {
  box-shadow: #957bd5 0 7px 25px 0;
}

.tool-name {
  padding-top: 50px;
  word-break: break-all;
  font-weight: bold;
}
</style>