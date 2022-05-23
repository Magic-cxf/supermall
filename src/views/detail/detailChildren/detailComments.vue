<template>
  <div class="comments">
      <div class="titl">
          <span>宝贝评价({{comments.length}})</span>
          <span v-show="comments.length > 0">查看全部 &gt;</span>
      </div>
      <div class="descr" >
          {{info[0].user.uname}}
          {{}}
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        info:[{user:{}}]
    }
  },
  props:{
      comments:{
          type:Array,
          default(){
              return []
          }
      }
  },
  watch:{
      comments: {
        handler: function(newValue,oldValue){
            if(newValue !== oldValue){
                this.info = newValue
            }
        },
        deep: true,
    }
  }
}

</script>
<style scoped>
.comments{
    width: 97vw;
    margin: auto;
    margin-top: 8px;
    border-radius: 10px;
    background-color: white;
    padding-bottom: 20px;
    padding-top: 20px;
}
.titl{
    display: flex;
    margin-left: 8px;
    margin-right: 8px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(200, 200, 200,0.8);
    padding-bottom: 5px;
}
.titl span:first-child{
    font-weight: 900;
}
.titl span:last-child{
    font-size: 13px;
    color: red;
}
.yonghu{
    margin-left: 8px;
    margin-top: 20px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
}
.yonghu div{
    flex: 1;
    margin-left: 15px;
}
.yonghu h4{
    margin-top: 5px;
    margin-bottom: 5px;
}
.yonghu span{
    font-size: 14px;
    margin-left: 20px;
}
.yonghu img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
</style>