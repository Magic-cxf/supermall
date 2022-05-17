import axios from 'axios'

export default function request(){
    const instance = axios.create({
        baseURL:"http://152.136.185.210:7878/api/hy66",
        method:'get',
        timeout:5000,
    })

    return instance
}