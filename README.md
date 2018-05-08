# vue_echarts_v3_demo

* 官方地址：https://github.com/xlsdg/vue-echarts-v3

### [vue-echarts-v3](https://github.com/xlsdg/vue-echarts-v3) 引入地图资源的2种方式：
echarts 官方说明：http://echarts.baidu.com/option.html#geo.map
* 1.js方式
```
    import 'echarts/map/js/china.js'
    import 'echarts/map/js/province/anhui.js'
    import 'echarts/map/js/province/shandong.js'
```
注意：以js方式引用省市自治区地图 map 值为简体中文，例如 beijing.js，map 值为’北京’。
* 2.json方式
```
    import IEcharts from 'vue-echarts-v3/src/full'

    IEcharts.registerMap('china', require('echarts/map/json/china.json'))
    IEcharts.registerMap('anhui', require('echarts/map/json/province/anhui.json'))
    IEcharts.registerMap('shandong', require('echarts/map/json/province/shandong.json'))
```
json方式引入，需要注册下：`IEcharts.registerMap()`

* 注意：不管是js方式还是json方式引入，中国地图的map值为 ‘china’ ，世界地图的map值为 ‘world’。


> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
