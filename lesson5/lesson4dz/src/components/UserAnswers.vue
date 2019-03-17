<template>
  <div>
      <h2>Ваши ответы</h2>
      <div class="col-md-3">
        Вопрос
        <table>
          <tbody>
            <tr v-for="item in this.title">
              <td >
                {{ item.title }}
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      <div class="col-md-8">
        Ответ
        <table>
          <tbody>
            <tr v-for="item in this.userAnswered">
              <td >
                {{ item.userAswer }}
              </td>
            </tr>
          </tbody>
        </table>

      </div>














  </div>
</template>
<script>
  export default {
    props: ['title','userAnswered'],
    created(){

    }

  }
</script>
