export default {
	namespaced: true,
	state: {
		items: [
			{
				url: '/products',
				text: 'Products List'
			},
			{
				url: '/cart',
				text: 'Your Cart'
			},
			{
				url: '/checkout',
				text: 'Order Now'
			}
		]
	},
	getters: {
		items(state){
			return state.items;
		}
	}
};