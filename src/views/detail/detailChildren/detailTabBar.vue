<template>
  <div class="footBar">
    <div class="shop">
      <img src="~assets/img/detail/shop.svg" alt="">
      <br>
      <span>店铺</span>
    </div>
    <div class="wang"> 
      <img src="~assets/img/detail/wang.svg" alt="">
      <br>
      <span>客服</span>
    </div>
    <div class="favor" @click="collecting">
      <img v-show="!iscollect"  src="~assets/img/detail/favor.svg" alt="">
      <img v-show="iscollect" src="~assets/img/detail/favor_fill.svg" alt="">
      <br>
      <span :class="{collectText:iscollect}">收藏</span>     
    </div>
    <div class="tabbarcart">
      <div @click="addCart">加入购物车</div>
      <div >立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iscollect:false
    };
  },
  methods:{
    collecting(){
      this.iscollect = !this.iscollect
    },
    addCart(){
      this.$test.show("加入购物车成功！")
      this.$store.dispatch('addGood',this.$attrs.goodToCart)
    }
  }
}

</script>
<style scoped>
*{
  box-sizing: border-box;
}
.footBar{
  width: 100vw;
  height: 49px;
  background-color:white;
  position:fixed;
  z-index: 20;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 20px;
  align-items: center;
}
.footBar img{
  width: 25px;
  height: 25px;
  margin: auto;
}
.shop{
  text-align: center;
  font-size: 12px;
  width: 50px;
  color: pink;
}
.wang{
  text-align: center;
  font-size: 12px;
  width: 50px;
}
.favor{
  text-align: center;
  font-size: 12px;
  width: 50px;
}
.tabbarcart{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
}
.tabbarcart div{
  height: 42px;
  line-height: 42px;
  width: 90px;
  text-align: center;
  font-size: 14px;
  color: white;
}
.tabbarcart div:first-child{
  padding-left: 10px;
  background-color: rgb(255, 155, 0);
  border-top-left-radius: 21px;
  border-bottom-left-radius: 21px;
}
.tabbarcart div:last-child{
  padding-right: 10px;
  background-color: rgb(255, 95, 2);
  border-top-right-radius: 21px;
  border-bottom-right-radius: 21px;
}
.collectText{
  color: pink;
}
</style>