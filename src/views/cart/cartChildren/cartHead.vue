<template>
  <div class="cartTop">
      <div class="title">
          <span v-for="(item,index) in title" :key="item" 
          :class="{active:currentIndex==index }"
          @click="change(index)">{{item}}
          </span>
      </div>
      <div>更多</div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import {useStore} from 'vuex'


export default {
    setup(props,context){
        let currentIndex = ref(0)
        let title = ["购物车","降价","常购"];
        const store = useStore()
        let number = store.getters.length

        title[0] = title[0]+`(${number})`
        const change = function(index){
            currentIndex.value = index
            // context.emit("change",index)  向cart界面发送index  后续再开发
        }
        return{ title,change,currentIndex }
    },
    props:{},
}

</script>
<style scoped>
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
.cartTop{
    width: 100vw;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    color: rgb(120,120,120);
    background-color: white;
}
.title{
    width: 60vw;
    display: flex;
    justify-content: space-between;
}
.active{
    color: black;
    font-weight: 900;
    font-size: 20px;
}
</style>