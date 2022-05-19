<template>
  <div class="goodsitem">
      <slot name="picture"></slot>
      <slot name="description"></slot>
      <div>
        <slot name="fav"></slot>
        <img src="~assets/img/goods/like.svg" alt="">
      </div>
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
<style>
.goodsitem{
    width: 48%;
    height: 350px;
    max-width: 48%;
    min-width: 48%;
    text-align: center;
}
.goodsitem img{
    width: 100%;
    height: 300px;
    border-radius: 5px;
}
.goodsitem p{
  width: 98%;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 2px;
  margin-bottom: 1px;
  font-size: 14px;
}
.goodsitem div{
  width: 100%;
  height: 18px;
  display: flex;
  justify-content: center;
}
.goodsitem div h5{
  height: 18px;
}
.goodsitem div img{
  width: 18px;
  height: 18px;
  margin-left: 4px;
}

</style>