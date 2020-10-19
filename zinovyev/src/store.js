import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state:{
        count: 0,
        style: '',
        user: null,
        card: []
    },
    mutations: {
        setCount: (state, count) => state.count = count,
        increment: (state) => state.count++,
        decrement: (state) => state.count--,
        setCard: (state, getcard) => state.card.push(getcard),
        //.push({tovar: tovar, tovarqty: 0});
    },
    getters: {
        getCount: (state) =>
        {
            return state.count
        },
        getUser: (state) =>
        {
            return state.user
        },
        getStyle: (state) =>
        {
            return state.style
        },
        getCard: (state) =>
        {
            return state.card
        }
    }
})
export default store;