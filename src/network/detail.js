import request from './request'

export default function getGoodInfo(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}