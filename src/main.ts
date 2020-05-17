import Vue from 'vue';
import App from './App.vue';
import store from './store';
import ActionHelper from './store/ActionHelper';
import ItemData from './model/ItemData';
import Category from './model/CateEnum';
Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App),
}).$mount('#app');
// const ahelper = new ActionHelper();
// ahelper.add(new ItemData(Category.Life, '学习', '今天学数学'));
