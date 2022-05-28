<template>
  <div>
    <left-side></left-side>
  </div>
</template>

<script>
import leftSide from './productChildren/leftSide'

import getCategory from 'network/product'

export default {
  data () {
    return {
      categoryData:{}
    };
  },
  created(){
    getCategory().then(res=>{
      this.categoryData = res
      console.log(res)
    })
  },
  components:{
    leftSide
  }
}

</script>
<style >
</style>