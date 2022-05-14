<template>

  <router-view></router-view>
  <tab-bar></tab-bar>
  
</template>

<script>
import tabBar from 'components/common/tabBar/tabBar'
export default {
  name:"App",
  components:{
    tabBar
  },
  data () {
    return {
    };
  },
}

</script>
<style >
</style>