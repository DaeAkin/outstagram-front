import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    registerUser(context,registerInfo) { 
      axios.post('/api/loginservice/user/join', {
        email : registerInfo.email,
        nickname : registerInfo.nickname,
        password : registerInfo.password
      })
      .then(response => {
        console.log(response)
      })
    }
    
  },
  modules: {
  }
})
