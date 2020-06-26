<template>
  <div id="home">
    <slider/>
    <div class="main">
      <div class="wrap">
        <div class="iphone"></div>
        <div class="login">
          <form class="login-form" action>
            <div class="form-header">
              <h3>OutStagram</h3>
            </div>
            <!--Email Input-->
            <div class="form-group">
              <input type="text" class="form-input" placeholder="email@example.com" />
            </div>
            <!--Password Input-->
            <div class="form-group">
              <input type="password" class="form-input" placeholder="password" />
            </div>
            <!--Login Button-->
            <div class="form-group">
              <button class="form-button" type="submit">로그인</button>
            </div>
            <div class="form-footer">
              계정이 없으신가요?
              <a href="#">가입하기</a>
            </div>
            <div class="form-footer">
              비밀번호를 잊으셨나요?
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Silder from "./Slider"

export default {
  name: "Home",
  components: {
    Silder
  }
};
</script>


<style scoped>
#home {
  width: 100%;
  margin: 40px 0 0;
}
.iphone {
  background-position: 0 0;
  background-size: 454px 618px;
  width: 464px;
  /* background-color: blue; */
  background-image: url("../assets/iphone.png");
  background-repeat: no-repeat;
  height: 618px;
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
.login-form {
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
  background: #69d2e7;
  border: 1px solid #ddd;
  color: #ffffff;
  padding: 10px;
  width: 100%;
  text-transform: uppercase;
}
.form-button:hover {
  background: #69c8e7;
}
.form-header {
  text-align: center;
  margin-bottom: 2rem;
}
.form-footer {
  text-align: center;
}
</style>
