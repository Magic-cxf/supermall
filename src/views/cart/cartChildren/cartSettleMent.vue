<template>
  <div class="settleMent">
      <div class="selectAll">
          <span @click="selectAllGood" :class="{selected:isSelectAll}">✔</span>
          <span @click="selectAllGood">全选</span>
      </div>
      <div class="allPrice">
          合计:
          <span class="totalprice">￥{{$store.getters.totalPrice|| 0}}</span>
          <span class="jiesuan">
              结算
          </span>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
       
    };
  },
  methods:{
      selectAllGood(){
          if(this.isSelectAll){
              //取消全部选中
              this.$store.commit('cancleAllGood')
          }else{
              //全选所有商品
              this.$store.commit('selectAllGood')
          }
      }
  },
  computed:{
      isSelectAll(){
          return this.$store.getters.isSelectAll && this.$store.getters.length
      }
  }
}

</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.settleMent{
    width: 100vw;
    height: 50px;
    position: absolute;
    bottom: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
}
.selectAll{
    width: 30vw;
    padding-left: 20px;
    line-height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

}
.selectAll span:first-child{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid rgb(217, 217, 219);
    text-align: center;
    font-size: 16px;
    line-height: 16px;
    color: white;
}
.selectAll span:last-child{
    height: 20px;
    line-height: 20px;
    margin-left: 5px;
    font-size: 15px;
    color: rgb(120, 120, 120);
}
.allPrice{
    width: 70vw;
    height: 50px;
    position: relative;
    line-height: 50px;
}
.selected{
    background-color: red;
}
.jiesuan{
    position: absolute;
    right: 15px;
    top: 5px;
    width: 90px;
    height: 40px;
    line-height: 40px;
    background: red;
    border-radius: 20px;
    text-align: center;
    color: white;
    font-weight: 800;
}
.totalprice{
    color: red;
}
</style>