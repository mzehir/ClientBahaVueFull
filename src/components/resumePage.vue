<template>
  <div class="page pt-resume" data-simplebar>
    <section class="container">
      <!-- Section Title -->
      <div class="header-page mt-70 mob-mt">
        <h2>Bireysel Becerilerim</h2>
        <span></span>
      </div>

      <!-- Experience & Education Row Start -->
      <div class="row mt-100">
        <!-- Experience Column Start -->
        <div class="col-lg-6 col-sm-12">
          <!-- Header Block -->
          <div class="header-box mb-50">
            <h3>Mesleki Deneyim</h3>
          </div>

          <div class="experience box-1">
            <!-- Experience Item -->
            <div
              :key="index"
              v-for="(firmaBilgisi, index) in getFirmaBilgileri"
              class="item"
            >
              <div class="main">
                <h4>{{ firmaBilgisi.pozisyon }}</h4>
                <p>
                  <i class="far fa-calendar-alt"></i
                  >{{
                    firmaBilgisi.baslangicYili +
                    " - " +
                    firmaBilgisi.bitisYili +
                    " | " +
                    firmaBilgisi.firma
                  }}
                </p>
              </div>
              <p>{{ firmaBilgisi.firmaAnisi }}</p>
            </div>
          </div>
        </div>

        <!-- Education Column Start -->
        <div class="col-lg-6 col-sm-12">
          <!-- Header Block -->
          <div class="header-box mb-50 mob-box-mt">
            <h3>Eğitim Geçmişi</h3>
          </div>

          <div class="experience box-2">
            <!-- Education Item -->
            <div
              :key="index"
              v-for="(egitimBilgisi, index) in getEgitimBilgileri"
              class="item"
            >
              <div class="main">
                <h4>{{ egitimBilgisi.okul }}</h4>
                <p>
                  <i class="far fa-calendar-alt"></i
                  >{{
                    egitimBilgisi.baslamaYili +
                    " - " +
                    egitimBilgisi.mezuniyetYili +
                    " | " +
                    egitimBilgisi.bolum
                  }}
                </p>
              </div>
              <p>{{ egitimBilgisi.okulAnisi }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Row Start -->
      <div class="row mt-100">
        <!-- Header Block -->
        <div class="col-md-12">
          <div class="header-box mb-50">
            <h3>Yetkinliklerim</h3>
          </div>
        </div>
      </div>

      <div class="box-1 skills">
        <div class="row">
          <div class="col-lg-6 col-sm-6">
            <!-- Skill Item -->
            <div
              :key="index"
              v-for="(yetkinlik, index) in getAnaYetkinlikler"
              class="skill-item"
            >
              <h4 class="progress-title">{{ yetkinlik.yetkinlikInnerHtml }}</h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  :style="'width:' + yetkinlik.yetkinlikSeviyesi + '%'"
                >
                  <div class="progress-value">
                    {{ yetkinlik.yetkinlikSeviyesi + "" + "%" }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-sm-6">
            <!-- Skill Item -->
            <div
              :key="index"
              v-for="(yetkinlikYan, index) in getYanYetkinlikler"
              class="skill-item"
            >
              <h4 class="progress-title">
                {{ yetkinlikYan.yetkinlikInnerHtmlExtra }}
              </h4>
              <div class="progress">
                <div
                  class="progress-bar"
                  :style="'width:' + yetkinlikYan.yetkinlikSeviyesiExtra + '%'"
                >
                  <div class="progress-value">
                    {{ yetkinlikYan.yetkinlikSeviyesiExtra + "" + "%" }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Work Process Row Start -->
      <div class="row mt-100">
        <!-- Header Block -->
        <div class="col-md-12">
          <div class="header-box mb-50">
            <h3>Çalışma Sürecim</h3>
          </div>
        </div>
      </div>

      <div class="box-2 work-process mb-100">
        <div class="row">
          <div class="col-lg-4 col-sm-12 ltr">
            <!-- Working Process Item-->
            <div class="single-wp width-sm process-1">
              <p class="wp-step">01</p>
              <h4 class="wp-title">{{ getCalismaSureci.surec1 }}</h4>
              <p>{{ getCalismaSureci.surec1Aciklama }}</p>
            </div>

            <!-- Working Process Item-->
            <div class="single-wp width-sm process-2">
              <p class="wp-step">02</p>
              <h4 class="wp-title">{{ getCalismaSureci.surec2 }}</h4>
              <p>{{ getCalismaSureci.surec2Aciklama }}</p>
            </div>
          </div>

          <div class="col-lg-4 hidden-sm">
            <!-- Working Process Circle-->
            <div class="wp-circle">
              <h4>ÇALIŞMA SÜRECİ</h4>
              <span class="dots top-l"></span>
              <span class="dots bottom-l"></span>
              <span class="dots top-r"></span>
              <span class="dots bottom-r"></span>
            </div>
          </div>

          <div class="col-lg-4 col-sm-12 rtl">
            <!-- Working Process Item-->
            <div class="single-wp width-sm process-3">
              <p class="wp-step">03</p>
              <h4 class="wp-title">{{ getCalismaSureci.surec3 }}</h4>
              <p>{{ getCalismaSureci.surec3Aciklama }}</p>
            </div>

            <!-- Working Process Item-->
            <div class="single-wp width-sm process-4">
              <p class="wp-step">04</p>
              <h4 class="wp-title">{{ getCalismaSureci.surec4 }}</h4>
              <p>{{ getCalismaSureci.surec4Aciklama }}</p>
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
    getFirmaBilgileri() {
      return this.$store.state.firmaBilgileri.calisilanFirmalarDTO;
    },

    getEgitimBilgileri() {
      return this.$store.state.egitimBilgiler.okunanOkullarDTO;
    },

    getAnaYetkinlikler() {
      return this.$store.state.yetkinlikBilgileri.anaYetkinliklerDTO;
    },

    getYanYetkinlikler() {
      return this.$store.state.yetkinlikBilgileri.yanYetkinliklerDTO;
    },

    getCalismaSureci() {
      return this.$store.state.projeBilgileri.calismaSureciDTO;
    },
  },
};
</script>
<style scoped>

</style>