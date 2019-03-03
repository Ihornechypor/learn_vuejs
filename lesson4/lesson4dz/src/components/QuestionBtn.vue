<template>
  <div>

    <br>
    <button :class="btnActiwated.color" @click="nextAnswer"
                                        :disabled="this.answered[this.caunter].userNoActivated"

                                        >
      Далее
    </button>

  </div>
</template>
<script>
  export default {
    props: ['answered','caunter', 'questionLength'],
    methods: {
      nextAnswer(){
        let showNext = this.caunter;
        let isNoFinished = true;
        showNext++;
        if (showNext == this.questionLength) {
          showNext = 0;
          isNoFinished = false;
        }

        this.$emit('showNext', {
          showNext,
          isNoFinished
        });
      }
    },
    computed: {
      btnActiwated(){
        if (this.answered[this.caunter].userNoActivated){
            return {
              color: 'btn btn-danger'
            }
        } else {
          return {
            color: 'btn btn-success'
          }

        }

      }
    }


  }
</script>
