<template>
  <footer id="footer" class="section violet-bg-dark">
    <div class="footer-wrapper">
      <div class="container">
        <h3 class="is-size-4 text-primary">The frontend roadmap</h3>
        <a href="https://instagram.com/iamasync" target="_blank" class="is-size-4 social-link">
          <i class="text-primary fab fa-instagram"></i>
        </a>
        <a href="https://github.com/ansango" target="_blank" class="is-size-4 social-link">
          <i class="text-primary fab fa-github"></i>
        </a>
        <p class="text-primary is-size-7">
          Hecho con
          <i class="fas fa-heart text-primary"></i>
          <a class="text-primary" href="https://bulma.io" target="_blank">Bulma</a>
          <a href="https://vuejs.org" class="text-primary" target="_blank">
            <i class="fab fa-vuejs"></i>
          </a>
          , por
          <a
            class="text-primary"
            href="https://instagram.com/iamasync"
            target="_blank"
          >@iamasync</a>
        </p>
      </div>
      <div class="container">
        <div class="logo">
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterBar"
};
</script>

<style scoped>
/*
Footer
*/

.footer-wrapper {
  max-width: 1200px;
  display: flex;
  margin: auto;
}

.logo {
  margin: auto;
  background: white;
  background-image: url("../assets/logo.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50px;
  clip-path: circle(40% at 50% 50%);
  width: 105.5px;
  height: 100%;
}

#footer p {
  padding-top: 20px;
}
</style>
