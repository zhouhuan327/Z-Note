import Vue from 'vue';
import App from './App.vue';
import store from './store';
import ActionHelper from './store/ActionHelper';
Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App),
}).$mount('#app');

import ItemData from './model/ItemData';
import Category from './model/CateEnum';
const item = new ItemData(1, Category.Wrok, '标题', '内容');
console.log(item);
