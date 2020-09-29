<template>
  <div class="page pt-about" data-simplebar>
    <section class="container">
      <!-- Section Title -->
      <div class="header-page mt-70 mob-mt">
        <h2>Hakkımda</h2>
        <span></span>
      </div>

      <!-- Personal Info Start -->
      <div class="row mt-100">
        <!-- Information Block -->
        <div class="col-lg-12 col-sm-12">
          <div class="info box-1">
            <div class="row">
              <div class="col-lg-3 col-sm-4">
                <div class="photo">
                  <!-- <img alt="" :src="img/user-photo.jpg" /> -->
                  <img alt="" :src="getFOTO" />
                </div>
              </div>
              <div class="col-lg-9 col-sm-8">
                <h4>
                  {{
                    getKisiselBilgiler.name + " " + getKisiselBilgiler.surName
                  }}
                </h4>
                <div class="loc">
                  <i class="fas fa-map-marked-alt"></i> {{ getLokasyon }}
                </div>
                <p>{{ getOnYazi }}</p>
              </div>

              <!-- Icon Info -->
              <div class="col-lg-3 col-sm-4">
                <div class="info-icon">
                  <i class="fas fa-award"></i>
                  <div class="desc-icon">
                    <h6>
                      {{ getKisiselBilgiler.totalExperience + " Yıl İş" }}
                    </h6>
                    <p>Deneyimi</p>
                  </div>
                </div>
              </div>

              <!-- Icon Info -->
              <div class="col-lg-3 col-sm-4">
                <div class="info-icon">
                  <i class="fas fa-certificate"></i>
                  <div class="desc-icon">
                    <h6>{{ getKisiselBilgiler.totalExperience + " Proje" }}</h6>
                    <p>Sonlandı</p>
                  </div>
                </div>
              </div>

              <!-- Icon Info -->
              <div class="col-lg-3 col-sm-4">
                <div class="info-icon">
                  <i class="fas fa-user-astronaut"></i>
                  <div class="desc-icon">
                    <h6>{{ getKisiselBilgiler.isWorking }}</h6>
                    <p>Mevcut Durum</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-12 pt-50">
                <a :href="getCV" class="btn-st">CV İndir</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Interests Row Start -->
      <div class="row mt-100">
        <!-- Header Block -->
        <div class="col-md-12">
          <div class="header-box mb-50">
            <h3>Hobilerim</h3>
          </div>
        </div>

        <div class="col-lg-12 col-sm-12">
          <div class="box-2">
            <div class="row">
              <!-- Interests Item -->
              <div
                :key="index"
                v-for="(gethobi, index) in getHobiler"
                class="col-lg-3 col-sm-6"
              >
                <div class="inter-icon">
                  <i :class="gethobi.hobi"></i>
                  <div class="desc-inter">
                    <h6>{{ gethobi.hobiInnerHtml }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Service Row Start -->
      <div class="row mt-100">
        <!-- Header Block -->
        <div class="col-md-12">
          <div class="header-box mb-50">
            <h3>Hizmetlerim</h3>
          </div>
        </div>

        <!-- Service Item -->
        <div
          :key="index"
          v-for="(hizmet, index) in getHizmetler"
          class="col-lg-6 col-sm-6"
        >
          <div class="service box-1 mb-40">
            <i :class="hizmet.hizmetIconCode"></i>
            <h4>{{ hizmet.hizmetInnerHtml }}</h4>
            <p>{{ hizmet.hizmetDescription }}</p>
          </div>
        </div>
      </div>

      <!-- Testimonial Row Start -->
      <div v-if="false" class="row testimonial mt-60">
        <!-- Header Block -->
        <div class="col-md-12">
          <div class="header-box mb-50">
            <h3>Referanslar</h3>
          </div>
        </div>

        <div class="owl-carousel owl-theme">
          <!-- Testimonail Item -->
          <div class="testimonial-item">
            <div class="media">
              <img src="img/testimonials/testimonial-1.jpg" alt="" />
              <div class="content">
                <h4>John Doe</h4>
                <p>Web Development</p>
              </div>
              <ul class="rating">
                <li><i class="far fa-star"></i></li>
                <li><i class="far fa-star"></i></li>
                <li><i class="far fa-star"></i></li>
                <li><i class="far fa-star"></i></li>
                <li><i class="far fa-star"></i></li>
              </ul>
            </div>
            <div class="comment pt-30">
              <p>
                Curabitur eleifend tempor gnceleris eget placeratvel phasellus
                eget sem just metup consequat gestas facilisis eleifend posure
                tempor metus sem just metup consequat gestas facilisis eleifend
                posures temporureture.
              </p>
            </div>
          </div>

          <!-- Testimonail Item -->
          <div class="testimonial-item">
            <div class="media">
              <img src="img/testimonials/testimonial-2.jpg" alt="" />
              <div class="content">
                <h4>Alex Doe</h4>
                <p>UI/UX Designer</p>
              </div>
              <ul class="rating">
                <li><i class="far fa-star"></i></li>
                <li><i class="far fa-star"></i></li>
                <li><i class="far fa-star"></i></li>
                <li><i class="far fa-star"></i></li>
                <li><i class="far fa-star-half"></i></li>
              </ul>
            </div>
            <div class="comment pt-30">
              <p>
                Curabitur eleifend tempor gnceleris eget placeratvel phasellus
                eget sem just metup consequat gestas facilisis eleifend posure
                tempor metus sem just metup consequat gestas facilisis eleifend
                posures temporureture.
              </p>
            </div>
          </div>

          <!-- Testimonail Item -->
          <div class="testimonial-item">
            <div class="media">
              <img src="img/testimonials/testimonial-3.jpg" alt="" />
              <div class="content">
                <h4>David Doe</h4>
                <p>UI/UX Designer</p>
              </div>
              <ul class="rating">
                <li><i class="far fa-star"></i></li>
                <li><i class="far fa-star"></i></li>
                <li><i class="far fa-star"></i></li>
                <li><i class="far fa-star"></i></li>
              </ul>
            </div>
            <div class="comment pt-30">
              <p>
                Curabitur eleifend tempor gnceleris eget placeratvel phasellus
                eget sem just metup consequat gestas facilisis eleifend posure
                tempor metus sem just metup consequat gestas facilisis eleifend
                posures temporureture.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Price Row Start -->
      <div v-if="false" class="row mt-100 mb-60">
        <!-- Header Block -->
        <div class="col-md-12">
          <div class="header-box mb-90">
            <h3>Price</h3>
          </div>
        </div>

        <!-- Price Item -->
        <div class="col-lg-4 col-sm-12">
          <div class="price box-1">
            <div class="head-price">
              <i class="fa fa-user"></i>
              <h4>Basic</h4>
            </div>
            <div class="body-price">
              <div class="price-plan">
                <span class="currency">$</span>
                <span class="number">25</span>
                <span class="period">month</span>
              </div>
              <div class="list-price">
                <ul>
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li class="disable">Responsive Design</li>
                  <li class="disable">Game Development</li>
                </ul>
              </div>
            </div>
            <div class="footer-price">
              <a href="#" class="btn-st">Buy Now</a>
            </div>
          </div>
        </div>

        <!-- Price Item -->
        <div class="col-lg-4 col-sm-12">
          <div class="price box-2">
            <div class="head-price">
              <i class="fa fa-briefcase"></i>
              <h4>Standard</h4>
            </div>
            <div class="body-price">
              <div class="price-plan">
                <span class="currency">$</span>
                <span class="number">40</span>
                <span class="period">month</span>
              </div>
              <div class="list-price">
                <ul>
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li>Responsive Design</li>
                  <li class="disable">Game Development</li>
                </ul>
              </div>
            </div>
            <div class="footer-price">
              <a href="#" class="btn-st">Buy Now</a>
            </div>
          </div>
        </div>

        <!-- Price Item -->
        <div class="col-lg-4 col-sm-12">
          <div class="price box-1">
            <div class="head-price">
              <i class="fa fa-globe"></i>
              <h4>Premium</h4>
            </div>
            <div class="body-price">
              <div class="price-plan">
                <span class="currency">$</span>
                <span class="number">55</span>
                <span class="period">month</span>
              </div>
              <div class="list-price">
                <ul>
                  <li>Web Design</li>
                  <li>Web Development</li>
                  <li>Responsive Design</li>
                  <li>Game Development</li>
                </ul>
              </div>
            </div>
            <div class="footer-price">
              <a href="#" class="btn-st">Buy Now</a>
            </div>
          </div>
        </div>
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
    getKisiselBilgiler() {
      return this.$store.state.kisiselBilgiler.personelBilgileriDTO;
    },
    getCV() {
      return this.$store.state.kisiselBilgiler.cvURL;
    },
    getFOTO() {
      return this.$store.state.kisiselBilgiler.fotoURL;
    },
    getLokasyon() {
      return this.$store.state.iletisimBilgileri.iletisimBilgileri.lokasyon;
    },
    getOnYazi() {
      return this.$store.state.kisiselBilgiler.onYazi;
    },
    getHobiler() {
      return this.$store.state.kisiselBilgiler.hobilerDTO;
    },
    getHizmetler() {
      return this.$store.state.yetkinlikBilgileri.hizmetlerDTO;
    },
  },
};
</script>
<style scoped>
</style>