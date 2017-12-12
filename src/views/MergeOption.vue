<template lang='pug'>
    IEcharts(:option="mergedOption" :styles='styles' :resizable="true" :loading="chartLoading")
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full'
import merge from 'lodash/merge'

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
                        formatter: '{value} %'
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
            },
            mergedOption: {}
        }
    },
    mounted () {
        this.mergedOption = merge(this.chartInitOption, this.option)
        console.log(this.mergedOption)
        this.mergedOption.xAxis.data.push(3)
        this.mergedOption.series[0].data.push(6)
        this.mergedOption.series[1].data.push(8)
        this.mergedOption.dataZoom = []
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
