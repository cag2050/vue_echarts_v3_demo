<template lang='pug'>
    QueryChart(:option='option' :loading='chartLoading' :styles='chartStyle')
</template>

<script>
import QueryChart from '../components/QueryChart'

export default {
    name: '',
    components: {
        QueryChart
    },
    data () {
        return {
            chartLoading: false,
            chartStyle: {
                height: '200px'
            },
            option: {
                xAxis: {
                    data: [1, 2, 3]
                },
                yAxis: [{}],
                series: [{
                    name: '1',
                    type: 'line',
                    data: [2, 4]
                }, {
                    name: '1',
                    type: 'line',
                    data: [3, 6]
                }, {
                    name: '1',
                    type: 'line',
                    data: [4, 8]
                }]
            }
        }
    }
}
</script>

<style lang='stylus'>

</style>
