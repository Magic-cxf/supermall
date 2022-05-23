<template>
  <div class="typeSelect">
      <div class="select">
          <span>选择</span>
          <span>尺码</span>
          <br>
          <span>共10种尺码可选</span>
      </div>
      <div class="consign">
          <span>发货</span>
          <span>请选择地址</span>
      </div>
      <div class="promise">
        <span>保障</span>
        <span>假一赔四·退货运费险·极速退款</span>
      </div>
      <div class="params">
        <span>参数</span>
        <span>生产日期 品牌...</span>
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
.typeSelect{
    width: 97vw;
    margin: auto;
    margin-top: 8px;
    border-radius: 10px;
    background-color: white;
    padding-bottom: 10px;
}
.select{
    margin-left: 8px;
    margin-right: 8px;
    padding-top: 10px;
}
.select span:first-of-type{
    margin-right: 25px;
    color: rgb(120, 120, 120);
}
.select span:nth-of-type(3){
    margin-left: 57px;
    margin-top: 5px;
    border-radius: 5px;
    line-height: 30px;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin-top: 10px;
    background-color:rgb(200, 200, 200,0.2) ;
}
.consign{
    margin-left: 8px;
    margin-right: 8px;
    padding-top: 10px;
}
.consign span:first-of-type{
    margin-right: 25px;
    color: rgb(120, 120, 120);
}
.promise{
    margin-left: 8px;
    margin-right: 8px;
    padding-top: 10px;
}
.promise span:first-of-type{
    margin-right: 25px;
    color: rgb(120, 120, 120);
}
.params{
    margin-left: 8px;
    margin-right: 8px;
    padding-top: 10px;
}
.params span:first-of-type{
    margin-right: 25px;
    color: rgb(120, 120, 120);
}
</style>