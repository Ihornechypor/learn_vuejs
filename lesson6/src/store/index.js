import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      cnt: 0,
      price: 1000,
      order: false
    },
    getters: {
      cnt(state){
        return state.cnt
      },
      price(state){
        return state.price
      },
      total(state){
        return state.cnt * state.price
      },
      order(state){
          return state.order
      }
    },
    mutations: {
      minus(state){
        if(state.cnt > 0) {
          state.cnt--;
        }
      },
      plus(state){
        state.cnt++;
      },
      orderClick(state){
        state.order = true;
      }
    },
    actions: {
      sendOrder(store){
        store.commit('orderClick');
        setTimeout();
      }

    },
    strict: process.env.NODE_EBN !== 'prodaction'
});
