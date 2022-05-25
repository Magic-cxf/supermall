<template>
  <div class="tabBarItem" @click="clickItem">
      <slot v-if="!isactive"  name="picture"></slot>
      <slot v-else name="picture-active"></slot>
      <p :class="{active:isactive}">
          <slot name="text"></slot>
      </p>
  </div>
</template>

<script>

export default {
  name:"tabBarItem",
  props:{
      path:{
          type:String
      }
  },
  data () {
    return {
    };
  },
  computed:{
      isactive(){
          return this.$route.path.indexOf(this.path)!==-1
      }
  },
  methods:{
      clickItem(){
          this.$router.replace(this.path)
      }
  }
}

</script>
<style>
.tabBarItem{
    width: 20%;
    height: 100%;
    text-align: center;
    font-size: 14px;
}
.tabBarItem img{
    width: 65%;
    height: 65%;
    margin: auto;
    margin-bottom:0;
}
.tabBarItem p{
    line-height: 14px;
    top: 30px;
    text-align: center;
    margin: auto;
}
.active{
    color: pink;
}
</style>