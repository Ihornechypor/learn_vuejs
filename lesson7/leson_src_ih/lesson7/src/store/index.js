import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
import cart from './modules/cart';
import menu from './modules/menu';
import products from './modules/products';
import checkout from './modules/checkout';

export const store = new Vuex.Store({
  modules: {
    cart,
    menu,
    products,
    checkout
  },
  strict: process.env.NODE_EBN !== 'prodaction'
});
