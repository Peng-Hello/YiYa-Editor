import {
    createStore
} from 'vuex'
import {
    applyHigh
} from '../src/assets/js/toolbox'
import inputBox from '../src/components/base/InputBox.vue'
import blank from '../src/components/base/blank.vue'
const store = createStore({
    state: {
        loadList: [inputBox, inputBox, inputBox, blank],
        allowEdit: true
    },
    getters: {

    },
    mutations: {
        ADD_COMPONENT(state, newValue) {
            state.loadList.push(newValue)
            applyHigh(600)
        },
        SET_ALLOWEDIT(state) {
            state.allowEdit = !state.allowEdit
        }
    },
    actions: {

    }
})


export default store