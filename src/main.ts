import Vue from 'vue';
import App from './App.vue';
import store from './store';
// global css
import '@/styles/index.scss';
import ActionHelper from '@/store/ActionHelper';
import ItemData from './model/ItemData';
Vue.config.productionTip = false;

//初始化一些数据
const helper = new ActionHelper();
if (!localStorage.getItem('zNote')) {
    helper.add(new ItemData(1, '第一篇文章', '这里是文章内容'));
}

new Vue({
    store,
    render: h => h(App),
}).$mount('#app');
