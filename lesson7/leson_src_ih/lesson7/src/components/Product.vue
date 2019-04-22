<template>
  <div class="">
    <h3>Product name: </h3>
    {{id}}
    <br>
    {{product.name}}
    <br>
    {{product.price}}
    <br>
    <router-link :to="{ name: 'products'}">
      back to products
    </router-link>
    <br>
    <!-- add to cart homework  -->
    <button v-if="inCart.indexOf(product.id_prod) === -1"
      type="button"
      name="add"
      @click="addToCart(product.id_prod)"
      >
      add
    </button>
    <button v-else
      type="button"
      name="add2"
      @click="removeCart(product.id_prod)"
      >
      delite
    </button>
  </div>

</template>

<script>

import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {


  computed: {
    ...mapGetters('products',{
      products: 'items'
    }),
    ...mapGetters('cart',{
      inCart: 'products'
    }),
    id(){
      return this.$route.params.id
    },
    product(){
      return this.$store.getters['products/item'](this.id);
    }
  },
  methods: {
    ...mapActions('cart',{
      addToCart: 'add',
      removeCart: 'remove'
    })
  }

}
</script>
