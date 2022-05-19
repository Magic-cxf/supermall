<template>
  <div class="detail">
      <button @click="goBack">点击返回</button>
      <h2>welcome {{$route.params.iid}}</h2>
  </div>
</template>

<script>
export default {
  name:'detail',
  data () {
    return {
    };
  },
  methods:{
      goBack(){
          this.$router.back()
      }
  }
}

</script>
<style >
</style>