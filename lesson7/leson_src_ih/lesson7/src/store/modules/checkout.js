export default {
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
          controlActive: [],
          controlTrue: [],
          done: 0,
          formNoSubmit: true
    },
    getters: {
      info(state){
        return state.info
      },
      controlActive(state){
        return state.controlActive
      },
      controlTrue(state){
        return state.controlTrue
      },
      done(state){
        return state.done
      },
      formNoSubmit(state){
        return state.formNoSubmit
      }

    },
    mutations: {
      updateControls(state){
        for(let i = 0; i < state.info.length; i++){
          state.controlActive.push(false);
        }
        for(let i = 0; i < state.info.length; i++){
          state.controlTrue.push(false);
        }
      },
      formSubmitted(state){
        state.formNoSubmit = false;
      },
      updateInputs(state, payload){
         let checkField = state.info[payload.i].pattern;
         let done = 0;

         Vue.set(state.info[payload.i], 'value', payload.val);
         console.log(state.info[payload.i].value)
         Vue.set(state.controlTrue, payload.i, state.controlTrue[payload.i] = checkField.test(payload.val));
         Vue.set(state.controlActive, payload.i, true);

           for (let i = 0; i < state.controlTrue.length; i++) {
             if(state.controlTrue[i]) {
               done++;
             }
           }
           state.done = done;

      }

    },
    actions: {


    },
    strict: process.env.NODE_EBN !== 'prodaction'
});
