import { createApp } from 'vue'
// import router from './router/index'
// import store from './store/index'
// import i18n from './locales/index'
import ElementPlus from 'element-plus'  //引入插件
import 'element-plus/theme-chalk/index.css' //默认css样式
// import zhCn from 'element-plus/es/locale/lang/zh-cn'   //引入中文包
import {createPinia} from 'pinia'
const state = createPinia()


import App from './App.vue'

createApp(App)
    // .use(store)
    // .use(router)
    // .use(i18n)
    .use(state)
    .use(ElementPlus)   // use
    .mount('#app')
    // use(ElementPlus,{locale:zhCn})   // use