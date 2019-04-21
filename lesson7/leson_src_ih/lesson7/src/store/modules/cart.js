export default {
  namespaced: true,
  state: {
    products: []

  },
  getters: {
    products(state){
      return state.products
    },
    cnt(state){
     return state.products.length
    }
  },
  mutations: {
    add(state, id_prod){
      if(state.products.indexOf(id_prod) === -1){
        state.products.push(id_prod);
      }

    },
    remove(state, id_prod){
      let position = state.products.indexOf(id_prod);
      if(position !== -1){
        state.products.splice(position, 1);
      }

    }

  },
  actions: {
    add(store, id_prod){
      store.commit('add', id_prod);
    },
    remove(store, id_prod){
      store.commit('remove', id_prod);
    }

  }
};
