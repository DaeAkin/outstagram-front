import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)
//안됨.. 나중에 해결 Vuex 공부하기
export default new Vuex.Store({
  state: {
  },
  mutations: {
    registerUser() {

    }

  },
  actions: {
    registerUser(context,registerInfo) { 
      alert("a")
      axios.post('/api/user/join', {
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