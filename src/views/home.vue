<template>
    <div class="home">
      <head-line></head-line>
      <carousel></carousel>
    </div>
</template>

<script>
import headLine from './homeChildren/headLine.vue'
import carousel from 'components/common/carousel/carousel.vue'
export default {
  components:{
    headLine,
    carousel
  },
  data () {
    return {
    };
  },
}

</script>
<style scoped>


</style>
