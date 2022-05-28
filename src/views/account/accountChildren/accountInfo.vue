<template>
  <div class="accountInfo">
      <div>
          <img src="~assets/img/account/favorite.svg" alt="">
          <p>收藏</p>
      </div>
      <div>
          <img src="~assets/img/account/square.svg" alt="">
          <p>订阅</p>
      </div>
      <div>
          <img src="~assets/img/account/history.svg" alt="">
          <p>足迹</p>          
      </div>
      <div>
          <img src="~assets/img/account/pay.svg" alt="">
          <p>零钱</p>          
      </div>
  </div>
</template>

<script>
export default {
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
.accountInfo{
    width: 98vw;
    height: 65px;
    margin: auto;
    margin-top: 8px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 5px;
}
.accountInfo img{
    width: 25px;
    height: 25px;
    
}
.accountInfo div{
    padding-top: 10px;
}
.accountInfo p{
    margin-top: 3px;
    font-size: 14px;
}
</style>