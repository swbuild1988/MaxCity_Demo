import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "@/assets/less/common.less"
import './plugins/iview.js'
import echarts from 'echarts'
// import Api from '@/utils/request'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false;  

// Vue.use(Api)

// main 初始化
// async function main_init() {
//     console.log("开始初始化")
//     try {
//         console.log("------------------- 引入request -------------------")
//         console.log("111",(await import("@/utils/request.ts")))
//         let request = (await import("@/utils/request.ts")).default;
//         console.log("request", request)
//         await request();

//         return "success"

//     } catch (err) {
//         throw new Error(err);
//     }
// }

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
// main_init().then(res => {
//     console.log("初始化结束", res)

//     // 待初始化成功后，创建新的Vue实例


// }).catch(err => {
//     console.log("初始化异常", err)
// })


