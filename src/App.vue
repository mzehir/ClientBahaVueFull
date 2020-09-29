<template>
  <div id="app">
    <!--Theme Options Start-->
    <theme></theme>
    <!-- Preloader -->
    <loader></loader>

    <!-- Main Site -->
    <div id="home">
      <div id="about">
        <div id="resume">
          <div id="portfolio">
            <div id="blog">
              <div id="contact">
                <mobile></mobile>

                <!-- Left Block -->
                <navigation></navigation>

                <!-- Home Section -->
                <!-- About Section -->
                <!-- Resume Section -->
                <router-view></router-view>
                <!-- Portfolio Section -->
                <!-- Blog Section -->
                <!-- Contact Section -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import theme from "./components/theme";
import loader from "./components/loader";
import mobile from "./components/mobile";
import navigation from "./components/navigation";
export default {
  name: "app",
  components: {
    theme: theme,
    loader: loader,
    mobile: mobile,
    navigation: navigation,
  },
  created() {
    this.$store.dispatch("getKisiselBilgilerFormu");
    this.$store.dispatch("getEgitimBilgileriFormu");
    this.$store.dispatch("getFirmaBilgileriFormu");
    this.$store.dispatch("getYetkinlikBilgileriFormu");
    this.$store.dispatch("getProjeBilgileriFormu");
    this.$store.dispatch("getIletisimBilgileriFormu");
  },
};
</script>

<style scoped>
</style>
