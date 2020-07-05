<template>
  <div id="app">
        <header id="header">
        <section class="inner">

            <h1 class="logo">
                <a href="index.html">
                    <div class="sprite_insta_icon"></div>
                    <div class="sprite_write_logo"></div>
                </a>
            </h1>

            <div class="search_box">
                <input type="text" placeholder="검색" id="search-field">

                <div class="fake_field">
                    <span class="sprite_small_search_icon"></span>
                    <span>검색</span>
                </div>
            </div>

            <div class="right_icons">
                <a href="new_post.html"><div class="sprite_camera_icon"></div></a>
                <a href="login.html"><div class="sprite_compass_icon"></div></a>
                <a href="follow.html"><div class="sprite_heart_icon_outline"></div></a>
                <a href="profile.html"><div class="sprite_user_icon_outline"></div></a>
            </div>

        </section>

    </header>

    <router-view/> 
  </div>
</template>


<script>
export default {
  computed : {
    loggedIn() {
      return this.$store.getters.loggedIn
    }
  }
}
</script>
<style>
@import url('./assets/css/reset.css');
@import url('./assets/css/common.css');
@import url('./assets/css/style.css');
</style>