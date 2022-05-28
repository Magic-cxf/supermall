<template>
  <div class="mainShow">
      {{mes}}相关的内容
  </div>
</template>

<script>
export default {
  data () {
    return {
        mes:"上衣"
    };
  },
}

</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.mainShow{
    position: absolute;
    top: 44px;
    right: 0;
    width: 80vw;
    height: calc(100vh - 93px);
    text-align: center;
    padding-top: 50px;
    font-size: 20px;
}
</style>