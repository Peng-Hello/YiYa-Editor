import {
    setCaret,
    applyWidth
} from "./toolbox"

function bind_plane_show(content_el, ctrl_plane_el, show) {
    content_el.addEventListener("mouseenter", (e) => {
        show.value = true;
    });
    content_el.addEventListener("mouseleave", (e) => {
        show.value = false;
    });
    ctrl_plane_el.addEventListener("mouseenter", (e) => {
        show.value = true;
    });
    ctrl_plane_el.addEventListener("mouseleave", (e) => {
        show.value = false;
    });
}
//并列孩子查询
function subNodeDistribution(obj) {
    obj.have_input_com = false;
    obj.input_el = null;
    let childList = obj.childList;
    for (let index = 0; index < childList.length; index++) {
        let element = childList[index];
        if (!element.classList.contains("no_inputBox")) {
            obj.have_input_com = true;
            obj.input_el = element;
            break;
        }
    }
    return obj;
}

function init_del_btn(e) {
    let li_el = e.target.parentNode.parentNode.parentNode;
    let div_el = e.target.parentNode.parentNode;

    let childList = li_el.children;
    //并列情况
    if (childList.length >= 2) {
        //子节点分布情况
        let obj = subNodeDistribution({
            have_input_com: false,
            input_el: null,
            childList: childList,
        });
        //子节点全部是自定义组件
        if (obj.have_input_com == false && obj.input_el == null) {
            //向下递归寻找可以聚焦的节点
            //不是最后一个
            //没找到input_el的tagName=span
            function find_focus(obj) {
                if (obj.have_input_com == false && obj.input_el == null) {
                    let now_parentNode = obj.childList[0].parentNode;
                    if (now_parentNode.nextSibling != null) {
                        obj.childList = now_parentNode.nextSibling.children;
                        obj = subNodeDistribution(obj);
                    }
                    find_focus(obj);
                }
                return obj;
            }
            let focusEl = find_focus(obj).input_el;
            if (focusEl.tagName != "span") {
                focusEl.focus();
                setCaret(focusEl);
            }

            div_el.parentNode.removeChild(div_el);
            applyWidth(li_el);
        }
        //子节点有命令输入组件
        else {
            let focusEl = obj.input_el;
            focusEl.focus();
            setCaret(focusEl);
            div_el.parentNode.removeChild(div_el);
            applyWidth(li_el);
        }

    }
    //上下情况
    else {
        function down_find_focus(el) {

            if (el.nextSibling.children[0].tagName != "span") {
                if (el.nextSibling.children[0].classList.contains("no_inputBox")) {
                    el = el.nextSibling;
                    down_find_focus(el);
                }
            }
            return el.nextSibling;
        }
        let focusEl_li = down_find_focus(li_el);
        if (!focusEl_li.classList.contains("no")) {
            focusEl_li.children[0].focus();
            setCaret(focusEl_li.children[0]);
        }
        li_el.parentNode.removeChild(li_el);
    }
}
export {
    bind_plane_show,
    subNodeDistribution,
    init_del_btn
}