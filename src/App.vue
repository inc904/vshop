<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <router-link name="home">home</router-link> -->
    <router-link to="home">home</router-link>
    &nbsp;
    <router-link :to="{ name: 'category', params: { cateId: 7789 } }"
      >category</router-link
    >
    &nbsp;
    <hr />
    <router-link to="/home">home2</router-link>
    <router-link to="/cart">cart</router-link>
    <router-link to="/user">user</router-link>
    <router-link to="/category">category</router-link>
    <!-- <router-link to="/user/8522?from=baidu">user</router-link>
    <router-link :to="{ name: 'user', params: { id: 8522 } }">user</router-link> -->
    <hr />
    <router-view />
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
  name: "App",
  data(){
    return {
      active: 0
    }
  },
  components: {
    // HelloWorld,
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  padding: 20px;
}
</style>
