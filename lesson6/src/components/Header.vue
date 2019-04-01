<template>
  <div class="">
    <AppCart></AppCart>
    <br>
    <button type="button" name="order"
            :disabled="btnDisabled"
            @click="orderClick"
    >
    order
    </button><br>
    <div v-show="order">
      sdd
    </div>
  </div>

</template>

<script>
import AppCart from './Cart';
import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'cnt',
      'order'
    ]),
    btnDisabled(){
      return this.cnt < 1;
    }
  },
  methods: {
    ...mapMutations([
      'orderClick'
    ])
  },
  components: {
    AppCart
  }

}
</script>
