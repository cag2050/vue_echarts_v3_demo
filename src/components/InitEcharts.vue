<template lang='pug'>
    IEcharts(:option="option" :resizable="true" :loading="loading" :styles='styles')
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full'

export default {
    components: {
        IEcharts
    },
    props: {
        loading: {
            type: Boolean,
            default: function () {
                return false
            }
        },
        styles: {
            type: Object,
            default: function () {
                return {
                    width: '100%',
                    height: '400px'
                }
            }
        },
        option: {
            type: Object,
            default: function () {
                return {
                    xAxis: {
                        axisTick: {
                            alignWithLabel: true
                        },
                        data: []
                    },
                    yAxis: [{
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} %'
                        }
                    }]
                }
            }
        }
    },
    data () {
        return {
        }
    },
    mounted () {

    },
    computed: {

    },
    methods: {

    }
}
</script>

<style lang='stylus'>

</style>
