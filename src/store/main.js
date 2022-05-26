import {createStore} from 'vuex'


const store = createStore({
    state(){
        return {
            cartGood:[]          //购物车商品
        }
    },
    mutations:{
        incrementGood(state,payload){
            state.cartGood.push(payload)
        },
        incrementCount(state,payload){
            state.cartGood[payload]['count']++
        }
    },
    actions:{
        addGood({state, commit,getters},payload){
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
            
            console.log(state.cartGood)

        }
    },
    getters:{
        length(state){
            return state.cartGood.length
        }
    },
    modules:{}

})


export default store