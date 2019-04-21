import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Product from './components/Product';
import E404 from './components/E404';
import Checkout from './components/Checkout';

import {store} from './store/'

const routes = [
  {
    path: '',
    redirect: {name: 'products'}
  },
  {
    name: 'products',
    path: '/products',
    component: ProductList,
    beforeEnter(from, to, next){
      store.dispatch('products/loadItems')

      next();

    }
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/products/:id',
    component: Product
  },
  {
    path: '/checkout',
    component: Checkout
  },
  {
    path: '*',
    component: E404
  }
];

export const router = new VueRouter({
  routes,
  mode: 'history'
});
