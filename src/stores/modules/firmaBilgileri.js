import Firebase from "../../config/firebase";
import { firestore } from "firebase";

const state = {
    isFirmaBilgileriFormuDTO : false,
    calisilanFirmalarDTO : []
}

const getters = {

}

const mutations = {
    isFirmaBilgileriFormuDTO(state, data) {
        state.isFirmaBilgileriFormuDTO = data;
    },

    firmaBilgileriFormuDTO(state, data) {
        state.calisilanFirmalarDTO = data.CalisilanFirmalar;
    }
}

const actions = {
    getFirmaBilgileriFormu({ commit }) {
        let Fire = Firebase.db.collection('Admin').doc('FirmaBilgileri');
        Fire.get().then(function (doc) {
            if (doc.exists) {
                commit('firmaBilgileriFormuDTO', doc.data())
                commit('isFirmaBilgileriFormuDTO', doc.exists)
            } else {
                console.log("Getirilecek veri yok")
                commit('isFirmaBilgileriFormuDTO', doc.exists)
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