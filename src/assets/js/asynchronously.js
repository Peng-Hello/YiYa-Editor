function asynchronously(f) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 100);
    }).then(() => {
        f()
    });
}

function getSelect(idCard, selector) {
    let parent = document.getElementById(idCard)
    return parent.querySelector(selector)
}
export {
    asynchronously,
    getSelect
}