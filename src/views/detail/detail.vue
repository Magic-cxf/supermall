<template>
  <div class="detail">
      <detail-head></detail-head>
      <better-scroll :color="true">
        <carousel :imgs="goodInfo.carouselImgs"></carousel>
        <detail-good-info :goodInfo = "goodInfo"></detail-good-info>
        <detail-type></detail-type>
        <detail-shop-info :shopInfo = "goodInfo.shopInfo" ></detail-shop-info>
        <detail-info :imgs="goodInfo.detailInfo"></detail-info>
        <detail-comments :comments="goodInfo.comments"></detail-comments>
      </better-scroll>
  </div>
</template>

<script>
import detailHead from './detailChildren/detailHead.vue'
import detailGoodInfo from './detailChildren/detailGoodInfo'
import detailType from './detailChildren/detailType'
import detailInfo from './detailChildren/detailInfo'
import detailShopInfo from './detailChildren/detailShopInfo'
import detailComments from './detailChildren/detailComments'

import carousel from 'components/common/carousel/carousel'
import betterScroll from 'components/common/betterScroll/betterScroll'

import goodInfo from 'common/utils'

import getGoodInfo from 'network/detail'


export default {
  name:'detail',
  data () {
    return {
      iid:null,
      goodInfo:new goodInfo()
    };
  },
  components:{
    detailHead,
    carousel,
    betterScroll,
    detailGoodInfo,
    detailType,
    detailInfo,
    detailShopInfo,
    detailComments
  },
  created(){
    getGoodInfo(this.getIid).then(res=>{
      // console.log(res.data.result.itemInfo.topImages)
      this.goodInfo.carouselImgs = res.data.result.itemInfo.topImages.slice(0,4)  //ui 太丑了 只拿四张吧 elementui 丑
      this.goodInfo.description = res.data.result.itemInfo.title
      this.goodInfo.price = res.data.result.itemInfo.lowNowPrice
      this.goodInfo.oldPrice = res.data.result.itemInfo.lowPrice
      this.goodInfo.collect = res.data.result.columns
      this.goodInfo.detailInfo = res.data.result.detailInfo.detailImage[0].list
      this.goodInfo.shopInfo = res.data.result.shopInfo
      this.goodInfo.comments = res.data.result.rate.list
      
      console.log(res.data.result)
      console.log(this.goodInfo.comments)
      console.log(this.goodInfo.comments[0].user)
    })
  },
  computed:{
    getIid(){
      return this.$route.params.iid
    }
  },
  methods:{
      goBack(){
          this.$router.back()
      },
  }
}

</script>
<style >
.detail{
  padding-top: 44px;
}
</style>