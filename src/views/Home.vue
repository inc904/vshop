<template>
  <div class="page">
    <!-- S_swiper -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in swiperImages" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- E_swiper -->
    <!-- S_MenusTable -->

    <!-- E_MenusTable -->
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      swiperImages: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.my-swipe.van-swipe {
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 187px;
    text-align: center;
    background-color: #39a9ed;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .van-swipe__indicators {
    background-color: #fc4141;
    .van-swipe__indicator {
      border-radius: 20%;
      width: 80px;
      color: #fff;
      background-color: #fff;
    }
  }
  .custom-indicator {
    position: absolute;
    bottom: 12px;
    left: 50%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}
</style>