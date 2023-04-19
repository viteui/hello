import Vue from 'vue'
import Vuex from '../../vuex/dist/vuex.esm'

console.log(Vuex)
Vue.use(Vuex)

const fetchApi = ()=>{
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve()
    }, 1000);
  })
}
const store = new Vuex.Store({
  state: {
    count: 0,
    num:1
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.num+=2
    }
  },
  actions:{
   async asyncAdd({commit}){
     await fetchApi()
     commit("increment")
      return {
        data:"action return value"
      }
    }
  }
})

export default store