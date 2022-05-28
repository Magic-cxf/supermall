
import {createStore} from 'vuex'


const store = createStore({
    state(){
        return {
            cartList:new Map(),  //利用map结构来存储客户的购物车
        }
    },
    mutations:{
        incrementCount(state,payload){                  //增加已经存在的商品数量
            state.cartList.get(payload)['count']++
        },
        incrementGood(state,payload){ //增加不同的商品
            state.cartList.set(payload['iid'],payload['value'])
        },
        changedSelectStatus(state,payload){               //修改商品的状态
            state.cartList.get(payload['iid'])['isSelect'] = payload['status'] 
        },
        selectAllGood(state){                             //所有商品全选
            state.cartList.forEach((value,key)=>{
                value.isSelect = true
            })
        },
        cancleAllGood(state){                               //取消所有商品全选
            state.cartList.forEach((value,key)=>{
                value.isSelect =false
            })
        }                     

    },
    actions:{
        addGood({state,commit},payload){              //向购物车增加商品   使用map结构真好用
            if(state.cartList.has(payload['iid'])){
                commit('incrementCount',payload['iid'])
            }else{
                commit('incrementGood',payload)
            }
            
        }
    },
    getters:{
        length(state){          //购物车商品数量
            return state.cartList.size
        },
        totalPrice(state){                         //计算选中的商品的价格
            let price = 0
            state.cartList.forEach((value,key)=>{
                if(value.isSelect == true){
                    price+=parseInt(value.price)*value.count
                }
            })
            return price
        },
        isSelectAll(state){                  //计算是否所有的商品都被选中
            let result = true
            state.cartList.forEach((value,key)=>{
                if(value.isSelect == false){
                    result = false
                }
            })
            return result
        }

    },
    modules:{}
})


export default store