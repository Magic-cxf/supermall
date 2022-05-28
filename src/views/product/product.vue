<template>
  <div>
    <product-head></product-head>
    <left-side @typechange = "typeChange" ref="leftside"></left-side>
    <main-show ref="mainshow"></main-show>
  </div>
</template>

<script>
import productHead from './productChildren/productHead'
import leftSide from './productChildren/leftSide'
import mainShow from './productChildren/mainShow'


export default {
  data () {
    return {
      categoryData:{}
    };
  },
  components:{
    leftSide,
    productHead,
    mainShow
  },
  methods:{
    typeChange(index){
      this.$refs.mainshow.mes = this.$refs.leftside.type[index]
    }
  }
}

</script>
<style >
</style>