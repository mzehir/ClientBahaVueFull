import Vue from 'vue';
import App from './App.vue';
import store from "./stores/store";
import { router } from './routes/router';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
