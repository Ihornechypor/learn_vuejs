export default {
  namespaced: true,
  state: { 
    items: [
      {
        url: '/products',
        text: 'Product List'
      },
      {
        url: '/cart',
        text: 'Cart'
      },
      {
        url: '/checkout',
        text: 'Order'
      }
    ]
  },
  getters: {
    items(state){
      return state.items
    }
  }
};
