<template>
  <div class="tabbar">
    <tab-bar-item path="/home">
      <template #picture>
        <img src="~assets/img/tabbaricon/home.svg" alt="">
      </template>
      <template #picture-active>
        <img src="~assets/img/tabbaricon/home-active.svg" alt="">
      </template>
      <template #text>
        首页
      </template>
    </tab-bar-item>
    <tab-bar-item path="/product">
      <template #picture>
        <img src="~assets/img/tabbaricon/product.svg" alt="">
      </template>
      <template #picture-active>
        <img src="~assets/img/tabbaricon/product-active.svg" alt="">
      </template>
      <template #text>
        发现
      </template>
    </tab-bar-item>
    <tab-bar-item path="cart">
      <template #picture>
        <img src="~assets/img/tabbaricon/cart.svg" alt="">
      </template>
      <template #picture-active>
        <img src="~assets/img/tabbaricon/cart-active.svg" alt="">
      </template>
      <template #text>
        购物车
      </template>
    </tab-bar-item>
    <tab-bar-item path="account">
      <template #picture>
        <img src="~assets/img/tabbaricon/account.svg" alt="" >
      </template>
      <template #picture-active>
        <img src="~assets/img/tabbaricon/account-active.svg" alt="" >
      </template>
      <template #text>
        个人
      </template>
    </tab-bar-item>
  </div>
</template>

<script>
import tabBarItem from './tabBarItem.vue'
export default {
  components:{
    tabBarItem
  },
  data () {
    return {
    };
  },
}

</script>
<style scoped>
.tabbar{
    width: 100vw;
    height: 49px;
    position:fixed;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    border-top: 1px solid rgba(0, 0,0, 0.1);
    background: rgb(248, 249, 249);
}
</style>