<template lang='pug'>
    IEcharts(:option="option" :styles='styles' :resizable="true" :loading="chartLoading")
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full'

export default {
    components: {
        IEcharts
    },
    props: {

    },
    data () {
        return {
            chartLoading: false,
            styles: {
                width: '100%',
                height: '400px'
            },
            option: {
                xAxis: {
                    axisTick: {
                        alignWithLabel: true
                    },
                    data: [1, 2]
                },
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}'
                    }
                }],
                series: [{
                    name: '1',
                    type: 'line',
                    yAxisIndex: 0,
                    data: [2, 4]
                }, {
                    name: '1',
                    type: 'line',
                    yAxisIndex: 0,
                    data: [3, 6]
                }]
            }
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
.echarts
    width 600px
    height 400px
</style>
