import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : localStorage.getItem('access_token') || null,
  },
  getters : {
    loggedIn(state) {
      return state.token !== null
  },
  },
  mutations: {
    retrieveToken(state,token) {
      state.token = token
  },
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
    },

    retrieveToken(context,credentials) {

      return new Promise((resolve,reject) => {
      const data = qs.stringify({
          username : credentials.email,
          password : credentials.password,
          grant_type : 'password'
      })

      const headers = {
          headers : {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Basic b3V0c3RhZ3JhbTp0aGlzaXNzZWNyZXQ='
          }
      }
      axios.post('/api/authservice/oauth/token',data,headers)
      .then(response => {
          const token = response.data.access_token;
          localStorage.setItem('access_token',token)
          context.commit('retrieveToken',token)
          //부모(Login.Vue)에게 이 post 요청이 성공했는지 실패했는지 알려줌
          resolve(response)
      })
      .catch(error => {
          alert("아이디나 비밀번호가 틀립니다.")
          console.log(error)
          reject(error)
      })
  })
},
    
  },
  modules: {
  }
})
