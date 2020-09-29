import Firebase from "../../config/firebase";
import { firestore } from "firebase";

const state = {
    isIletisimFormuDTO: false,
    iletisimBilgileri: [],
    smHesaplari: [],
    referanslar: [],
    kordinaatBilgisi: [],

    isPostaKutusuFullDTO: false,
    postaKutusuDTO: [],
}

const getters = {

}

const mutations = {
    isIletisimFormuDTO(state, data) {
        state.isIletisimFormuDTO = data;
    },

    iletisimFormuDTO(state, data) {
        state.iletisimBilgileri = data.IletisimBilgileri;
        state.smHesaplari = data.SMHesaplari;
        state.referanslar = data.Referanslar;
    },

    isPostaKutusuFullDTO(state, data) {
        state.isPostaKutusuFullDTO = data
    },

    getPostaKutusuDTO(state, data) {
        state.postaKutusuDTO = data.Postalar
    }
}

const actions = {
    getIletisimBilgileriFormu({ commit }) {
        let Fire = Firebase.db.collection('Admin').doc('IletisimFormu');
        Fire.get().then(function (doc) {
            if (doc.exists) {
                commit('iletisimFormuDTO', doc.data())
                commit('isIletisimFormuDTO', doc.exists)
            } else {
                console.log("Getirilecek veri yok")
                commit('isIletisimFormuDTO', doc.exists)
            }
        }).catch(function (error) {
            console.log(error)
        })
    },

    mailServices({ dispatch }, data) {
        debugger
        dispatch("getPostalar", data);
    },

    getPostalar({ state, dispatch, commit }, data) {
        debugger
        let Fire = Firebase.db.collection('Admin').doc('PostaKutusu');
        Fire.get().then(function (doc) {
            if (doc.exists) {
                commit('getPostaKutusuDTO', doc.data())
                commit('isPostaKutusuFullDTO', doc.exists)
            } else {
                console.log("Getirilecek veri yok")
                commit('isPostaKutusuFullDTO', doc.exists)
            }
        }).then(function () {
            dispatch("postaSendToFire", data);
        })
    },

    postaSendToFire({ state }, data) {
        debugger
        let postalarList = [];
        if (state.isPostaKutusuFullDTO) {
            if (state.postaKutusuDTO) {
                for (let i = 0; i < state.postaKutusuDTO.length; i++) {
                    postalarList.push(state.postaKutusuDTO[i])
                }
                postalarList.push(data)
                Firebase.db.collection('Admin').doc('PostaKutusu').update({
                    "Postalar": postalarList
                }).then(function () {
                    alert("Mesajınız gönderilmiştir.");
                });
            }
            else {
                postalarList.push(data)
                Firebase.db.collection("Admin").doc("PostaKutusu").update({
                    "Postalar": postalarList
                }).then(function () {
                    alert("Mesajınız gönderilmiştir.");
                });
            }
        }
        else {
            postalarList.push(data)
            Firebase.db.collection("Admin").doc("PostaKutusu").set({
                "Postalar": postalarList
            }).then(function () {
                alert("Mesajınız gönderilmiştir.");
            });
        }
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}