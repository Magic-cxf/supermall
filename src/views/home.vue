<template>
    <div class="home">
      <head-line></head-line>
      <carousel></carousel>
    </div>
</template>

<script>
import headLine from './homeChildren/headLine.vue'
import carousel from 'components/common/carousel/carousel.vue'

import getHomeCrousel from 'network/homeRequest.js'

export default {
  components:{
    headLine,
    carousel
  },
  data () {
    return {
      homedata:{}
    };
  },
  created(){
    getHomeCrousel().then((res)=>{
      this.homedata = res
      console.log(this.homedata)
    })
  },
  methods:{
    test:function(){
      
    }
  }
}

</script>
<style scoped>


</style>
