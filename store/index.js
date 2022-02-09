import {
    createStore
} from 'vuex'
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
        }
    },
    actions: {

    }
})


export default store