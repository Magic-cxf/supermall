<template>
  <div class="cart">
    <cart-head></cart-head>
    <better-scroll>
      <cart-good></cart-good>
    </better-scroll>
    <cart-settle-ment></cart-settle-ment>
  </div>
</template>

<script>
import cartHead from './cartChildren/cartHead'
import cartGood from './cartChildren/cartGood'
import cartSettleMent from './cartChildren/cartSettleMent'


import betterScroll from 'components/common/betterScroll/betterScroll'

export default {
  name:"cart",
  components:{
    cartHead,
    cartGood,
    cartSettleMent,
    betterScroll
  },
  data(){
    return {
    }
  },
  props:{},
  methods:{
  }
}
</script>
<style >
</style>