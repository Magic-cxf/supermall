<template>
  <div class="header">
      <div class="left"></div>
      <div class="center">
          Supermall
      </div>
      <div class="right"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
}

</script>
<style scoped>
.header{
    width: 100%;
    height: 44px;
    display: flex;
    background-color: pink;
    position: fixed;
    top: 0;
    z-index: 9;
}
.left{
    width: 60px;
}
.center{
    flex: 1;
}.center{
    text-align: center;
    line-height: 44px;
    font-size: 25px;
}
.right{
    width: 60px;
}
</style>