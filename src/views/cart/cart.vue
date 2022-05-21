<template>
  <div><h1>welcome to cart {{message}}</h1></div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup(){
    const message = ref("that is ok")
    return{
      message
    }
  },
  data () {
    return {
    };
  },
}

</script>
<style >
</style>