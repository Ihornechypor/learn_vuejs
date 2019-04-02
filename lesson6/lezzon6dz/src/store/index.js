import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
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
    },
    getters: {
      info(state){
        return [
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
        ]
      },
      controls(state){
        return state.controls
      },
      done(state){
        return state.done
      },
      formSubmit(state){
        return state.formSubmit
      }

    },
    mutations: {
      updateControls(state){
        for(let i = 0; i < state.info.length; i++){
          state.controls.push({
            active: false,
            error: true
          });
        }
      },
      updateInputs(state, payload){
        let checkField = state.info[payload.i].pattern;
        state.controls[payload.i].active = true;
        state.controls[payload.i].error = checkField.test(payload.val);
        state.$set(state.controls, payload.i, payload.val);
        // if(trueField){
        //   icon.style.color = 'green';
        // } else if (!trueField){
        //   icon.style.color = 'red';
        // }
      }

    },
    actions: {


    },
    strict: process.env.NODE_EBN !== 'prodaction'
});
