import test from './test.vue'
import {render,h} from 'vue'

const obj = {}

const install = (App)=>{
    let vNode = h(test)
    const vNodeDom = document.createElement('div')
    document.body.appendChild(vNodeDom)
    vNode.appContext = App._context

    render(vNode,vNodeDom)

    App.config.globalProperties.$test = vNode.component.proxy
    // console.log(vNode)
    // console.log(vNode.component)
    // console.log(vNode.component.proxy)
}





obj.install = install


export default obj