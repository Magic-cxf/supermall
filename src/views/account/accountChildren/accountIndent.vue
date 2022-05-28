<template>
  <div class="indent">
      <h4>我的订单</h4>
      <div>
          <img src="~assets/img/account/vipcard.svg" alt="">
          <p>待付款</p>
      </div>
            <div>
          <img src="~assets/img/account/send.svg" alt="">
          <p>待发货</p>
      </div>
            <div>
          <img src="~assets/img/account/deliver.svg" alt="">
          <p>待收货</p>
      </div>
            <div>
          <img src="~assets/img/account/message.svg" alt="">
          <p>待评价</p>
      </div>
            <div>
          <img src="~assets/img/account/refund.svg" alt="">
          <p>退款/售后</p>
      </div>
      <span>全部 &gt;</span>
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
.indent{
    width: 98vw;
    height: 100px;
    margin: auto;
    margin-top: 8px;
    padding-left: 25px;
    padding-right: 25px;
    position: relative;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;

}
.indent h4{
    position: absolute;
    left: 10px;
    top: 10px;
}
.indent span{
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 13px;
    color: rgb(180,180,180);
}
.indent img{
    width: 30px;
    height: 30px;
    margin-top:20px
}
.indent p{
    font-size: 15px;
    margin-top: 8px;
}
</style>