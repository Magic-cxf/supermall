import request from "./request";

export function getHomeCarousel(){
    return request({
        url:'/home/multidata',
    })
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

export function getGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,page
        }
    })
}