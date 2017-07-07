<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <IEcharts :option="scoreOptions" style="width: 600px; height:400px"></IEcharts>
  </div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.vue'
// import IEcharts from 'vue-echarts-v3/src/lite.vue'

export default {
    name: 'hello',
    components: {
        IEcharts
    },
    data () {
        return {
            msg: 'echarts to Your Vue.js App',
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
    },
    computed: {
        scoreOptions () {
            console.log(this)
            console.log(this.chartOptions)

            let options = this.chartOptions
            console.log(options)
            options.tooltip = this.tooltip
            options.series = this.series
            return options
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
