<template>
  <div class="home">
    
    <hello-world msg="Hola, soy una propiedad"></hello-world>
    <button style="margin-top:50px;" class="button">Click Me</button>
  </div>
</template>

<script>
import HelloWorld from "../components/Helloworld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
