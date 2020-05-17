import Vue from 'vue';
import Vuex from 'vuex';
import ActionHelper from './ActionHelper';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        actionHelper: new ActionHelper(),
        isShowEditor: false,
        updateId: null,
    },
    mutations: {},
    actions: {},
    modules: {},
});
