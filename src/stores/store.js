import Vue from 'vue';
import Vuex from 'vuex';
import Firebase from "../config/firebase";

import kisiselBilgiler from "./modules/kisiselBilgiler";
import egitimBilgiler from "./modules/egitimBilgiler";
import firmaBilgileri from "./modules/firmaBilgileri";
import yetkinlikBilgileri from "./modules/yetkinlikBilgileri";
import projeBilgileri from "./modules/projeBilgileri";
import iletisimBilgileri from "./modules/iletisimBilgileri";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        kisiselBilgiler: kisiselBilgiler,
        egitimBilgiler: egitimBilgiler, 
        firmaBilgileri: firmaBilgileri,
        yetkinlikBilgileri: yetkinlikBilgileri,
        projeBilgileri: projeBilgileri,
        iletisimBilgileri: iletisimBilgileri
    }

})

export default store