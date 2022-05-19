<template>
  <div class="recommend">
      <div v-for = "(item,index) in goodstype" 
      :key="index" 
      :class="{typeactive:currentIndex == index}" 
       @click="changeType(index)">
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'recommend',
  data () {
    return {
        goodstype:["流行","新品","精选"],
        currentIndex:0
    };
  },
  created(){
    if(this.$store.state.currentType == "pop"){
      this.currentIndex =0
    }else if(this.$store.state.currentType == "new"){
      this.currentIndex =1
    }else{
      this.currentIndex =2
    }
  },
  methods:{
      changeType(index){
          if(index == this.currentIndex){
            return 
          }
          this.currentIndex = index
          if(index ==0){
            this.$store.state.currentType = "pop"
          }else if(index == 1){
            this.$store.state.currentType = "new"
          }else(
            this.$store.state.currentType = "sell"
          )
          this.$emit('changeType',index)
      }
  }
}

</script>
<style scoped>
.recommend{
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    position: relative;
    z-index: 9;
}
.recommend div{
  flex: 1;
  text-align: center;
}
.typeactive span{
    border-bottom: 2px solid pink;
    color: pink;
}
</style>