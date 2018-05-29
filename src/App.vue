<template>
  <div id="app"><br/>
  路由列表：<br/>
  <router-link to='/'>echarts 地图钻取例子（引入地图js）</router-link><br/>
  <router-link to='/map_json'>echarts 地图钻取例子（引入地图json）</router-link><br/>
  <router-link to='/graph'>echarts graph例子</router-link><br/>
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
.textLeft {
    text-align: left;
}
.textRight {
    text-align: right;
}
</style>
