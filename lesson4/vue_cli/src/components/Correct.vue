<template>
  <div>
    <br />
    <button class="btn" :class="alltrue" :disabled="this.done < this.objlength">send</button>
  </div>
</template>
<script>
  export default {
    props: ['done','objlength'],
    computed: {
      alltrue(){
        if (this.done === this.objlength) {
          return 'btn-true';
        } else {
            return 'btn-danger';
        }
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
