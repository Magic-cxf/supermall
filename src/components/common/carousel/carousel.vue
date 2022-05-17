<template>
  <el-carousel indicator-position="" height="250px">
    <el-carousel-item v-for="item in imgs" :key="item">
      <h3 text="2xl" justify="center">
        <img :src="item" alt="">
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  export default {
    props:{
      imgs:{
        type:Object,
        default(){
          return []
        }
      }
    }
  }
</script>
<style scoped>
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 250px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item img{
  width: 100%;
  height: 250px;
}
</style>
