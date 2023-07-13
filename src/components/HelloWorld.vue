<template>
  <h3>hooks</h3>

  <p>页面宽度: {{screen.width}}</p>
  <p>页面高度: {{screen.height}}</p>

  <el-button @click="getWH">获取页面的宽高</el-button>

</template>
<script setup lang="ts">

  // 导入 hooks 
  import screenWH from '../hooks/getScreenWh.js'

  // 因为 screenWH 是一个导出的方法，所以需要调用一下子，然后顺便解构一下就可以在模板使用了。
  let { screen, getWH } = screenWH()

</script>
<style scoped>

</style>
