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
      const data =res.data.data.banner.list
      for (let i in data){
        this.homedata.push(data[i].image)
      } 
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
