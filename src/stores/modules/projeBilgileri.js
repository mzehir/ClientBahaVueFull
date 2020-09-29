import Firebase from "../../config/firebase";
import { firestore } from "firebase";

const state = {
    isProjeBilgileriFormuDTO : false,
    calismaSureciDTO : [],
    portfoylerDTO : [],
}

const getters = {

}

const mutations = {
    isProjeBilgileriFormuDTO(state, data) {
        state.isProjeBilgileriFormuDTO = data;
    },

    projeBilgileriFormuDTO(state, data) {
        state.calismaSureciDTO = data.CalismaSureci;
        state.portfoylerDTO = data.portfoyler;
    }
}

const actions = {
    getProjeBilgileriFormu({ commit }) {
        let Fire = Firebase.db.collection('Admin').doc('ProjeBilgileri');
        Fire.get().then(function (doc) {
            if (doc.exists) {
                commit('projeBilgileriFormuDTO', doc.data())
                commit('isProjeBilgileriFormuDTO', doc.exists)
            } else {
                console.log("Getirilecek veri yok")
                commit('isProjeBilgileriFormuDTO', doc.exists)
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