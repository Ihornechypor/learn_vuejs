<template>
        <div>
          <label :for="this.name">
            {{ this.name }}
            <i class="fa fa-exclamation-circle" ref="icon" v-show="activated"></i>
          </label>
          <br>
          <input type="text" @input="changed($event.target.value)">
        </div>
</template>
<script>
  export default {
    props: ['name','index','objlength','patterns','value'],
    data(){
      return {
        activated: this.value != ''
      }
    },
    methods:{
      changed(value){
        this.activated = true;
        let icon = this.$refs.icon;
        let checkField = this.patterns;
        let trueField = checkField.test(value);
        if(trueField){
          icon.style.color = 'green';
        } else if (!trueField){
          icon.style.color = 'red';
        }

        this.$emit('values', {
                              indexValue: this.index,
                              value,
                              trueField,
                              activated: this.activated
                            });
      }
    }


  }
</script>
