import {
    datas
} from './testdata'
import {
    loadderComponent
} from './componentsLoadder'
import inputbox from '../../components/base/InputBox.vue'

function garbageCollection() {
    let childList = document.getElementById('componentContainer').children
    for (let index = 0; index < childList.length; index++) {
        const element = childList[index];
        if (element.innerHTML == "") {
            element.parentNode.removeChild(element)
        }

    }
}

function decoder(store) {
    store.commit("SET_INITLIST");
    let dataList = datas.dataList
    new Promise((resolve, reject) => {
        for (let index = 0; index < dataList.length; index++) {
            let now_row = dataList[index];
            for (let i = 0; i < now_row.length; i++) {
                let components = now_row[i]
                let com_name = components.component.toLowerCase()
                let savePart = components.savePart
                //加载组件(DOM render)
                if (com_name == 'inputbox') {
                    store.commit('ADD_COMPONENT', inputbox)
                } else {
                    loadderComponent(com_name, store)
                }
            }
        }
        resolve()
    }).then(() => {
        let dom_index = 0
        let childList = document.getElementById('componentContainer').children
        for (let index = 0; index < dataList.length; index++) {
            const row_data = dataList[index];
            let range = dom_index + row_data.length
            let counter = 0
            let headNode = null
            for (dom_index; dom_index < range; dom_index++) {
                let element = childList[dom_index].querySelectorAll('.savePart')[0]
                let dragPart = childList[dom_index].querySelectorAll('.drag')[0]

                element.innerHTML = row_data[counter].savePart
                //拼装
                if (counter != 0) {
                    //这样做不会消除响应性
                    headNode.append(dragPart)

                } else {
                    headNode = childList[dom_index]
                }
                counter++
            }
        }
        //垃圾回收
        garbageCollection()

    })

}
export {
    decoder
}