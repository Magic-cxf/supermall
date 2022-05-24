<template>
  <div class="detailRecommends">
      <div class="tit">——看了又看——</div>
      <div class="recommendGood" v-for="item in recommends" :key="item">
          <img :src="item.img" alt="">
          <div class="headtitle">推荐商品的标题由于接口里没有暂时为空</div>
          <span class="recommendprice">¥{{item.nowprice}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
      recommends:{
          type:Array,
          default(){
              return []
          }
      }
  }
}

</script>
<style scoped>
.detailRecommends{
    width: 97vw;
    margin:auto;
    margin-top: 8px;
    padding-bottom: 5px;
    border-radius: 10px;
    display: flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
    background-color: white;
}
.tit{
    width: 100%;
    text-align: center;
    margin-top: 8px;
    color: red;
}
.recommendGood{
    width: 48%;
    height: 310px;
    margin-top: 8px;
    position: relative;
}
.recommendGood img{
    width: 100%;
    height: 250px;
    text-align: center;
}
.headtitle{
    margin-left: 8px;
    margin-right: 8px;
    height: 35px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.recommendprice{
    position:absolute;
    color: red;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
}

</style>