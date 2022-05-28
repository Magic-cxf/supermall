<template>
    <div class="accountHead">
      <img src="~assets/img/tabbaricon/account.svg" alt="">
      <div>
        <p>用户昵称</p>
        <p>账号名：xxxxxx</p>
        <p>关注 0 &nbsp;  |  &nbsp;  粉丝 0</p>
      </div>
      <img src="~assets/img/account/set.svg" alt="">
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
.accountHead{
  display: flex;
  width: 100vw;
  height: 90px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-color: white;
}
.accountHead img:first-child{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-left: 20px;
  margin-right: 10px;
  margin-top: 10px;
}
.accountHead div p:first-child{
  margin-top: 15px;
  font-weight: 900;
  font-size: 18px;
}
.accountHead div p:nth-child(2){
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(120, 120, 120);
}
.accountHead div p:last-child{
  font-size: 14px;
  
}
.accountHead img:last-child{
  width: 25px;
  height: 25px;
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>