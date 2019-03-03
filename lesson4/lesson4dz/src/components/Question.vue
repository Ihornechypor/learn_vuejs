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
                  name = "userAnswer"
                  ref = "checkedAnswers"
                  :type = "type"
                  :value = "answers[index]"
                  @input = "answered($event)"
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
        let checkedAnswers = this.$refs.checkedAnswers;
        for(let i = 0; i < checkedAnswers.length; i++){
          if(checkedAnswers[i].checked == true){
            answer.push(checkedAnswers[i].value);
          }

        }
        let userNoActivated = this.userAnswered[this.caunter].userNoActivated;
        if (value.target.checked !== true && answer == '') {
          userNoActivated = true
        } else {
          userNoActivated = false
        }
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
