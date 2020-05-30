<template>
  <footer id="footer" class="section violet-bg-dark">
    <div class="container has-text-centered">
      <a href="https://instagram.com/iamasync" target="_blank" class="is-size-4 social-link">
        <i class="text-primary fab fa-instagram"></i>
      </a>
      <a href="https://github.com/ansango" target="_blank" class="is-size-4 social-link">
        <i class="text-primary fab fa-github"></i>
      </a>
      <p class="text-primary is-size-7">
        Hecho con
        <i class="fas fa-heart text-primary"></i>
        <a class="text-primary" href="https://bulma.io"  target="_blank">Bulma</a>
        <a href="https://vuejs.org" class="text-primary" target="_blank">
          <i class="fab fa-vuejs"></i>
        </a>
        , por
        <a class="text-primary" href="https://instagram.com/iamasync" target="_blank">@iamasync</a>
      </p>
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
#footer p {
  padding: 20px;
}


</style>
