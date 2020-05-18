import Vue from 'vue';
import Vuex from 'vuex';
import ActionHelper from './ActionHelper';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        actionHelper: new ActionHelper(),
        isShowEditor: false,
        updatingNote: null, //当前正在修改的笔记
        filterCateId: -1, //当前筛选的笔记类型id
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
