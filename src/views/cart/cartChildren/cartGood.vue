<template>
    <div class="myCart">
        <cart-good-item></cart-good-item>
        <cart-good-item></cart-good-item>
        <cart-good-item></cart-good-item>
        <cart-good-item></cart-good-item>
        <cart-good-item></cart-good-item>
        <cart-good-item></cart-good-item>
    </div>
</template>

<script>

import cartGoodItem from './cartGoodItem'

export default {
  name:"cartGood",
  data () {
    return {
    };
  },
  components:{
      cartGoodItem
  }
}

</script>
<style scoped>
.myCart{
    width: 100vw;
    background-color: rgba(250, 250, 250,0.4);
}
</style>