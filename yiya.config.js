export default {
    hotkeySettings: {
        allow_drag_key: 'alt',
        base: [{
            cmd: 'backColor',
            valList: ['orange', 'crimson', 'deepskyblue', 'yellow'],
            hotKey: ['alt+o', 'alt+r', 'alt+b', 'alt+y']
        }, {
            cmd: 'bold',
            hotKey: 'ctrl+b'
        }, {
            cmd: 'italic',
            hotKey: 'ctrl+i'
        }, {
            cmd: 'removeFormat',
            hotKey: 'shift+space'
        }, {
            cmd: 'strikeThrough',
            hotKey: 'alt+d'
        }, {
            cmd: 'createLink',
            hotKey: 'ctrl+h'
        }, {
            cmd: 'underline',
            hotKey: 'alt+u'
        }, {
            cmd: 'justifyLeft',
            hotKey: 'ctrl+j'
        }, {
            cmd: 'justifyCenter',
            hotKey: 'ctrl+k'
        }, {
            cmd: 'justifyRight',
            hotKey: 'ctrl+l'
        }, {
            cmd: 'fontSize',
            valList: ['1', '2', '3', '4', '5', '6', '7'],
            hotKey: ['alt+1', 'alt+2', 'alt+3', 'alt+4', 'alt+5', 'alt+6', 'alt+7']
        }],
        plugins: []
    }
}