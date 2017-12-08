import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QueryChart',
      component: resolve => require(['../components/QueryChart'], resolve)
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
