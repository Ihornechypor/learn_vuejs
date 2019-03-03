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
              <input
                  name="userAnswer"
                  :type="type"
                  :value="answers[index]"
                  @input="answered($event.target.value)"
                  >
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
    props: ['title','answers','type','questionLength','clickedValue','caunter','userAnswered'],
    computed: {

    },
    methods: {
      answered(value){
        let answer = [];
        let userNoActivated = this.userAnswered[this.caunter].userNoActivated;
        if (value == '') {
          userNoActivated = true
        } else {
          userNoActivated = false
        }
        answer.push(value);
        let userAnswerIndex = this.caunter;
        this.$emit('userAnswers', {
                            userAnswerIndex,
                            userNoActivated,
                            answer


                        });
      }

    }



  }
</script>
