import showSelects from './showSelects.vue'
import { render, h} from 'vue'

const obj={}

const install = function (app){
    const vNode = h(showSelects)
    const vNodevm = document.createElement('div')
    document.body.appendChild(vNodevm)

    vNode.appContext = app._context
    render(vNode,vNodevm)

    app.config.globalProperties.$showSelects = vNode.component.proxy
    console.log("showSelects install success")


}

obj.install = install

export default obj