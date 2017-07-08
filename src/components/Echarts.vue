<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <IEcharts ref='echart' :option="options" style="width: 600px; height:400px"></IEcharts>
  </div>
</template>

<script>
// import IEcharts from 'vue-echarts-v3/src/full.vue'
import IEcharts from 'vue-echarts-v3/src/lite.vue'
import 'echarts/lib/chart/gauge'

export default {
    name: 'hello',
    components: {
        IEcharts
    },
    mounted () {
        console.log(this.$refs.echart)
    },
    data () {
        return {
            msg: 'echarts to Your Vue.js App',
            options: {
                tooltip: {
                    formatter: '{a} <br/>{b} : {c}%'
                },
                series: [
                    {
                        name: '业务指标',
                        type: 'gauge',
                        detail: {formatter: '{value}%'},
                        data: [{value: 50, name: '完成率'}]
                    }
                ]
            }
        }
    },
    computed: {

    }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
