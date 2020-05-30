<template>
  <div style="height: 100vh">
    <section class="section is-large">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column has-text-centered">
            <h1 class="title">404 - Página no encontrada :(</h1>
            <p class="subtitle">Vaya, parece que te has confundido! O igual he sido yo!</p>
            <router-link :to="{name: 'home'}">
              <button class="btn violet-bg-primary is-size-6">Volver a casa</button>
            </router-link>
          </div>
          <div class="column has-text-centered">
            <img src="../assets/error.svg" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style>
</style>