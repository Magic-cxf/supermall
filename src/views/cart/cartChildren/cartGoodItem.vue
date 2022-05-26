<template>
  <div class="cartInfo">
      <div class="infoTit">
          <span>✔</span>
          <span>
              <slot name="shopName"></slot>
          </span>
      </div>
      <div class="infos">
          <span>✔</span>
          <slot name="cartpicture"></slot>
          <div class="infoSelect">
              <p>
                  <slot name="carttitle"></slot>
              </p>
              <p>选择的商品规格</p>
              <span class="cartprice">
                  <slot name="cartprice"></slot>
              </span>
              <span class="cartnumber">
                  x<slot name="cartcount"></slot>
              </span>
          </div>
      </div>
  </div>
</template>
<!-- 这是商品的一些基本信息展示✔ -->

<script>
export default {
    name:"cartGoodItem",
    data () {
        return {
    };
  },
}

</script>
<style>
*{  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.cartInfo{
    width: 97vw;
    height: 150px;
    background-color:white;
    margin: auto;
    border-radius: 10px;
    margin-top: 8px;
}
.infoTit{
    padding-top: 15px;
    height: 40px;
}
.infoTit span:first-child{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 15px;
    margin-left: 15px;
    /* background-color:red; */
    text-align: center;
    color: white;
    border: 1px solid rgb(217, 217, 219);
}
.infoTit span:last-child{
    color: black;
    font-size: 14px;
    font-weight: 900;
}
.infos{
    display: flex;
    margin-top: 8px;
    height: 102px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius:10px ;
    justify-content: space-between;
    align-items: center;
}
.infos > span{
    margin-left: 15px;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 15px;
    text-align: center;
    color: white;
    border: 1px solid rgb(217, 217, 219);
}
.infos img{
    width: 90px;
    height: 90px;
    margin-right: 15px;
    border-radius: 10px;
}
.infoSelect{
    flex: 1;
    margin-right: 15px;
    align-self: flex-start;
    position: relative;
}
.infoSelect p:first-child{
    width: 50vw;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 900;
}
.infoSelect p:nth-child(2){
    margin-top: 8px;
    height: 24px;
    line-height: 24px;
    width: 50vw;
    overflow: hidden;
    white-space: nowrap;
    font-size: 16px;
    background-color: rgba(217, 217, 219,0.3);
    border-radius: 2px;
}
.cartprice{
    display: block;
    margin-top: 15px;
    color: red;
}
.cartnumber{
    position: absolute;
    right: 10px;
    bottom: 0;
    padding-left: 3px;
    padding-right: 3px;
    height: 25px;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    line-height: 25px;
}
.active1{

}
.active2{

}
</style>