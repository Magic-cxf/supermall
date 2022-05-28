<template>
  <div class="account">
    <account-head></account-head>
    <account-info></account-info>
    <account-indent></account-indent>
  </div>
</template>

<script>
import accountHead from './accountChildren/accountHead'
import accountInfo from './accountChildren/accountInfo'
import accountIndent from './accountChildren/accountIndent'

export default {
  components:{
    accountHead,
    accountInfo,
    accountIndent
  },
  data () {
    return {
    };
  },
}

</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.account{
  background-color: rgba(180,180,180,0.1);
}
</style>