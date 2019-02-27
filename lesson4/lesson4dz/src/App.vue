<template>
  <div class="container">
    <form>
      <Question
                                              :title="this.info[this.caunter].title"
                                              :answers="this.info[this.caunter].answers"
                                              :type="this.info[this.caunter].name"
                                              :questionLength="info.length">

      </Question>
      <QuestionBtn>
      </QuestionBtn>

    </form>

  </div>
</template>

<script>

import Question from  './components/Question';
import QuestionBtn from  './components/QuestionBtn';
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
        caunter: 0

      }

},
components: {
  Question,
  QuestionBtn

}
}

</script>
