<template>
  <div class="shopInfo">
      <div class="shopLogo">
          <div class="logo">
              <img :src="shopInfo.shopLogo" alt="">
          </div>
          <div class="tit"><span>{{shopInfo.name}}</span></div>
          <div class="quality">
              <ul>
                  <li v-for="item in shopInfo.score" :key="item">
                    {{item.name}}   {{$filter.getScore(item.score)}}
                    <span>{{$filter.getEvaluate(item.isBetter)}}</span>
                  </li>
              </ul>
          </div>
      </div>
      <div class="enterShop">
          <div class="enter">进店逛逛</div>
          <div class="allGood">全部宝贝</div>
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
      shopInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  methods:{

  }
}

</script>
<style scoped>
.shopInfo{
    width: 97vw;
    margin: auto;
    margin-top: 8px;
    border-radius: 10px;
    background-color: white;
    padding-bottom: 20px;
}
.shopLogo{
    height:100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo{
    margin-left: 8px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color:red ;
    overflow: hidden;
}
.logo img{
    width: 60px;
    height: 60px;
}
.tit {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.tit span{
    margin-left: 15px;
    font-size: 20px;
}
.quality{
    margin-right: 8px;
    width: 140px;
    font-size: 8px;
}
.quality ul{
    list-style: none;
}
.quality span{
    margin-left: 5px;
}
.enterShop{
    display: flex;
    justify-content: center;
    color: red;
}
.enterShop div{
    width: 80px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid red;
    line-height: 30px;
    text-align: center;
    margin-right: 20px;
}
</style>