<template>
    <div class="container">
    <form class="form" @submit.prevent = "formSubmit = true">
      <transition name="boom" mode="out-in">
    <div v-if="!formSubmit" key="c">
      <AppProgress :done="done"
                        :controlslength="controls.length"
                        >
      </AppProgress>
    <AppInput  v-for="(item,index) in info"
                                                   :key="index"
                                                   :name="item.name"
                                                   :value="item.value"
                                                   :index="index"
                                                   :patterns="item.pattern"
                                                   :objlength="info.length"
                                                   @values = "onchaged"
                                                   >
    </AppInput>
    <AppCorrect  :done="done"
                 :objlength="info.length"
          >
    </AppCorrect>
    </div>
    <div v-else key="b">
      <AppTotal v-for="(item,index) in info"
                                                   :key="item.id"
                                                   :valued="item.value"
                                                   >
      </AppTotal>
    </div>
    </transition>


</form>
</div>
</template>
<script>
import AppProgress from  './components/Progress';
import AppInput from  './components/Input';
import AppCorrect from  './components/Correct';
import AppTotal from  './components/Total';

  export default {
    data() {
      return {
        info: [
          {
            name: 'Name',
            value: '',
            pattern: /^[a-zA-Z ]{2,30}$/
          },
          {
            name: 'Phone',
            value: '',
            pattern: /^[0-9]{7,14}$/
          },
          {
            name: 'Email',
            value: '',
            pattern: /.+/
          },
          {
            name: 'Field1',
            value: '',
            pattern: /.+/
          },
          {
            name: 'Field2',
            value: '',
            pattern: /.+/
          }
        ],
        controls: [],
        done: 0,
        formSubmit: false
      }
    },
    created(){
      for(let i = 0; i < this.info.length; i++){
        this.controls.push({
          active: false,
          error: true
        });
      }
    },
    computed: {

    },
    methods: {
      onchaged(data){
        this.info[data.indexValue].value = data.value;
        this.controls[data.indexValue].active = data.activated;
        this.controls[data.indexValue].noerror = data.trueField;
        let done = 0;
        for (let i = 0; i < this.controls.length; i++) {
          if(this.controls[i].noerror) {
              done++;
          }
        }
        this.done = done;
      }

    },
    components: {
      AppProgress,
      AppInput,
      AppCorrect,
      AppTotal
    }


  }
</script>
<style>
.container {
  margin-top: 10px;
}
.boom-enter {
}
.boom-enter-active {
    animation: slideIn 0.5s;

}
.boom-enter-to {

}

.boom-leave {
}
.boom-leave-active {
  animation-name: slideOut 0.5s;
}
.boom-leave-to {
}

@keyframes slideIn {
  from{transform: translateX(2000px);}
  to{ransform: translateX(0px);}

}
@keyframes slideOut {
  from{transform: translateX(0px);}
  to{transform: translateX(-2000px);}

}

</style>
