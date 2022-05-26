<template>
    <div class="myCart">
        <cart-good-item v-for="item in $store.state.cartGood" :key="item">
            <template #shopName>
                {{item['shopName']}}
            </template>
            <template #cartpicture>
                <img :src="item['img']" alt="">
            </template>
            <template #carttitle>
                {{item['title']}}
            </template>
            <template #cartprice>
                {{item['price']}}
            </template>
            <template #cartcount>
                {{item['count']}}
            </template>
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
    background-color: rgba(217, 217, 219,0.3);
    padding-top: 8px;
    padding-bottom: 8px;
}
.myCart div:first-child{
    margin-top: 0%;
}
</style>