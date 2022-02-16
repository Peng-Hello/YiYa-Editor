function loadderComponent(com_name, store) {

    //判断现在处于什么环境下工作
    let env =
        import.meta.env.MODE
    const modules =
        import.meta.globEager("./../../components/plug-in/**.vue");
    let components = Object.values(modules)
    let find_cmd = true
    for (let index = 0; index < components.length; index++) {
        let element = components[index].default;

        let fileName = ''
        //生产环境使用
        if (env === 'production') {
            let context = element.setup.toString()
            let temp = context.substring(context.indexOf('com-') + 4)
            fileName = temp.split(' ')[0]
        }
        //开发环境使用
        else if (env === 'development') {
            fileName = (element.__file.split('/')).slice(-1)[0].split('.')[0].toLowerCase()
        }

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