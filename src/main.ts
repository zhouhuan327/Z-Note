import Vue from 'vue';
import App from './App.vue';
import store from './store';
// global css
import '@/styles/index.scss';

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App),
}).$mount('#app');
// const ahelper = new ActionHelper();
// ahelper.add(new ItemData(Category.Life, '学习', '今天学数学'));
