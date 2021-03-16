<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <router-link name="home">home</router-link> -->

    <router-view />
    <p class="test">HelloWorld</p>
    <van-tabbar route v-model="active" active-color="#fc4141">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="bag-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: 'App',
  data() {
    return {
      active: 0,
    }
  },
  components: {
    // HelloWorld,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  // max-width: 768px;
  /*no*/
  margin-bottom: 60px;
}
a {
  padding: 20px;
}
.test {
  font-size: 1rem;
}
.van-tabbar {
  // max-width: 768px;
  /*no*/
  max-height: 102.39px; /*no*/
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
