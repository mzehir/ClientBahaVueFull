<template>
  <div class="page pt-portfolio" data-simplebar>
    <section class="container">
      <!-- Section Title -->
      <div class="header-page mt-70 mob-mt">
        <h2>Portföy</h2>
        <span></span>
      </div>

      <!-- Portfolio Filter Row Start -->
      <div class="row mt-100">
        <div class="col-lg-12 col-sm-12 portfolio-filter">
          <ul>
            <li class="active" data-filter="*">Tümü</li>
            <!-- <li data-filter=".brand">Brand</li>
            <li data-filter=".design">Design</li>
            <li data-filter=".graphic">Graphic</li> -->
          </ul>
        </div>
      </div>

      <!-- Portfolio Item Row Start -->
      <div class="row portfolio-items mt-100 mb-100">
        <!-- Portfolio Item -->
        <div :key="index" v-for="(portfoy, index) in getPortfolio" class="item col-lg-4 col-sm-6 graphic">
          <figure>
            <img alt="" :src="portfoy.portfoyFotoUrl" />
            <figcaption>
              <h3>{{portfoy.portfoyBasligi}}</h3>
              <p>{{portfoy.tamamlanmaTarihi}}</p>
              <i class="fas fa-image"></i>
              <a class="image-link" target="_blank" :href="portfoy.portfoyFotoUrl"></a>
            </figcaption>
          </figure>
        </div>

        <!-- Portfolio Item -->
        <!-- <div class="item col-lg-4 col-sm-6 design">
          <figure>
            <img alt="" src="img/portfolio/img-2.jpg" />
            <figcaption>
              <h3>Project Name</h3>
              <p>Design</p>
              <i class="fas fa-image"></i>
              <a class="image-link" href="img/portfolio/img-2.jpg"></a>
            </figcaption>
          </figure>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    getPortfolio() {
      return this.$store.state.projeBilgileri.portfoylerDTO;
    },
  }
};
</script>
<style scoped>
</style>