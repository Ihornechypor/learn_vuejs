<template>
  <div class="">
    <h3>Product name: </h3>
    {{id}}
    <br>
    {{product.title}}
    {{product.price}}
    <router-link :to="{ name: 'products'}">
      back to products
    </router-link>
    <!-- add to cart homework  -->

  </div>

</template>

<script>


export default {
  computed: {
    id(){
      return this.$route.params.id
    },
    product(){
      return this.$store.getters['products/item'](this.id);
    }

}

}
</script>
