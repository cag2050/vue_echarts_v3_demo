// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css'
import Helpers from './helpers'
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(Helpers)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
