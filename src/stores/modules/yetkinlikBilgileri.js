import Firebase from "../../config/firebase";
import { firestore } from "firebase";

const state = {
    isYetkinlikBilgileriFormuDTO: false,
    anaYetkinliklerDTO: [],
    yanYetkinliklerDTO: [],
    yabanciDillerDTO: [],
    hizmetlerDTO: []
}

const getters = {

}

const mutations = {
    isYetkinlikBilgileriFormuDTO(state, data) {
        state.isYetkinlikBilgileriFormuDTO = data;
    },

    yetkinlikBilgileriFormuDTO(state, data) {
        state.anaYetkinliklerDTO = data.AnaYetkinlikler;
        state.yanYetkinliklerDTO = data.YanYetkinlikler;
        state.yabanciDillerDTO = data.YabanciDiller;
        state.hizmetlerDTO = data.Hizmetler;
    }
}

const actions = {
    getYetkinlikBilgileriFormu({ commit }) {
        let Fire = Firebase.db.collection('Admin').doc('YetkinlikBilgileri');
        Fire.get().then(function (doc) {
            if (doc.exists) {
                commit('yetkinlikBilgileriFormuDTO', doc.data())
                commit('isYetkinlikBilgileriFormuDTO', doc.exists)
            } else {
                console.log("Getirilecek veri yok")
                commit('isYetkinlikBilgileriFormuDTO', doc.exists)
            }
        }).catch(function (error) {
            console.log(error)
        })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}