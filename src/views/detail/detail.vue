<template>
  <div class="detail">
      <detail-head @infochange = "typeChange" ref="head"></detail-head>
      <better-scroll :color="true" ref="scroll" @scroll="scrollContent">
        <carousel :imgs="goodInfo.carouselImgs" ></carousel>
        <detail-good-info :goodInfo = "goodInfo"></detail-good-info>
        <detail-type></detail-type>
        <detail-shop-info :shopInfo = "goodInfo.shopInfo" ></detail-shop-info>
        <detail-info :imgs="goodInfo.detailInfo" ref="gooddetail"></detail-info>
        <detail-comments :comments="goodInfo.comments" ref="customerComments"></detail-comments>
        <detail-recommend :recommends="goodInfo.recommends" ref="goodsRecommends"></detail-recommend>
      </better-scroll>
      <detail-tab-bar></detail-tab-bar>
      <back-top @click="backToTop" v-show="isbacktotop"></back-top>
  </div>
</template>

<script>
import detailHead from './detailChildren/detailHead.vue'
import detailGoodInfo from './detailChildren/detailGoodInfo'
import detailType from './detailChildren/detailType'
import detailInfo from './detailChildren/detailInfo'
import detailShopInfo from './detailChildren/detailShopInfo'
import detailComments from './detailChildren/detailComments'
import detailRecommend from './detailChildren/detailRecommend'
import detailTabBar from './detailChildren/detailTabBar'
import backTop from './detailChildren/backTop'

import carousel from 'components/common/carousel/carousel'
import betterScroll from 'components/common/betterScroll/betterScroll'

import { goodInfo } from 'common/utils'

import getGoodInfo from 'network/detail'
import DetailTabBar from './detailChildren/detailTabBar.vue'


export default {
  name:"detail",
  data () {
    return {
      iid:null,
      goodInfo:new goodInfo(),
      eleHeight:[0,null,null,null,Infinity],
      isbacktotop:false
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
    detailComments,
    detailRecommend,
    detailTabBar,
    DetailTabBar,
    backTop
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
      this.goodInfo.recommends = res.data.result.skuInfo.skus
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
      typeChange(index){
        if(index == 0){
          this.$refs.scroll.scroll.scrollToElement('.el-carousel')
        }else if(index ==1){
          this.$refs.scroll.scroll.scrollToElement('.detailInfos')
        }else if(index ==2){
          this.$refs.scroll.scroll.scrollToElement('.comments')
        }else {
          this.$refs.scroll.scroll.scrollToElement('.detailRecommends')
        }
      },
      scrollContent(position){
        this.eleHeight[1] = this.$refs.gooddetail.$el.offsetTop
        this.eleHeight[2] = this.$refs.customerComments.$el.offsetTop
        this.eleHeight[3] = this.$refs.goodsRecommends.$el.offsetTop
        const y = -position.y
        if( y >= 600){
          this.isbacktotop = true
        }else{
          this.isbacktotop = false
        }
        if(y < this.eleHeight[1]){
          if(this.$refs.head.currentIndex = 0){
            return
          }else{
            this.$refs.head.currentIndex = 0
          }
        }else if(this.eleHeight[1] <= y && y< this.eleHeight[2]){
          if(this.$refs.head.currentIndex = 1){
            return
          }else{
            this.$refs.head.currentIndex = 1
          }
        }else if(this.eleHeight[2]<=y && y<this.eleHeight[3]){
          if(this.$refs.head.currentIndex = 2){
            return
          }else{
            this.$refs.head.currentIndex = 2
          }
        }else{
          if(this.$refs.head.currentIndex = 3){
            return
          }else{
            this.$refs.head.currentIndex = 3
          }
        }
      },
      backToTop(){
        this.$refs.scroll.scroll.scrollTo(0,0)
      }
  }
}

</script>
<style >
.detail{
  padding-top: 44px;
}
</style>