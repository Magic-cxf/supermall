<template>
    <div class="myCart">
        <cart-good-item v-for="[key,value] of $store.state.cartList.entries()" :iid= "key" :key="key" :item = "value">

        </cart-good-item>
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
    padding-top: 8px;
    padding-bottom: 8px;
}
.myCart div:first-child{
    margin-top: 0%;
}
</style>