<template>
    <div class="home">
      <head-line></head-line>
      <recommend @changeType="changeType" ref="recommend1" v-show="isshow"></recommend>
      <better-scroll @scroll="contextScroll" ref="scroll" @pullupload="pullUpLoad">
        <carousel :imgs="homedata"></carousel>
        <recommend @changeType="changeType" ref="recommend"></recommend>
        <goods :goodslist="goodslist"></goods>
      </better-scroll>
      <back-top @click.native="backTop" v-show="isbacktop"></back-top>
    </div>
</template>

<script>
import headLine from 'components/context/headLine/headLine.vue'
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
      homedata:{},     //
      goods:{    //商品列表数据
        "pop":{page:0,list:[]},
        "new":{page:0,list:[]},
        "sell":{page:0,list:[]}
      },
      currentType:"pop",    //当前类型
      isbacktop:false,     //是否回到顶部
      isshow:false,       
      scrollposition:null,
      typePosition:{
        "pop":0,
        "new":0,
        "sell":0
      }
    };
  },
  created(){
    getHomeCarousel().then((res)=>{
      this.homedata =res.data.data.banner.list
    });
    getGoods("pop",1).then(res=>{
      this.goods["pop"].list.push(...res.data.data.list)
    });
    getGoods("new",1).then(res=>{
      this.goods["new"].list.push(...res.data.data.list)
    });
    getGoods("sell",1).then(res=>{
      this.goods["sell"].list.push(...res.data.data.list)
    });
    // this.$test.show("very good  i like it")     测试一下自己写的loast插件
    

  },
  deactivated(){
    this.scrollposition = this.$refs.scroll.scroll.y
  },
  activated(){
    this.$refs.scroll.scroll.refresh()
    this.$refs.scroll.scroll.scrollTo(0,this.scrollposition)
  },
  mounted(){

  },
  methods:{
    changeType(index){

      this.typePosition[this.currentType] = this.$refs.scroll.scroll.y  //增加新功能 留痕迹

      if(index == 0){
        this.currentType = "pop"
      }else if(index ==1){
        this.currentType = "new"
      }else{
        this.currentType = "sell"
      }

      this.$refs.scroll.scroll.scrollTo(0,this.typePosition[this.currentType])  //增加新功能 留痕

      this.$refs.recommend.currentIndex = index
      this.$refs.recommend1.currentIndex = index

    },
    contextScroll(position){
      if(position.y < -800){
        this.isbacktop = true
      }else(
        this.isbacktop = false
      );
      if(position.y <= -250){
        this.isshow = true
      }else{
        this.isshow = false
      };
    },
    backTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    pullUpLoad(){
      getGoods(this.currentType,++this.goods[this.currentType].page).then(res=>{
        this.goods[this.currentType].list.push(...res.data.data.list)
      })
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
