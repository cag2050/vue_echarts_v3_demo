<template lang='pug'>
    #graph.textLeft
        div graph例子
        .echarts.fl
            IEcharts(:option="chartOption" theme="infographic")
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/full'
    // import 'echarts/theme/dark.js'
    import 'echarts/theme/infographic.js'
    // import 'echarts/theme/macarons.js'
    // import 'echarts/theme/roma.js'
    // import 'echarts/theme/shine.js'
    // import 'echarts/theme/vintage.js'

    export default {
        name: '',
        components: {
            IEcharts
        },
        data () {
            return {
                // symbolArr: ['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'],
                chartOption: {
                    title: {
                        text: 'Graph 简单示例'
                    },
                    tooltip: {},
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    series: [
                        {
                            type: 'graph',
                            layout: 'none',
                            symbolSize: 50,
                            roam: false,
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            symbol: 'rect',
                            edgeSymbol: ['circle', 'arrow'],
                            edgeSymbolSize: [4, 10],
                            edgeLabel: {
                                normal: {
                                    textStyle: {
                                        fontSize: 16
                                    }
                                }
                            },
                            data: [
                                {
                                    name: '节点1',
                                    x: 300,
                                    y: 300
                                }, {
                                    name: '节点2',
                                    x: 800,
                                    y: 300
                                }, {
                                    name: '节点3',
                                    x: 550,
                                    y: 100
                                }, {
                                    name: '节点4',
                                    x: 550,
                                    y: 500
                                }
                            ],
                            // links: [],
                            links: [
                                {
                                    source: 0,
                                    target: 1,
                                    symbolSize: [5, 20],
                                    label: {
                                        normal: {
                                            show: true
                                        }
                                    },
                                    lineStyle: {
                                        normal: {
                                            width: 5,
                                            curveness: 0.2
                                        }
                                    }
                                },
                                {
                                    source: '节点2',
                                    target: '节点1',
                                    label: {
                                        normal: {
                                            show: true
                                        }
                                    },
                                    lineStyle: {
                                        normal: {
                                            curveness: 0.2
                                        }
                                    }
                                },
                                {
                                    source: '节点1',
                                    target: '节点3'
                                }, {
                                    source: '节点2',
                                    target: '节点3'
                                }, {
                                    source: '节点2',
                                    target: '节点4'
                                }, {
                                    source: '节点1',
                                    target: '节点4'
                                }],
                            lineStyle: {
                                normal: {
                                    opacity: 0.9,
                                    width: 2,
                                    curveness: 0
                                }
                            }
                        }
                    ]
                }
            }
        },
        created () {
        },
        mounted () {

        },
        computed: {},
        methods: {}
    }
</script>

<style lang='stylus' type="text/stylus">
    #graph
        .echarts
            width 600px
            height 400px
</style>
