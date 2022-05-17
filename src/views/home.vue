<template>
    <div class="home">
      <head-line></head-line>
      <carousel :imgs="homedata"></carousel>
    </div>
</template>

<script>
import headLine from './homeChildren/headLine.vue'
import carousel from 'components/common/carousel/carousel.vue'

import getHomeCarousel from 'network/homeRequest.js'

export default {
  components:{
    headLine,
    carousel
  },
  data () {
    return {
      homedata:[]
    };
  },
  created(){
    
    getHomeCarousel().then((res)=>{
      this.homedata =res.data.data.banner.list

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
