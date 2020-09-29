<template>
  <nav class="header-main" data-simplebar>
    <!-- Logo -->
    <div class="logo">
      <img src="img/logo.png" alt="" />
    </div>

    <ul>
      <li data-tooltip="Anasayfa" data-position="top">
        <!-- <a href="#home" class="icon-h fas fa-house-damage"></a> -->
        <router-link
          tag="a"
          class="icon-h fas fa-house-damage"
          to="/homePage"
          exact
        ></router-link>
      </li>
      <li data-tooltip="Hakkımda" data-position="top">
        <!-- <a href="#about" class="icon-a fas fa-user-tie"></a> -->
        <router-link
          tag="a"
          class="icon-a fas fa-user-tie"
          to="/aboutPage"
          exact
        ></router-link>
      </li>
      <li data-tooltip="Becerilerim" data-position="top">
        <!-- <a href="#resume" class="icon-r fas fa-address-book"></a> -->
        <router-link
          tag="a"
          class="icon-r fas fa-address-book"
          to="/resumePage"
          exact
        ></router-link>
      </li>
      <li data-tooltip="Portföy" data-position="top">
        <!-- <a href="#portfolio" class="icon-p fas fa-briefcase"></a> -->
        <router-link
          tag="a"
          class="icon-p fas fa-briefcase"
          to="/portfolioPage"
          exact
        ></router-link>
      </li>
      <li data-tooltip="Blog" data-position="top">
        <!-- <a href="#blog" class="icon-b fas fa-receipt"></a> -->
        <router-link
          tag="a"
          class="icon-b fas fa-receipt"
          to="/blogPage"
          exact
        ></router-link>
      </li>
      <li data-tooltip="İletişim" data-position="bottom">
        <!-- <a href="#contact" class="icon-c fas fa-envelope"></a> -->
        <router-link
          tag="a"
          class="icon-c fas fa-envelope"
          to="/contactPage"
          exact
        ></router-link>
      </li>
    </ul>

    <!-- Sound wave -->
    <!-- <a class="music-bg">
      <div class="lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Müzik</p>
    </a> -->
  </nav>
</template>

<script>
export default {};
</script>
<style scoped>
</style>