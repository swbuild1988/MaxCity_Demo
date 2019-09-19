import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "@/assets/less/common.less"
import './plugins/iview.js'
import echarts from 'echarts'

// import Api from '@/utils/request'

// import Router from 'vue-router'
// const routerPush = Router.prototype.push
// Router.prototype.push = function push(location: any) {
//   return routerPush.call(this, location).catch((error: any)=> error)
// }

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false;  


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');



