<template>
  <div v-show="isShow"  >
    <div class="mask" @click="hide"></div>
    <div :class="{showSelects:isShow,outSelects:isOut}">
        <h2>hahah</h2>
    </div>
  </div>
</template>

<script>
//这个插件暂时想不出来 以后再想
export default {
  data () {
    return {
        isShow:false,
        isOut:false,
    };
  },

  methods:{
      show(){
          this.isShow = true
      },
      hide(){
          this.isOut = true
          setTimeout(()=>{
              this.isOut = false
              this.isShow = false
          },900)
      }
      
  },
  mounted(){
          
  }
}

</script>
<style>
.mask{
    position: absolute;
    width: 100vw;
    height: 25vh;
    opacity: 0;
}
.showSelects{
    width: 100vw;
    height: 75vh;
    background-color:white;
    animation-name: arise;
    animation-duration: 1s;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}

.outSelects{
    width: 100vw;
    background-color:white;
    animation-name: down;
    animation-duration: 1s;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
@keyframes arise{
    0% {
        height: 0vh;
    }
    100% {
        height: 75vh;
    }
}
@keyframes down{
    0% {
        height: 75vh;
    }
    100% {
        height: 0vh;
    }
}
</style>