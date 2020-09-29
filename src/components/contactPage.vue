<template>
  <div class="page pt-contact" data-simplebar>
    <section class="container">
      <!-- Section Title -->
      <div class="header-page mt-70 mob-mt">
        <h2>İletişim</h2>
        <span></span>
      </div>

      <!-- Form Start -->
      <div class="row mt-100">
        <div class="col-lg-12 col-sm-12">
          <div class="contact-form">
            <form method="" class="box-1 contact-valid" id="contact-form">
              <div class="row">
                <div class="col-lg-6 col-sm-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    placeholder="İsim *"
                    v-model="mailData.name"
                  />
                </div>
                <div class="col-lg-6 col-sm-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="Email *"
                    v-model="mailData.email"
                  />
                </div>
                <div class="col-lg-12 col-sm-12">
                  <textarea
                    class="form-control"
                    name="note"
                    id="note"
                    placeholder="Mesaj"
                    v-model="mailData.message"
                  ></textarea>
                </div>
                <div class="col-lg-12 col-sm-12 text-center">
                  <button @click.prevent="sendMessage" type="" class="btn-st">
                    Gönder
                  </button>
                  <div id="loader">
                    <i class="fas fa-sync"></i>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12">
                  <div class="error-messages">
                    <div id="success">
                      <i class="far fa-check-circle"></i>Thank you, your message
                      has been sent.
                    </div>
                    <div id="error">
                      <i class="far fa-times-circle"></i>Error occurred while
                      sending email. Please try again later.
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="box-2 contact-info">
        <div class="row">
          <div class="col-lg-4 col-sm-12 info">
            <i class="fas fa-paper-plane"></i>
            <p>{{ getIletisimBilgileri.email }}</p>
            <span>Email</span>
          </div>
          <div class="col-lg-4 col-sm-12 info">
            <i class="fas fa-map-marker-alt"></i>
            <p>{{ getIletisimBilgileri.lokasyon }}</p>
            <span>Adres</span>
          </div>
          <div class="col-lg-4 col-sm-12 info">
            <i class="fas fa-phone"></i>
            <p>{{ getIletisimBilgileri.gsm }}</p>
            <span>Telefon</span>
          </div>
        </div>
      </div>

      <!--Google Map Start-->
      <div v-if="false" class="google-map box-1 mt-100 mb-100">
        <div class="row">
          <div class="col-lg-12">
            <div
              id="map"
              data-latitude="40.712775"
              data-longitude="-74.005973"
              data-zoom="14"
            ></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mailData: {
        name: "",
        email: "",
        message: "",
        date: new Date(),
      },
    };
  },
  methods: {
    sendMessage() {
      if (
        this.mailData.name == "" ||
        this.mailData.email == "" ||
        this.mailData.message == ""
      ) {
        alert("Lütfen gerekli alanları doldurunuz.");
      } else {
        this.$store.dispatch("mailServices", this.mailData);
      }
    },
  },
  computed: {
    getIletisimBilgileri() {
      return this.$store.state.iletisimBilgileri.iletisimBilgileri;
    },
  },
};
</script>
<style scoped>
</style>