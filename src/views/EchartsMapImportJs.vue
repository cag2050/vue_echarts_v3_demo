<template lang='pug'>
#map.textLeft
    div 引入地图js（全国地图和省份地图，分别有一个 IEcharts 实例；只有山东和安徽导入了数据，可以点击）:
    .fl(@click='returnChinaMap' v-show='!showChinaMap' style='color:red;margin-top:10px') 返回全国地图
    .echarts.fl(v-if='showChinaMap')
        IEcharts(:option="chinaMapOption" theme="macarons" @click="clickChart")
    .echarts.fl(v-if='!showChinaMap')
        IEcharts(:option="provinceMapOption" theme="macarons")
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/full'
    import 'echarts/theme/macarons.js'

    import 'echarts/map/js/china.js'
    import 'echarts/map/js/province/anhui.js'
    import 'echarts/map/js/province/shandong.js'

    export default {
        name: '',
        components: {
            IEcharts
        },
        data () {
            return {
                showChinaMap: true,
                chinaMapOption: {
                    tooltip: {
                        trigger: 'item'
                        // formatter: '{b}'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left'
                    },
                    visualMap: {
                        min: 0,
                        max: 1000,
                        left: 'left',
                        top: 'bottom',
                        // text: ['高', '低'],
                        calculable: true
                    },
                    geo: [{
                        name: '地图',
                        type: 'map',
                        map: 'china',
                        // map: 'anhui',
                        roam: false,
                        selectedMode: 'single',
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                label: {
                                    show: true
                                }
                            }
                        }
                    }],
                    // calculable: true,
                    series: [
                        {
                            name: '访问量统计',
                            type: 'map',
                            map: 'china',
                            roam: false,
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                // { name: '北京', value: this.randomData() },
                                // { name: '天津', value: this.randomData() },
                                // { name: '上海', value: this.randomData() },
                                // { name: '广东', value: this.randomData() },
                                // { name: '台湾', value: this.randomData() },
                                // { name: '香港', value: this.randomData() },
                                // { name: '澳门', value: this.randomData() }
                            ]
                        }
                    ]
                },
                provinceMapOption: {
                    tooltip: {
                        trigger: 'item'
                        // formatter: '{b}'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left'
                    },
                    visualMap: {
                        min: 0,
                        max: 1000,
                        left: 'left',
                        top: 'bottom',
                        // text: ['高', '低'],
                        calculable: true
                    },
                    geo: [{
                        name: '地图',
                        type: 'map',
                        map: '',
                        // map: 'anhui',
                        roam: false,
                        selectedMode: 'single',
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                label: {
                                    show: true
                                }
                            }
                        }
                    }],
                    calculable: true,
                    series: [
                        {
                            name: '访问量统计',
                            type: 'map',
                            map: '',
                            roam: false,
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                // { name: '北京', value: this.randomData() },
                                // { name: '天津', value: this.randomData() },
                                // { name: '上海', value: this.randomData() },
                                // { name: '广东', value: this.randomData() },
                                // { name: '台湾', value: this.randomData() },
                                // { name: '香港', value: this.randomData() },
                                // { name: '澳门', value: this.randomData() }
                            ]
                        }
                    ]
                }
            }
        },
        mounted () {

        },
        computed: {},
        methods: {
            randomData () {
                return Math.round(Math.random() * 1000)
            },
            clickChart (event, instance, ECharts) {
                console.log('event=')
                console.log(event)
                // console.log('instance=')
                // console.log(instance)
                // console.log('ECharts=')
                // console.log(ECharts)
                switch (event.name) {
                    case '安徽':
                        this.provinceMapOption.geo[0].map = '安徽'
                        this.provinceMapOption.series[0].map = '安徽'
                        this.showChinaMap = false
                        break
                    case '山东':
                        this.provinceMapOption.geo[0].map = '山东'
                        this.provinceMapOption.series[0].map = '山东'
                        this.showChinaMap = false
                        break
                }
            },
            returnChinaMap () {
                // 权宜之计：点击"返回全国地图"时，刷新页面
                // 因为返回全国地图后，click事件无法获得event.name，这里采取刷新页面的方式来初始化页面。
                location.reload()
                // this.showChinaMap = true
            }
        }
    }
</script>

<style lang='stylus' type="text/stylus">
    #map
        .echarts
            width 600px
            height 400px
</style>
