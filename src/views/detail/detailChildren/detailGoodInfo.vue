<template>
  <div class="goodinfoshow">
    <div class="price">
      <span>¥</span>
      <p>
        {{goodInfo.price}} - {{goodInfo.oldPrice}}
      </p>
    </div>
    <div class="des">
      <p>{{goodInfo.description}}</p>  
    </div>
    <div class="collect">
      <span>{{goodInfo.collect[0]}}</span>
      <span>{{goodInfo.collect[1]}}</span>
      <span>{{goodInfo.collect[2]}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    goodInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}

</script>
<style >
.goodinfoshow{
  width: 97vw;
  margin:auto;
  margin-top: 8px;
  border-radius: 10px;
  background-color: white;
  padding-bottom: 5px;
}
.price{
  width: inherit;
  height: 50px;
  line-height: 100%;
  color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 8px;
}
.price span{
  margin-right: 5px;
}
.price p{
  flex: 1;
  font-size: 25px;
}
.des{
  height: 50px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 10px;
}
.des p{
  margin-top: 5px;
  font-weight: 900;
  
}
.collect{
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding-left: 25px;
  padding-right: 25px;
  color: rgb(117, 117, 117);
}

</style>