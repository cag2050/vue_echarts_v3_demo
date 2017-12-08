import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '',
            component: resolve => require(['../components/QueryChart'], resolve)
        },
        {
            path: '/iecharts',
            name: '',
            component: resolve => require(['../views/IEcharts'], resolve)
        },
        {
            path: '/',
            name: '',
            component: resolve => require(['../components/QueryChart'], resolve)
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        }
    ]
})
