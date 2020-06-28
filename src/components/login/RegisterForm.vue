<template>
  <div class="wrap">
    <div class="login">
      <form class="register-form" action="#" @submit.prevent="register">
        <div class="form-header">
          <h3>OutStagram</h3>
        </div>
        <!--Email Input-->
        <div class="form-group">
          <input type="email" class="form-input" placeholder="이메일" v-model="email" />
        </div>
        <div class="form-group">
          <input type="text" class="form-input" placeholder="닉네임" v-model="nickname"/>
        </div>
        <!--Password Input-->
        <div class="form-group">
          <input type="password"  class="form-input" placeholder="비밀번호" v-model="password" />
        </div>
        <div class="form-group">
          <input type="password" class="form-input" placeholder="비밀번호 재입력" />
        </div>
        <!--Login Button-->
        <div class="form-group">
          <button disabled class="form-button" type="text">가입하기</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "register-form",
  data() {
    return {
      email : '',
      nickname : '',
      password : '',

    }
  }
};
</script>

<style scoped>
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
</style>