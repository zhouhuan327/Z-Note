import Vue from 'vue';
import App from './App.vue';
import store from './store';
import ActionHelper from '@/store/ActionHelper';
import ItemData from './model/ItemData';
import '@/styles/index.scss'; // global css
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

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
