import Vue from 'vue';
import Vuex from 'vuex';
import ActionHelper from './ActionHelper';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        actionHelper: new ActionHelper(),
        isShowEditor: false,
        updatingNote: null,
    },
    mutations: {
        showEditor(state: any, note: any) {
            state.isShowEditor = true;
            state.updatingNote = note;
        },
    },
    actions: {},
    modules: {},
});
