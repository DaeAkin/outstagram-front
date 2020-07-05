<template>
  <div id="home">
    <div class="main">
      <div class="wrap">
        <div class="iphone">
          <div class="change-image">
            <Silder />
          </div>
        </div>
        <div class="login">
          <form class="login-form" action @submit.prevent="login">
            <div class="form-header">
              <h3>OutStagram</h3>
            </div>
            <!--Email Input-->
            <div class="form-group">
              <input type="text" class="form-input" placeholder="email@example.com" v-model="email" />
            </div>
            <!--Password Input-->
            <div class="form-group">
              <input type="password" class="form-input" placeholder="password" v-model="password" />
            </div>
            <!--Login Button-->
            <div class="form-group">
              <button class="form-button" type="submit">로그인</button>
            </div>
            <div class="form-footer">
              계정이 없으신가요?
              <router-link :to="{name : 'register'}">가입하기</router-link>
            </div>
            <div class="form-footer">비밀번호를 잊으셨나요?</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Silder from "./Slider";

export default {
  name: "Home",
  components: {
    Silder
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("retrieveToken", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.$router.push({ name: "feed" });
        });
    }
  }
};
</script>


<style scoped>
.change-image {
  margin: 99px 0 0 151px;
  position: relative;
}
#home {
  width: 100%;
  margin: 40px 0 0;
}
.iphone {
  background-position: 0 0;
  background-size: 454px 618px;
  width: 464px;
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
