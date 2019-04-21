import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductList from './components/ProductsList';
import Product from './components/Product';



const routes = [

	{
		path: '/products',
		component: ProductList,
	},
	{
		path: '/cart',
		component: Cart
	}

];

export const router = new VueRouter({
	routes
});
