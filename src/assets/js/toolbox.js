import {
    nanoid
} from 'nanoid'
//给拖动的元素添加"外壳"
function addShell(position, el, source) {
    if (source != null) {
        let rand_id = nanoid();
        const template =
            "<li id=" +
            rand_id +
            ' class="w-full flex mb-2 dragula-container">' +
            "</li>";
        source.insertAdjacentHTML(position, template);
        document.getElementById(rand_id).insertAdjacentElement("beforeend", el);
    }
}
//宽度自适应
function applyWidth(target) {
    let childList = target.childNodes;
    for (let index = 0; index < childList.length; index++) {
        childList[index].style.width =
            target.clientWidth / childList.length + "px";
    }
}
export {
    addShell,
    applyWidth
}