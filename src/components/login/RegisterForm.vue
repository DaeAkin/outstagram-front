<template>
  <div class="wrap">
    <div class="login">
      <form class="register-form" action="#" @submit.prevent="registerUser">
        <div class="form-header">
          <h3>OutStagram</h3>
        </div>
        <!--Email Input-->
        <div class="form-group">
          <input type="email" class="form-input" placeholder="이메일" v-model="email" />
           <div class="error" v-if="!$v.email.required">이메일을 입력해주세요.</div>
        </div>
        <div class="form-group">
          <input type="text" class="form-input" placeholder="닉네임" v-model="nickname" />
        </div>
        <!--Password Input-->
        <div class="form-group">
          <input type="password" class="form-input" placeholder="비밀번호" v-model="password" />
        </div>
        <div class="form-group">
          <input type="password" class="form-input" placeholder="비밀번호 재입력" />
        </div>
        <!--Login Button-->
        <div class="form-group">
          <button class="form-button" type="submit" >가입하기</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required,email,sameAs, minLength, between } from "vuelidate/lib/validators";

export default {
  name: "register-form",
  data() {
    return {
      email: "",
      nickname: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    nickname : {
      required
    },
    password : {
      required
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    registerUser() {
      
      this.$store.dispatch('registerUser', {
        email : this.email,
        nickname : this.nickname,
        password : this.password
      })
    }
  }
};
</script>

<style scoped>
.error { 
  font-size: 0.7rem;
  color : red;
  margin: 0.5rem;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  font-family: "Segoe UI", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  height: 100%;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register-form {
  width: 350px;
  margin: 0 auto;
  border: 1px solid #ddd;
  padding: 2rem;
  background: #ffffff;
}
.form-input {
  background: #fafafa;
  border: 1px solid #eeeeee;
  padding: 12px;
  width: 100%;
  
}
.form-group {
  margin-bottom: 1rem;
}
.form-button {
  background: gray;
  border: 1px solid #ddd;
  color: #ffffff;
  padding: 10px;
  width: 100%;
  text-transform: uppercase;
}

.form-button-active {
  background: green;
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}
.form-footer {
  text-align: center;
}

.form-group--alert,
.form-group--error {
  animation-name: shakeError;
  animation-fill-mode: forwards;
  animation-duration: .6s;
  animation-timing-function: ease-in-out; }

@keyframes shakeError {
  0% {
    transform: translateX(0); }
  15% {
    transform: translateX(0.375rem); }
  30% {
    transform: translateX(-0.375rem); }
  45% {
    transform: translateX(0.375rem); }
  60% {
    transform: translateX(-0.375rem); }
  75% {
    transform: translateX(0.375rem); }
  90% {
    transform: translateX(-0.375rem); }
  100% {
    transform: translateX(0); } }
</style>