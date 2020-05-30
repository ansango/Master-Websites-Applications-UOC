<template>
  <button class="btn back-top" v-if="scrollY > 2000" @click="goTop()">
    <i class="text-secondary fas fa-arrow-up"></i>
  </button>
</template>

<script>
export default {
  name: "GoTop",
  data() {
    return {
      scrollTimer: 0,
      scrollY: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      if (this.scrollTimer) return;
      this.scrollTimer = setTimeout(() => {
        this.scrollY = window.scrollY;
        clearTimeout(this.scrollTimer);
        this.scrollTimer = 0;
      }, 100);
    },
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
.back-top {
  padding: 0;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 50px;
  right: 30px;
  color: #654ea3;
  background-color: #ffffff;
  z-index: 3;
}
</style>