<template>
  <div class="comments">
        <div class="titl">
          <span>宝贝评价({{info.length}})</span>
          <span v-show="info.length > 0">查看全部 &gt;</span>
        </div>
        <div v-if="comments.length > 0">
            <div class="customer">
                <img :src="info[0].user.avatar" alt="">
                <div>
                    <h4>{{info[0].user.uname}}</h4>
                    <span>{{$timer.changeTime(info[0].created)}}</span>
                </div>
            </div>
            <div class="elevate">   
                {{info[0].content}}
            </div>
        </div>
        <div v-else class="norecommends">
            暂时没有评价！
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        info:[{user:{uname:"11",avatar:""}}]
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
    padding-bottom: 10px;
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
.customer{
    padding-left: 8px;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
}
.customer img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.customer div{
    margin-left: 20px;
    flex: 1;
}
.customer h4{
    margin-top: 8px;
    margin-bottom: 1px;
    font-weight: 500;
}
.customer span{
    font-size: 10px;
}
.elevate{
    margin-left: 8px;
    margin-top: 5px;
    overflow: hidden;
    height: 32px;
    font-size: 14px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.norecommends{
    margin-left: 8px;
    margin-top: 5px;
    height: 20px;
}
</style>