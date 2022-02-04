import {
    nanoid
} from 'nanoid'

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
export {
    addShell
}