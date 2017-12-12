<template>
  <div id="app"><br/>
  路由列表：<br/>
  <router-link to='/useinitechartscomp'>UseInitEchartsComp：使用InitEcharts组件</router-link><br/>
  <router-link to='/'>InitEcharts：正在改IEcharts成组件</router-link><br/>
  <router-link to='/iecharts'>IEcharts 原组件</router-link><br/>
  <router-link to='/hello'>hello页面</router-link><br/>
  <div>============以下是内容=============</div>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
