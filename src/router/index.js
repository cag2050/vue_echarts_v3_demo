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
            component: resolve => require(['../components/InitEcharts'], resolve)
        },
        {
            path: '/iecharts',
            name: '',
            component: resolve => require(['../views/IEcharts'], resolve)
        },
        {
            path: '/useinitechartscomp',
            name: '',
            component: resolve => require(['../views/UseInitEchartsComp'], resolve)
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        }
    ]
})
