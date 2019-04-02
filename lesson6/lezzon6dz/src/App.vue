<template>
  <div class="container">
    <form>
      <!-- <transition name="boom" mode="out-in"> -->
        <div>
          <!-- <AppProgress></AppProgress> -->
          <AppInput v-for="(item, index) in info" :index="index"></AppInput>
          <!-- <AppCorrect></AppCorrect> -->
        </div>
        <div>
          <!-- <AppTotal></AppTotal> -->
        </div>
      <!-- </transition> -->


    </form>
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
      'controls'
    ])
  },
  created(){
    this.$store.commit('updateControls');



  },
  methods: {
    // onchaged(data){
    //   this.info[data.indexValue].value = data.value;
    //   this.controls[data.indexValue].active = data.activated;
    //   this.controls[data.indexValue].noerror = data.trueField;
    //   let done = 0;
    //   for (let i = 0; i < this.controls.length; i++) {
    //     if(this.controls[i].noerror) {
    //       done++;
    //     }
    //   }
    //   this.done = done;
    // }

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
