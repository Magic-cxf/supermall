<template>
  <div class="wrapper">
      <div v-if="!color" class="content">
          <slot></slot>
      </div>
      <div v-else class="content1">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  data () {
    return {
        scroll:null
    };
  },
  props:{
    color:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
      this.scroll =new BetterScroll('.wrapper',{
          probeType:3,
          click:true,
        //   mouseWheel: {    //是否启用pc端鼠标滑轮
        //     speed: 20,
        //     invert: false,
        //         easeTime: 300
        //   },
          observeDOM:true,
          observeImage:true,
          pullUpLoad:true

      });
      this.scroll.on('scroll',(position)=>{
          this.$emit('scroll',position)
      });
      this.scroll.on('pullingUp',()=>{
          this.$emit('pullupload')
          this.scroll.finishPullUp()
      })
  }
}

</script>
<style>
.wrapper{
    position: fixed;
    width: 100vw;
    height: calc(100vh - 93px );
    top: 44px;
    bottom: 49px;
    overflow: hidden;
}
.content1{
  background-color: rgba(217, 217, 219,0.3);
}
</style>