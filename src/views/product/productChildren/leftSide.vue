<template>
  <div class="leftTabBar">
    <p v-for="(item,index) in type" 
    :key="item" @click="typeClick(index)"
    :class="{active:currentIndex == index}"
    >{{item}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type:["上衣","裤子","内衣","鞋子","运动","配饰","美妆","家居","母婴"],
      currentIndex:0
    };
  },
  methods:{
    typeClick(index){
      this.currentIndex = index
      this.$emit('typechange',index)
    }
  }
}

</script>
<style scoped>
.leftTabBar{
  width: 20vw;
  height: calc(100vh - 49px - 44px);
  padding-left: 3px;
  padding-right: 3px;
  padding-top:  10px;
  position: absolute;
  top: 44px;
  left: 0;
}
.leftTabBar p{
  height: 45px;
  text-align: center;
  line-height: 45px;
  border-radius: 5px;
}
.active{
  background-color: rgba(240, 240, 240,0.4);
}
</style>