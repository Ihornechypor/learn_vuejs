<template>
  <div class="container">
    <div v-if="isNoFinished">
      <form v-on:submit.prevent>
        <Question
                                                :title="this.info[this.caunter].title"
                                                :answers="this.info[this.caunter].answers"
                                                :type="this.info[this.caunter].name"
                                                :questionLength="info.length"
                                                :caunter = "this.caunter"
                                                :userAnswered = "this.userAnswered"
                                                @userAnswers = "answered"
                                                >

        </Question>

        <QuestionBtn :answered = "this.userAnswered"
                     :caunter = "this.caunter"
                     :questionLength="info.length"
                     @showNext = "nextAnswer"

                      >

        </QuestionBtn>
      </form>
    </div>
    <div v-else>
      <UserAnswers
                          :title = "this.info"
                          :userAnswered = "this.userAnswered"


                    >

      </UserAnswers>
    </div>


  </div>

</template>

<script>

import Question from  './components/Question';
import QuestionBtn from  './components/QuestionBtn';
import UserAnswers from  './components/UserAnswers';
export default {
  data() {
      return {
        info:[
          {
            name: 'radio',
            title: 'Какой тег задает ссылку?',
            answers: ['a','div','span','img']
          },
          {
            name: 'checkbox',
            title: 'Какие из тегов строчные?',
            answers: ['a','div','span','img']
          }
        ],
        isNoFinished: true,
        userAnswered: [],
        caunter: 0
      }

},
created() {
  for (let i = 0; i < this.info.length; i++) {
    this.userAnswered.push({
      userNoActivated: true,
      userAswer: ''
    });
  }


},
methods: {
  answered(data) {
    this.userAnswered[data.userAnswerIndex].userNoActivated = data.userNoActivated;
    this.userAnswered[data.userAnswerIndex].userAswer = data.answer;

  },
  nextAnswer(data) {
    this.caunter = data.showNext;
    this.isNoFinished = data.isNoFinished;
  },



},
computed: {


},
components: {
  Question,
  QuestionBtn,
  UserAnswers

}
}

</script>
