import Vue from 'vue'
import App from './App.vue'
// 引入模块
import VueRouter from "vue-router";//路由模块

// 引入组件
import index from './components/index.vue';//index组件

// 使用中间件 
Vue.use(VueRouter);

// 注册路由规则
const router = new VueRouter({
  routes: [
    // 访问的是 / 打到(重定向)
    {
      path: "/",
      redirect: "/index"
    },
    // index 都显示 index这个组件
    {
      path: "/index",
      component: index
    },
    
  ]
});


Vue.config.productionTip = false

new Vue({
  // 挂载到vue
  router,
  render: h => h(App)
}).$mount('#app')
