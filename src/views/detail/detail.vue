<template>
  <div class="detail">
      <detail-head></detail-head>
      <carousel :imgs="carouselImgs"></carousel>
  </div>
</template>

<script>
import detailHead from './detailChildren/detailHead.vue'
import carousel from 'components/common/carousel/carousel'


import getGoodInfo from 'network/detail'

export default {
  name:'detail',
  data () {
    return {
      iid:null,
      carouselImgs:{}
    };
  },
  components:{
    detailHead,
    carousel
  },
  created(){
    getGoodInfo(this.getIid).then(res=>{
      console.log(res.data.result.itemInfo.topImages)
      this.carouselImgs = res.data.result.itemInfo.topImages.slice(0,4)  //ui 太丑了 只拿四张吧
    })
  },
  computed:{
    getIid(){
      return this.$route.params.iid
    }
  },
  methods:{
      goBack(){
          this.$router.back()
      }
  }
}

</script>
<style >
.detail{
  padding-top: 44px;
}
</style>