<template>
  <div>
    <br />
    <button class="btn" :class="alltrue" :disabled="done < info.length" @click="formSubmitted()">send</button>

  </div>

</template>
<script>
import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'done',
        'info'
      ]),
      alltrue(){
        if (this.done === this.info.length) {
          return 'btn-true';
        } else {
            return 'btn-danger';
        }
      }

    },
    methods:{
      formSubmitted(){
        this.$store.commit('formSubmitted');
      }

    }

  }
</script>
<style scoped>
.btn.btn-true {
background-color: green;
color: white;
}
</style>
