<template>
  <div class="pt-home" style="background-image: url('img/home-bg.jpg')">
    <section>
      <!-- Banner -->
      <div class="banner">
        <h1>
          {{ getPersonelBilgileri.name + " " + getPersonelBilgileri.surName }}
        </h1>
        <p class="cd-headline rotate-1">
          <span>==></span>
          <span class="cd-words-wrapper">
            <b class="is-visible">{{ getPersonelBilgileri.business }}</b>
            <b>{{ getPersonelBilgileri.business2 }}</b>
            <b>{{ getPersonelBilgileri.business3 }}</b>
            <b>Freelancer</b>
          </span>
        </p>
      </div>

      <!-- Language -->
      <div class="lang">
        <ul>
          <li><a href="https://vueadmin.limiyum.com/" class="active">=> Panele Dön</a></li>
          <!-- <li><a href="#">rus</a></li> -->
        </ul>
      </div>

      <!-- Social -->
      <div class="social">
        <ul>
          <li :key="index" v-for="(smHesap, index) in getSmHesapBilgileri">
            <a target="_blank" :href="smHesap.smUrlAdress"><i :class="smHesap.smIconCode"></i></a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getPersonelBilgileri() {
      return this.$store.state.kisiselBilgiler.personelBilgileriDTO;
    },

    getSmHesapBilgileri() {
      return this.$store.state.iletisimBilgileri.smHesaplari;
    },
  },
};
</script>
<style scoped>
</style>