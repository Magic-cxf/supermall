<template>
  <div class="detailHead">
      <div class="left" @click="goBack">
          <img src="~assets/img/detail/back.svg" alt="">
      </div>
      <div class= "right"  
       v-for="(item,index) in topInfo" :key="index" @click="infoChange(index)">
        <span :class="{ active:index === currentIndex }">{{item}}</span>
      </div>

  </div>
</template>

<script>


export default {
  data () {
    return {
        topInfo:["宝贝","详情","评价","推荐"],
        currentIndex:0
    };
  },
  methods:{
      infoChange(index){
          this.currentIndex = index
      },
      goBack(){
          this.$router.back()
      }
  }
}

</script>
<style scoped>
.detailHead{
    height: 44px;
    width: 100vw;
    background-color:#fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    box-shadow: 0 1px 0 0 rgba(0,0,0,0.2);
}
.left{
    width: 60px;
    background-color: #fff;
    height: 44px;
}
.left img{
    width: 20px;
    height: 20px;
    position: relative;
    left: 20px;
    top: 12px;
}
.right {
    flex: 1;
    line-height: 44px;
    text-align: center;
}
.active{
    color: pink;
    border-bottom: 2px solid pink;
}
</style>