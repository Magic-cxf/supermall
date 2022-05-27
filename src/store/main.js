import {createStore} from 'vuex'


const store = createStore({
    state(){
        return {
            cartGood:[],          //购物车商品
        }
    },
    mutations:{
        incrementGood(state,payload){   //向购物车增加商品
            state.cartGood.push(payload)
        },
        incrementCount(state,payload){   //向购物车增加商品的个数
            state.cartGood[payload]['count']++
        },
        isChecked(state,payload){
            state.cartGood[payload]['isSelect'] = true
        },
        cancleChecked(state,payload){
            state.cartGood[payload]['isSelect'] = false
        }
    },
    actions:{
        addGood({state, commit,getters},payload){  //向购物车增加商品
            if(getters.length == 0 ){
                commit('incrementGood',payload)
                return 
            }
            for(let index in state.cartGood){
                if(state.cartGood[index]['iid'] == payload['iid']){
                    commit('incrementCount',index)
                    return 
                }
            }
            commit('incrementGood',payload)
        },
        goodSelect({commit,state},payload){
            for(let index in state.cartGood){
                if(state.cartGood[index]['iid'] == payload){
                    commit('cancleChecked',index)
                }
            }
        },
        cancleSlect({commit,state},payload){
            for(let index in state.cartGood){
                if(state.cartGood[index]['iid'] == payload){
                    commit('isChecked',index)
                }
            }
        }
    },
    getters:{
        length(state){   //购物车中商品的数量
            return state.cartGood.length
        },
    },
    modules:{}

})


export default store