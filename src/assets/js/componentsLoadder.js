function loadderComponent(com_name, store) {

    const modules =
        import.meta.globEager("./../../components/plug-in/**.vue");
    let components = Object.values(modules)
    for (let index = 0; index < components.length; index++) {
        let element = components[index].default;
        let fileName = (element.__file.split('/')).slice(-1)[0].split('.')[0].toLowerCase()
        if (com_name.toLowerCase() === fileName) {
            store.commit('ADD_COMPONENT', element)
        }
    }

}
export {
    loadderComponent
}