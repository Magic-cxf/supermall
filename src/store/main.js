import {createStore} from 'vuex'

const homeModule={
    state(){
        return {
            carouseldata:[],
        }
    }
}
const store = createStore({
    state(){
        return {
            currentType:"pop",
        }
    },
    mutations:{},
    actions:{},
    getters:{},
    modules:{
        homeModule
    }

})


export default store