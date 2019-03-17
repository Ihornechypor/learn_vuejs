<template>

  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="12" aria-valuemin="15" aria-valuemax="100"  :style="progressWidth"></div>
  </div>



</template>
<script>
  export default {
    props: ['done','controlslength'],
    computed: {
      progressWidth(){
        return {
          width: (this.done / this.controlslength * 100) + '%'
        }
      }
    }



  }
</script>
