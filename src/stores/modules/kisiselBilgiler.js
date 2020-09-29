import Firebase from "../../config/firebase";
import { firestore } from "firebase";

const state = {
    isKisiselBilgilerFormuDTO: false,
    personelBilgileriDTO: [],
    hobilerDTO: [],
    onYazi: [],
    cvURL: "",
    fotoURL: "",
    muzikURL: ""
}

const getters = {

}

const mutations = {
    isKisiselBilgilerFormuDTO(state, data) {
        state.isKisiselBilgilerFormuDTO = data;
    },

    kisiselBilgilerFormuDTO(state, data) {
        state.personelBilgileriDTO = data.PersonelBilgileri;
        state.hobilerDTO = data.Hobiler;
        state.onYazi = data.OnYazi;
        state.cvURL = data.cvUrl;
        state.fotoURL = data.fotoUrl;
        state.muzikURL = data.muzikUrl;
    }
}

const actions = {
    getKisiselBilgilerFormu({ commit }) {
        let Fire = Firebase.db.collection('Admin').doc('KisiselBilgiler');
        Fire.get().then(function (doc) {
            if (doc.exists) {
                commit('kisiselBilgilerFormuDTO', doc.data())
                commit('isKisiselBilgilerFormuDTO', doc.exists)
            } else {
                console.log("Getirilecek veri yok")
                commit('isKisiselBilgilerFormuDTO', doc.exists)
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