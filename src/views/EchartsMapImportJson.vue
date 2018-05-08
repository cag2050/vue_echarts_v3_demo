<template lang='pug'>
#map.textLeft
    div 引入地图json:
    .fl(@click='returnChinaMap' v-show="mapOption.geo[0].map !== 'china'" style='color:red;margin-top:10px') 返回全国地图
    .echarts.fl
        IEcharts(:option="mapOption" theme="macarons" @click="clickChart")
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/full'
    import 'echarts/theme/macarons.js'

    IEcharts.registerMap('china', require('echarts/map/json/china.json'))
    IEcharts.registerMap('anhui', require('echarts/map/json/province/anhui.json'))
    IEcharts.registerMap('shandong', require('echarts/map/json/province/shandong.json'))

    export default {
        name: '',
        components: {
            IEcharts
        },
        data () {
            return {
                mapOption: {
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
                    calculable: true,
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
                        this.mapOption.geo[0].map = 'anhui'
                        this.mapOption.series[0].map = 'anhui'
                        break
                    case '山东':
                        this.mapOption.geo[0].map = 'shandong'
                        this.mapOption.series[0].map = 'shandong'
                        break
                }
            },
            returnChinaMap () {
                // location.reload()
                this.mapOption.geo[0].map = 'china'
                this.mapOption.series[0].map = 'china'
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
