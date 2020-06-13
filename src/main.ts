import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import store from './store';
import ItemData from './model/ItemData';
import '@/styles/index.scss'; // global css
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

//初始化一些数据
const helper = store.state.actionHelper;
if (helper.noteList.length === 0) {
    helper.add(new ItemData(1, '欢迎使用Z-NOTE', '这是一个笔记应用'));
    helper.add(new ItemData(2, '这里是笔记的标题', '这里是笔记的内容'));
    helper.add(new ItemData(0, '右边这两个按钮', '可以分别对笔记进行编辑和删除'));
    helper.add(new ItemData(0, '笔记可以通过分类筛选', '共有生活，工作，学习三种分类'));
}

new Vue({
    store,
    render: h => h(App),
}).$mount('#app');
