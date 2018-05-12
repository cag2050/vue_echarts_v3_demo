<template lang='pug'>
#map.textLeft
    div 引入地图json（全国地图和省份地图，公用一个 IEcharts 实例；初次点击省份，都能获得正确的 event.name 值；点击"返回全国地图"后，只有赋值了的省份，点击时才能正确获得 event.name 值。）:
    .fl(@click='returnChinaMap' v-show="mapOption.geo[0].map !== 'china'" style='color:red;margin-top:10px') 返回全国地图
    .echarts.fl
        IEcharts(:option="mapOption" theme="shine" @click="clickMapChart")
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/full'
    // 地图需要导入
    import 'echarts/theme/shine.js'
    import 'echarts/map/js/china.js'
    import 'echarts/map/js/province/anhui.js'
    import 'echarts/map/js/province/aomen.js'
    import 'echarts/map/js/province/beijing.js'
    import 'echarts/map/js/province/chongqing.js'
    import 'echarts/map/js/province/fujian.js'
    import 'echarts/map/js/province/gansu.js'
    import 'echarts/map/js/province/guangdong.js'
    import 'echarts/map/js/province/guangxi.js'
    import 'echarts/map/js/province/guizhou.js'
    import 'echarts/map/js/province/hainan.js'
    import 'echarts/map/js/province/hebei.js'
    import 'echarts/map/js/province/heilongjiang.js'
    import 'echarts/map/js/province/henan.js'
    import 'echarts/map/js/province/hubei.js'
    import 'echarts/map/js/province/hunan.js'
    import 'echarts/map/js/province/jiangsu.js'
    import 'echarts/map/js/province/jiangxi.js'
    import 'echarts/map/js/province/jilin.js'
    import 'echarts/map/js/province/liaoning.js'
    import 'echarts/map/js/province/neimenggu.js'
    import 'echarts/map/js/province/ningxia.js'
    import 'echarts/map/js/province/qinghai.js'
    import 'echarts/map/js/province/shandong.js'
    import 'echarts/map/js/province/shanghai.js'
    import 'echarts/map/js/province/shanxi.js'
    import 'echarts/map/js/province/shanxi1.js'
    import 'echarts/map/js/province/sichuan.js'
    import 'echarts/map/js/province/taiwan.js'
    import 'echarts/map/js/province/tianjin.js'
    import 'echarts/map/js/province/xianggang.js'
    import 'echarts/map/js/province/xinjiang.js'
    import 'echarts/map/js/province/xizang.js'
    import 'echarts/map/js/province/yunnan.js'
    import 'echarts/map/js/province/zhejiang.js'

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
                    { name: '浙江', value: this.randomData() }
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
