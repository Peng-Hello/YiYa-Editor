function loadderComponent(com_name, store) {

    const modules =
        import.meta.globEager("./../../components/plug-in/**.vue");
    let components = Object.values(modules)
    let find_cmd = true
    for (let index = 0; index < components.length; index++) {
        let element = components[index].default;
        let fileName = (element.__file.split('/')).slice(-1)[0].split('.')[0].toLowerCase()

        if (com_name.toLowerCase() === fileName) {
            store.commit('ADD_COMPONENT', element)
            break;
        }
        if (index == components.length - 1) {
            find_cmd = false
        }
    }
    return find_cmd

}
export {
    loadderComponent
}