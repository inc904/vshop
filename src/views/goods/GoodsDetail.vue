<template>
  <div class="goods-detail-page">
    <div class="swiper">
      <v-slider :banner="banner" />
    </div>
    <div class="info-panel">
      <div class="share">
        <div class="price">￥<span>0.10</span> 起步</div>
        <div class="share-icon">
          <button>分享</button>
        </div>
      </div>
      <div class="information">
        <div class="goodsname">
          Apple iPhone 12 Pro Max (A2412) 512GB 石墨色 支持移动联通电信5G
          双卡双待手机
        </div>
        <div class="stock-panel">
          <div class="origin-price">原价：￥15999.00</div>
          <div class="stock">库存：2312件</div>
          <div class="sales">销量：422件</div>
        </div>
      </div>
      <div class="discount">优惠卷：</div>
      <div class="activity">活动：</div>
    </div>
    <div class="select-panel">已选择：<span>韩兰色，256G，公开版</span></div>
    <div class="comment">
      <div class="comment-title">
        <p class="com-count">用户评价（ <span class="num">1</span> ）</p>
        <p class="praise-rate">100%好评率</p>
      </div>
    </div>
    <div class="recommend"></div>
  </div>
</template>

<script>
import VSlider from '@/components/VSlider.vue'
import { goodsDetailData } from '@/api'
export default {
  name: 'goodsdetail',
  data() {
    return {
      banner: [
        {
          id: 104,
          name: 'banenr2',
          url: '/pages/pink-list/index?id=2',
          pic:
            'http://datong.crmeb.net/public/uploads/attach/2019/03/29/5c9e015bdc6f5.jpg',
        },
      ],
    }
  },
  components: {
    VSlider,
  },
  mounted() {
    this.getGoodsDetailData()
  },
  methods: {
    async getGoodsDetailData() {
      let res = await goodsDetailData(3)
      console.log(res)
    },
  },
}
</script>

<style lang="scss" scoped>
.goods-detail-page {
  .swiper {
    height: 375px;
  }
}
</style>