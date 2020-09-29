<template>
  <div class="header-mobile">
    <a class="header-toggle"><i class="fas fa-bars"></i></a>
    <h2>{{getNameAndSurname.name}}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    getNameAndSurname() {
      return this.$store.state.kisiselBilgiler.personelBilgileriDTO;
    }
  }
};
</script>
<style scoped>
</style>