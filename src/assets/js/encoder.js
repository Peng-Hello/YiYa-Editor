function class_lookUp(el_classList) {
    for (let j = 0; j < el_classList.length; j++) {
        let className = el_classList[j]
        if (className.indexOf('com-') !== -1) {
            return className.split('-')[1]
        }
    }
    return null
}

function savePart_lookUp(row_el, structureTemplate) {
    // console.dir(row_el);
    if (row_el.classList.contains('savePart')) {
        structureTemplate.savePart = row_el.innerHTML
    } else {
        structureTemplate.savePart = row_el.querySelectorAll('.savePart')[0].innerHTML
    }
}

function encoder() {
    let childList = document.getElementById('componentContainer').children
    let data = {
        dataList: []
    }
    //-1是为了忽略最后的span标签
    for (let i = 0; i < childList.length - 1; i++) {
        const el = childList[i]
        let structureTemplate = {
            component: '',
            savePart: null
        }
        let templateList = []
        //判断是不是并列
        if (el.children.length >= 2) {
            //并列情况
            let row_childList = el.children
            for (let index = 0; index < row_childList.length; index++) {
                let row_el = row_childList[index]
                let structureTemplate1 = {
                    component: '',
                    savePart: null
                }
                //查找组件名
                const com_name = class_lookUp(row_el.classList)
                if (com_name != null) {
                    structureTemplate1.component = com_name
                }
                //没找到组件名
                if (structureTemplate1.component === '') {
                    console.log('编码出现错误！请检查组件名是否在classList中');
                }
                //查找需要保存部分,可能会切断响应性

                savePart_lookUp(row_el, structureTemplate1)

                templateList.push(structureTemplate1)

            }

            //单行结束
        } else {
            //单个独占一行的情况
            let com_name = class_lookUp(el.children[0].classList)
            if (com_name != null) {
                structureTemplate.component = com_name
            }

            savePart_lookUp(el.children[0], structureTemplate)
            templateList.push(structureTemplate)
        }
        data.dataList.push(templateList)
    }

    let d = JSON.stringify(data)
    console.log(d);
    console.log(data);
}
export {
    encoder
}