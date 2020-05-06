
<template>
  <div id="app">
    <nav-bar></nav-bar>
    <main id="wrapper">
      <router-view :key="$route.path" />
    </main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
    FooterBar
  }
};
</script>
<style>

html{
  scroll-behavior: smooth;
}


/* 
Colours 
  --primary-color: #654ea3;
  --primary-light-color: #957bd5;
  --primary-dark-color: #362574;
  --secondary-color: #ffffff;
  --primary-text-color: #ffffff;
  --secondary-text-color: #362574;
*/

.text-primary {
  color: #ffffff !important;
}
.text-secondary {
  color: #362574 !important;
}

.violet-bg-primary {
  background-color: #654ea3;
}

.violet-bg-light {
  background-color: #957bd5;
}

.violet-bg-dark {
  background-color: #362574;
}

.white-bg {
  background-color: #ffffff;
}

/*
Typography 
*/
#app {
  font-family: "TTCommons-Regular", "Source Sans Pro", sans-serif;
}
h1,
h2,
h3 {
  margin-bottom: 10px;
  font-weight: bold;
  line-height: 1.25;
}
p,
a,
li,
span {
  font-weight: 400;
  line-height: 1.25;
}

@media (max-width: 767px) {
  p {
    max-width: 90%;
    margin: 0 auto;
  }
}

/*
Button
*/
.btn {
  margin-top: 20px;
  border-radius: 50px;
  border: none;
  padding: 10px 30px;
  color: #ffffff;
  box-shadow: 0px 0px 15px 0px rgba(101, 78, 163);
  transition: opacity 1s ease;
  opacity: 1;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.8;
}

.btn-invert {
  margin-top: 20px;
  border-radius: 50px;
  border: none;
  padding: 10px 30px;
  color: #654ea3;
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255);
  transition: opacity 1s ease;
  opacity: 1;
  cursor: pointer;
}

</style>