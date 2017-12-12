import chartInitOption from './chartInitOption'

export default {
    install (Vue, options) {
        // 全局注册混合对象后，会影响到 所有 之后创建的 Vue 实例。
        // 谨慎使用
        Vue.mixin({
            data () {
                return {
                    chartInitOption: chartInitOption
                }
            }
        })
    }
}
