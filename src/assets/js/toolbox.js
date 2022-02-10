import {
    nanoid
} from 'nanoid'
import config from '../../../yiya.config'
import keyboardjs from 'keyboardjs';
import inputBox from '../../components/base/InputBox.vue'
//给拖动的元素添加"外壳"
function addShell(position, el, source) {
    let rand_id = nanoid();
    const template =
        "<li id=" +
        rand_id +
        ' class="w-full flex mb-2 dragula-container newel">' +
        "</li>";
    if (source != null) {
        source.insertAdjacentHTML(position, template);
        document.getElementById(rand_id).insertAdjacentElement("beforeend", el);
    } else {
        //上下交换到最后一个的问题
        let container = document.getElementById('componentContainer')
        container.insertAdjacentHTML('beforeend', template)
        document.getElementById(rand_id).insertAdjacentElement("beforeend", el);
    }
}
//宽度自适应
function applyWidth(target) {
    let childList = target.childNodes;
    for (let index = 0; index < childList.length; index++) {
        childList[index].style.width =
            (target.clientWidth / childList.length) - (childList.length - 1) * 8 + "px";
    }
}
//高度自适应
function applyHigh(offset) {
    let parentNode = document.getElementById('editor')
    let childNode = document.getElementById('componentContainer')
    parentNode.style.height = childNode.clientHeight + offset + 'px'
}

function setCaret(el) {
    if (el.childNodes[0] != undefined) {
        let range = document.createRange()
        let sel = window.getSelection()

        range.setStart(el.childNodes[0], el.childNodes[0].length)
        range.collapse(true)

        sel.removeAllRanges()
        sel.addRange(range)
    }
}
//浏览器尺寸变化宽度自适应
function windowsWidthApply() {
    window.addEventListener('resize', () => {
        Array.from(document.getElementById('componentContainer').children, (item) => {
            applyWidth(item)
        })
    })
}

//键盘绑定
//增删
function bindEditorSetting(store) {
    //增
    keyboardjs.bind('enter+shift', (e) => {
        e.preventDefault()
        new Promise((resolve, reject) => {
            store.commit('ADD_COMPONENT', inputBox)
            resolve()
        }).then(() => {
            let focusEl = document.activeElement
            let temp = document.getElementById("componentContainer").children
            let childList = [];
            for (let i = 0; i < temp.length; i++) {
                childList.push(temp[i])
            }
            focusEl.parentNode.insertAdjacentElement('afterend', childList[childList.length - 1])
            childList[childList.length - 1].childNodes[0].focus()
        })

    })
    //删

    keyboardjs.bind('backspace', (e) => {
        if (e.target.innerHTML == "") {
            if (e.target.parentNode.childNodes.length > 1) {
                //并列情况
                let childList = e.target.parentNode.childNodes
                let position = Array.from(childList).indexOf(e.target) - 1
                childList[position].focus()
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve()
                    }, 100)

                }).then(() => {
                    setCaret(childList[position])
                })
                //移除
                let tempEl = e.target.parentNode
                e.target.parentNode.removeChild(e.target);
                applyWidth(tempEl)
                applyHigh(600)
            } else {
                let el = e.target.parentNode
                //恢复聚焦
                let childList = Array.from(document.getElementById("componentContainer").children)

                //判断是否是头节点
                if (childList.length > 2) {
                    let position = childList.indexOf(el) - 1

                    if (typeof (childList[position]) !== 'undefined') {
                        childList[position].childNodes[0].focus()
                        //防止误删
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve()
                            }, 100)
                        }).then(() => {
                            setCaret(childList[position].childNodes[0])
                        })
                        //移除
                        el.parentNode.removeChild(el);
                        applyHigh(600)
                    }
                }
            }
        }
    })
}
//execommand 绑定
function bindcommand() {
    let settingList = config.hotkeySettings.base
    for (let index = 0; index < settingList.length; index++) {
        let element = settingList[index];
        let cmd = element.cmd
        let valList = element.valList
        let hotKey = element.hotKey
        if (typeof (valList) == 'undefined') {
            keyboardjs.bind(hotKey, (e) => {
                e.preventDefault()
                document.execCommand(cmd)
            })
        } else {
            //多个值
            for (let i = 0; i < valList.length; i++) {
                let val = valList[i];
                keyboardjs.bind(hotKey[i], (e) => {
                    e.preventDefault()
                    document.execCommand(cmd, false, val)
                })
            }

        }

    }
}


//保存
function bindSave() {
    keyboardjs.bind('ctrl+s', (e) => {
        e.preventDefault()
        alert(saveData())
    })
}

function saveData() {
    let data = document.getElementById('componentContainer').innerHTML
    data = data.slice(0, -38)
    return data
}

function loadData(data) {
    const el = document.getElementById('componentContainer')
    el.insertAdjacentHTML('afterbegin', data)
}
//插件绑定
export {
    addShell,
    applyWidth,
    applyHigh,
    windowsWidthApply,
    bindEditorSetting,
    bindcommand,
    bindSave,
    loadData,
}