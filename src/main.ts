import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Helper from './store/DataHelper';
import ItemData from './model/ItemData';
import Category from './model/CateEnum';
Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App),
}).$mount('#app');
