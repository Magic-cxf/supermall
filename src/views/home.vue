<template>
    <div class="home">
      <head-line></head-line>
      <better-scroll @scroll="contextScroll" ref="scroll">
        <carousel :imgs="homedata"></carousel>
        <recommend @changeType="changeType"></recommend>
        <goods :goodslist="goodslist"></goods>
      </better-scroll>
      <back-top @click.native="backTop" v-show="isbacktop"></back-top>
    </div>
</template>

<script>
import headLine from './homeChildren/headLine.vue'
import carousel from 'components/common/carousel/carousel.vue'
import recommend from './homeChildren/recommend.vue'
import goods from 'components/context/goods/goods.vue'
import betterScroll from 'components/common/betterScroll/betterScroll.vue'
import backTop from './homeChildren/backTop.vue'

import {getHomeCarousel,getGoods}from 'network/homeRequest.js'


export default {
  components:{
    headLine,
    carousel,
    recommend,
    goods,
    betterScroll,
    backTop
  },
  data () {
    return {
      homedata:this.$store.state.homeModule.carouseldata,
      goods:{
        "pop":{page:0,list:[]},
        "new":{page:0,list:[]},
        "sell":{page:0,list:[]}
      },
      currentType:"pop",
      isbacktop:false
    };
  },
  created(){
    if(this.$store.state.homeModule.carouseldata.length == 0){
      getHomeCarousel().then((res)=>{
      this.homedata =res.data.data.banner.list
      this.$store.state.homeModule.carouseldata=this.homedata
      })
    };
    getGoods(this.currentType,1).then(res=>{
      this.goods[this.currentType].list.push(...res.data.data.list)
    })

  },
  methods:{
    changeType(index){
      if(index == 0){
        this.currentType = "pop"
      }else if(index ==1){
        this.currentType = "new"
      }else{
        this.currentType = "sell"
      }
      getGoods(this.currentType,1).then(res=>{
        this.goods[this.currentType].list.push(...res.data.data.list)
      })
    },
    contextScroll(position){
      if(position.y < -800){
        this.isbacktop = true
      }else(
        this.isbacktop = false
      )
    },
    backTop(){
      this.$refs.scroll.scroll.scrollTo(0,0)
    }
  },
  computed:{
    goodslist(){
      return this.goods[this.currentType].list
    }
  }
}

</script>
<style scoped>
.home{
  padding-top: 44px;
}

</style>
