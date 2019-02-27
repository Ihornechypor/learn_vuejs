<template>
  <div v-show="true">
       <table>
        <tbody>
          <tr>
            <td colspan="2">
              {{ this.title }}
            </td>
          </tr>
          <tr v-for="(item,index) in this.answers">
            <td width="30px">
              <input :type="type" name="userAnswer" :value="answers[index]">
            </td>
            <td >
              {{ answers[index] }}
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
   
  export default {
    props: ['title','answers','type','questionLength'],
    computed: {
      theFirst(){
        return counter = 0;
      }
    },
    methods: {


    }



  }
</script>
