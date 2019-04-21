<template>
  <div class="">
    <div class="products">
      <div class="product" v-for="(item,index) in products">
        <router-link :to="'/products/' + item.id_prod " tag="h3">
          <a>{{item.name}}</a>
        </router-link>

          <div class="">
            {{item.price}}
          </div>
          <br>
          <button v-if="inCart.indexOf(item.id_prod) === -1"
            type="button"
            name="add"
            @click="addToCart(item.id_prod)"
            >
            add
          </button>
          <button v-else
            type="button"
            name="add2"
            @click="removeCart(item.id_prod)"
            >
            delite
          </button>


      </div>
    </div>

    </div>

</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';



export default {
  created(){
    this.$store.dispatch('products/loadItems')

  },
  computed: {
    ...mapGetters('products',{
      products: 'items'
    }),
    ...mapGetters('cart',{
      inCart: 'products'
    })
  },
  methods: {
    ...mapActions('cart',{
      addToCart: 'add',
      removeCart: 'remove'
    })
  }

}
</script>
<style media="screen" scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 500px


}
.product {

}

</style>
