import Vue from 'vue';
export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    items(state){
      return state.items
    },
    itemsMap(state){
      let itemsMap = {};
      for(let i = 0; i < state.items.length; i++){
        let product = state.items[i];
        itemsMap[product.id_prod] = product;
      }
      return itemsMap;

    },
    item: (state,getters) => (id) => {
      return getters.itemsMap[id]
    }

  },
  mutations: {
    loadItems(state,data){
      state.items = data;
    }

  },
  actions: {
    loadItems(store){
      Vue.http.get('prod.php')
        .then(response => response.json())
        .then(data => {
          store.commit('loadItems', data)
        })

    }

  }
};

// function GetPruducts(){
//   return [
//     {
//       id_prod: 13,
//       name: 'phone1',
//       price: 20
//     },
//     {
//       id_prod: 23,
//       name: 'phone2',
//       price: 30
//     },
//     {
//       id_prod: 33,
//       name: 'phone3',
//       price: 40
//     }
//   ]
// }
