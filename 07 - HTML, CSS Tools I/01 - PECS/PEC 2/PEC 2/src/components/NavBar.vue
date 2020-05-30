<template>
  <header>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link id="logo" class="navbar-item" to="/">
            <h3 class="is-size-4">The frontend roadmap</h3>
          </router-link>
        </div>
        <div class="navbar-menu" :class="{'is-active' : isOpen}">
          <div class="navbar-end">
            <div v-for="road in roadmap" :key="road.name">
              <router-link
                class="a-menu is-size-7 navbar-item"
                :to="{name: 'road', params: {slug: road.slug}}"
              >{{road.name}}</router-link>
            </div>
            <router-link class="a-menu is-size-7 navbar-item" :to="{name: 'influence'}">Influence</router-link>
          </div>
        </div>

        <span
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          @click="isOpen = !isOpen"
          :class="{'is-active': isOpen}"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>
    </nav>
  </header>
</template>

<script>
import store from "../store/index.js";
export default {
  name: "NavBar",
  data() {
    return {
      roadmap: store.roadmap,
      isOpen: false
    };
  },
  watch: {
    $route() {
      this.isOpen = false;
    }
  }
};
</script>
<style scoped>
nav {
  padding: 0 1rem;
  height: 60px;
  max-width: 100%;
  margin: 0 auto;
}

.a-menu {
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: opacity 1s ease;
  opacity: 0.8;
}

.a-menu:hover {
  opacity: 1;
  color: #362574;
  text-decoration: none;
}

a.active-link {
  color: #654ea3;
  font-weight: bold;
}

.navbar-brand {
  background-image: url("../assets/logo.svg");
  background-repeat: no-repeat;
  background-position: center left;
  background-size: 30px;
}

.navbar-menu {
  margin: auto;
}

@media (max-width: 400px) {
  #logo h3 {
    font-size: 1.2rem !important;
  }
}

#logo h3 {
  font-weight: bold;
  margin: auto;
  padding-left: 20px;
}

#logo,
h3:hover {
  color: #362574;
}

.burger {
  position: absolute;
  top: 0;
  right: 0;
}
</style>