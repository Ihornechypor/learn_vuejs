<template>

  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="12" aria-valuemin="15" aria-valuemax="100"  :style="progressWidth"></div>
  </div>



</template>
<script>
import {mapGetters} from 'Vuex'

  export default {
    computed: {
      ...mapGetters([
        'done',
        'info'
      ]),
      progressWidth(){
        return {
          width: (this.done / this.info.length * 100) + '%'
        }
      }
    }



  }
</script>
