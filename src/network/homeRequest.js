import request from "./request";

export default function getHomeCarousel(){
    return request({
        url:'/home/multidata',
    })
}