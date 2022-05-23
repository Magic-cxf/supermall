<template>
  <div class="detailInfos">
      <img v-for="item in imgs" :src="item"  :key="item" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
      imgs:{
          type:Array,
          default(){
              return []
          }
      }
  }
}

</script>
<style scoped>
.detailInfos{
    width: 97vw;
    margin: auto;
    margin-top: 8px;
    border-radius: 10px;
    background-color: white;
}
.detailInfos img{
    width: 97vw;
}
</style>