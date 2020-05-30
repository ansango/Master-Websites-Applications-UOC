<template>
  <span class="go-back">
      <button class="btn violet-bg-primary" @click="goBack">
         <i>Volver</i>
      </button>
  </span>
</template>

<script>
export default {
name:'GoBack',
methods: {
    goBack(){
        return this.$router.go(-1)
    }
}
}
</script>

<style scoped>

</style>