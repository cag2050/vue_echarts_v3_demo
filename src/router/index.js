import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Echarts from '@/components/Echarts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Echarts',
      component: Echarts
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
