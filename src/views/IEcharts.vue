<template lang='pug'>
.echarts.fl
    IEcharts(:option="option" :resizable="true" :loading="chartLoading")
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
            option: {
                title: {
                    text: '',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(74,56,31,0.85)',
                    borderColor: 'rgba(74,56,31,0.85)',
                    textStyle: {
                        align: 'left'
                    },
                    axisPointer: {
                        lineStyle: {
                            color: '#a19c96'
                        }
                    }
                },
                xAxis: {
                    axisTick: {
                        alignWithLabel: true
                    },
                    data: [1, 2]
                },
                yAxis: [{
                    type: 'value',
                    name: '',
                    position: 'left',
                    axisLabel: {
                        formatter: '{value}'
                    }
                }],
                dataZoom: [{
                    type: 'slider',
                    start: 0,
                    end: 100,
                    zoomLock: true
                }, {
                    start: 0,
                    end: 100,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
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
