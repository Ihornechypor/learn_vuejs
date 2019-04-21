<template>
  <div class="container">
    <form v-show="formNoSubmit" @submit.prevent>
      <!-- <transition name="boom" mode="out-in"> -->
        <div>
          <AppProgress></AppProgress>
          <AppInput v-for="(item, index) in info" :index="index"></AppInput>
          <AppCorrect></AppCorrect>
        </div>

      <!-- </transition> -->


    </form>
    <div v-show="!formNoSubmit">
      <AppTotal v-for="(item, index) in info" :index="index"
                                              :valued.sync="item.value" >
      </AppTotal>

    </div>
  </div>
</template>
<script>

import AppProgress from  './components/Progress';
import AppInput from  './components/Input';
import AppCorrect from  './components/Correct';
import AppTotal from  './components/Total';

import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';


export default {
  computed: {
    ...mapGetters([
      'info',
      'formNoSubmit'
    ])
  },
  created(){
    this.$store.commit('updateControls');

  },
  methods: {


  },
  components: {
    AppProgress,
    AppInput,
    AppCorrect,
    AppTotal
  }


}
</script>
<style>
.container {
  margin-top: 10px;
}
.boom-enter {
}
.boom-enter-active {
  animation: slideIn 0.5s;

}
.boom-enter-to {

}

.boom-leave {
}
.boom-leave-active {
  animation-name: slideOut 0.5s;
}
.boom-leave-to {
}

@keyframes slideIn {
  from{transform: translateX(2000px);}
  to{ransform: translateX(0px);}

}
@keyframes slideOut {
  from{transform: translateX(0px);}
  to{transform: translateX(-2000px);}

}

</style>
