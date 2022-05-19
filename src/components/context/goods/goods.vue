<template>
  <div class = "goods" >
        <goods-item v-for="item in goodslist" :key="item" @click="goDetail(item.iid)">
            <template #picture>
                <img :src="item.show.img" alt="">
            </template>
            <template #description>
                <p>{{item.title}}</p>
            </template>
            <template #fav>
                {{item.cfav}}
            </template>
        </goods-item>
  </div>
</template>

<script>
import goodsItem from './goodsItem.vue'

export default {
  props:{
      goodslist:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components:{
      goodsItem
  },
  data () {
    return {
    };
  },
  methods:{
      goDetail(iid){
          this.$router.push('/detail/'+iid)
      }
  }
}

</script>
<style scoped>
.goods{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

</style>