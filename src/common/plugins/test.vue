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
              this.isshow = false
          },5000)
      }
  }

}

</script>
<style >
.test{
    width: 120px;
    height: 60px;
    z-index: 999;
    background-color: #fff;
    opacity: 0.7;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>