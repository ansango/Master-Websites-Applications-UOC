
<template>
  <div class="container">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
.container {
  width: 600px;
  margin: 50px auto;
  text-align: center;
}
</style>