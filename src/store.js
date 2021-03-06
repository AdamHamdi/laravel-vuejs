import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.store({
    state: {
        loggedIn: false,
        user: null,
        token: null
    },
    mutations: {
        SET_user(state, payload) {
            state.user = payload;
        },
        SET_loggedIn(state, payload) {
            state.loggedIn = payload;
        },
        SET_token(state, payload) {
            state.token = payload;
        }
    },
    actions: {

    },
    getters: {
        get_loggedIn(state) {
            return state.loggedIn;
        }
    }
});