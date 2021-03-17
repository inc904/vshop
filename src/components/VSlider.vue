<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="image in banner" :key="image.id">
      <img v-lazy="image.pic" />
    </van-swipe-item>
  </van-swipe>
  <!-- E_swiper -->
</template>

<script>
export default {
  name: 'slider',
  data() {
    return {}
  },
  props: {
    banner: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.my-swipe.van-swipe {
  .van-swipe-item {
    height: 100%;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
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