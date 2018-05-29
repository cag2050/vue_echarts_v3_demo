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
            component: resolve => require(['./views/EchartsMapImportJs'], resolve)
        },
        {
            path: '/map_json',
            name: '',
            component: resolve => require(['./views/EchartsMapImportJson'], resolve)
        },
        {
            path: '/graph',
            name: '',
            component: resolve => require(['./views/GraphDemo'], resolve)
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        }
    ]
})
