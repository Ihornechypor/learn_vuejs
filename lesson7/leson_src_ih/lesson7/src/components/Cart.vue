<template>
  <div>
    <h1>cart</h1>
    <div class="" v-if="empty">
      add products to chart
    </div>
    <template v-else>
    <table >
      <tr>
        <td>
          Name
        </td>
        <td>
          Price
        </td>
      </tr>
      <tr v-for="item in products">
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.price }}
        </td>
      </tr>
    </table> <br>
    <button type="button" name="order now" @click="onOrder">
      order now
    </button>


    </template>

  </div>

</template>

<script>
import {mapGetters} from 'vuex';


export default {
    computed:{
      ...mapGetters('cart',{
        prodInCart: 'products'
      }),
      ...mapGetters('products',{
        prodAll: 'items'
      }),
      products(){
        return this.prodAll.filter(elem => {
          return this.prodInCart.indexOf(elem.id_prod) !== -1
        });
      },
      empty(){
        return this.prodInCart.length === 0
      }
    },
    methods: {
      onOrder(){
        this.$router.push('/checkout')
      }
    }
}
</script>
