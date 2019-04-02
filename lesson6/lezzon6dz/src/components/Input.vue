<template>
  <div>
    <label :for="info[index].name">
      {{ info[index].name }}
      <i class="fa fa-exclamation-circle" ref="icon" v-show="this.controls[index].active"></i>
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
      'info'
    ])
  },
  data(){
    return {
      controls: []
    }
  },
  created(){
    for(let i = 0; i < this.info.length; i++){
      this.controls.push({
        active: false,
        error: true
      });
    }
  },
  methods:{
    changed(value, i){
      this.controls[i].active = true;
      let icon = this.$refs.icon;
      let checkField = this.info[i].pattern;
      let trueField = checkField.test(value);
      if(trueField){
        icon.style.color = 'green';
      } else if (!trueField){
        icon.style.color = 'red';
      }

    }
  }


}
</script>
