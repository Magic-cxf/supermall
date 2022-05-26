import {createStore} from 'vuex'


const store = createStore({
    state(){
        return {
            cartGood:[]          //购物车商品
        }
    },
    mutations:{
        addGood(state,payload){
            state.cartGood.push(payload)
        },
    },
    actions:{},
    getters:{
        length(state){
            return state.cartGood.length
        }
    },
    modules:{}

})


export default store