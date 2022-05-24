<template>
  <div class="test" v-show="isshow">{{message}}</div>
</template>

<script>
export default {
  data () {
    return {
        isshow:false,
        message:""
    };
  },
  methods:{
      show(message){
          this.isshow = true
          this.message = message
          setTimeout(()=>{
              this.message = ""
              this.isshow = false
          },1000)
      }
  }

}

</script>
<style >
.test{
    height: 30px;
    z-index: 999;
    background-color: white;
    border: 1px solid rgba(0,0,0,0.7);
    opacity: 0.7;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding-left: 10px;
    padding-right: 10px;
    line-height: 30px;
}
</style>