<template lang='pug'>
#map.textLeft
    div 引入地图json（全国地图和省份地图，公用一个 IEcharts 实例；只导入了山东和安徽2个省的地图json，因此只有这2个省点击后能进入市级地图；初次点击省份，都能获得正确的 event.name 值；点击"返回全国地图"后，只有赋值了的省份，点击时才能正确获得 event.name 值。）:
    .fl(@click='returnChinaMap' v-show="mapOption.geo[0].map !== 'china'" style='color:red;margin-top:10px') 返回全国地图
    .echarts.fl
        IEcharts(:option="mapOption" theme="shine" @click="clickMapChart")
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/full'
    // 地图需要导入
    import 'echarts/theme/shine.js'
    IEcharts.registerMap('china', require('echarts/map/json/china.json'))
    IEcharts.registerMap('山东', require('echarts/map/json/province/shandong.json'))
    IEcharts.registerMap('安徽', require('echarts/map/json/province/anhui.json'))

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
                            data: []
                        }
                    ]
                },
                provincesDataArr: [
                    { name: '山东', value: this.randomData() },
                    { name: '安徽', value: this.randomData() }
                ],
                // 点击后能进入市级地图的省份
                // 全部省份没添加：'北京', '天津', '上海', '重庆', '香港', '澳门', '台湾'
                canClickProvinceArr: ['云南', '内蒙古', '吉林', '四川', '宁夏', '安徽', '山东', '山西', '广东', '广西', '新疆', '江苏', '江西', '河北', '河南', '浙江', '海南', '湖北', '湖南', '甘肃', '福建', '西藏', '贵州', '辽宁', '陕西', '青海', '黑龙江'],
                shandongCitiesDataArr: [
                    {name: '济南市', value: this.randomData()}
                ]
            }
        },
        created () {
            this.mapOption.series[0].data = this.provincesDataArr
        },
        mounted () {

        },
        computed: {},
        methods: {
            randomData () {
                return Math.round(Math.random() * 1000)
            },
            clickMapChart (event, instance, ECharts) {
                // 初次点击，都能获得正确的 event.name 值；
                // 点击"返回全国地图"后，只有赋值了的省份，点击时才能正确获得 event.name 值。
                console.log('event.name=')
                console.log(event.name)
                // 点击后能进入市级地图的省份
                // 市级不让点击了，即不进入县级地图
                if (event.name !== '' && this.canClickProvinceArr.includes(event.name)) {
                    if (event.name === '山东') {
                        this.mapOption.geo[0].map = event.name
                        this.mapOption.series[0].map = event.name
                        this.mapOption.series[0].data = this.shandongCitiesDataArr
                    } else {
                        this.mapOption.geo[0].map = event.name
                        this.mapOption.series[0].map = event.name
                    }
                }
            },
            returnChinaMap () {
                this.resetMapChartData()
                this.mapOption.geo[0].map = 'china'
                this.mapOption.series[0].map = 'china'
                this.mapOption.series[0].data = this.provincesDataArr
            },
            resetMapChartData () {
                this.mapOption.visualMap.min = 0
                this.mapOption.visualMap.max = 1000
                this.mapOption.series[0].name = ''
                this.mapOption.series[0].data = []
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
