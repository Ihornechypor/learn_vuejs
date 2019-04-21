<template>
  <div class="app">
    <div class="cont">
      <header>
        <h1>site</h1>
      </header>
      <div class="" >
        inCart {{ countProdInCart }}
      </div>
    </div>
    <div class="cont">
      <div class="">
        <ul>
          <router-link v-for="(item,index) in menu"
            :key="index"
            :to="item.url"
            tag="li"
            active-class="active"

            >
            <a>
              {{item.text}}
            </a>
          </router-link>
        </ul>

      </div>
      <div class="">
        <transition>
          <router-view></router-view>

        </transition>

      </div>
    </div>




  </div>


</template>

<script>

import {mapGetters} from 'vuex';

export default {

  name: 'app',
  computed: {
    ...mapGetters('menu',{
      menu: 'items'
    }),
    ...mapGetters('cart',{
      countProdInCart: 'cnt'
    }),


  }
}
</script>
<style>
.active a{
  color: red;
}
  .cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

  }
  ul{
    padding: 0;
    margin: 0;
  }
</style>
