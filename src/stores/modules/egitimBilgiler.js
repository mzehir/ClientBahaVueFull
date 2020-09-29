import Firebase from "../../config/firebase";
import { firestore } from "firebase";

const state = {
    isEgitimBilgileriFormuDTO : false,
    okunanOkullarDTO : [],
}

const getters = {

}

const mutations = {
    isEgitimBilgileriFormuDTO(state, data) {
        state.isEgitimBilgileriFormuDTO = data;
    },

    egitimBilgileriFormuDTO(state, data) {
        state.okunanOkullarDTO = data.OkunanOkullar;
    }
}

const actions = {
    getEgitimBilgileriFormu({ commit }) {
        let Fire = Firebase.db.collection('Admin').doc('EgitimBilgileri');
        Fire.get().then(function (doc) {
            if (doc.exists) {
                commit('egitimBilgileriFormuDTO', doc.data())
                commit('isEgitimBilgileriFormuDTO', doc.exists)
            } else {
                console.log("Getirilecek veri yok")
                commit('isEgitimBilgileriFormuDTO', doc.exists)
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