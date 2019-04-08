<template>
  <div>
    <label :for="info[index].name">
      {{ info[index].name }}  {{info[index].value}}
      <i :class="istTrue" v-show="controlActive[index]"></i>
    </label>
    <br>
    <input type="text" @input="changed($event.target.value, index)">

  </div>

</template>
<script>

import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';

export default {
  props: ['index'],
  computed: {
    ...mapGetters([
      'info',
      'controlActive',
      'controlTrue'
    ]),
    istTrue(){
      if(this.controlTrue[this.index]){
        return 'fa fa-exclamation-circle'
      } else {
        return 'fa fa-exclamation-circle red'
      }

    }
  },
  methods:{
    changed(val,i){
      this.$store.commit('updateInputs', {val, i})
    }


  }


}
</script>
<style scoperd>
.red {
  color: red;
}

</style>
