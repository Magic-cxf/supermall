import request from "./request";

export  default function getCategory(){
    return request({
        url:'/category'
    })
}