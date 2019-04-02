<template>
  <div>
    <label :for="info[index].name">
      {{ info[index].name }}
      <i :class="istTrue" v-show="controls[index].active"></i>
    </label>
    <br>
    <input type="text" @input="changed($event.target.value, index)">
    {{ istTrue }}
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
      'controls'
    ]),
    istTrue(){
      if(this.controls[this.index]){
        return 'fa'
      } else {
        return 'fa fa-circle'
      }

    }
  },
  // data(){
  //   return {
  //     controls: []
  //   }
  // },
  // created(){
  //   for(let i = 0; i < this.info.length; i++){
  //     this.controls.push({
  //       active: false,
  //       error: true
  //     });
  //   }
  // },
  methods:{
    changed(val,i){
      this.$store.commit('updateInputs', {val, i})
    }


  }


}
</script>
