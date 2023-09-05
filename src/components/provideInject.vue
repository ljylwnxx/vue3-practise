<template>
  <div>
    <h1>子组件</h1>
    <div>接受到的数据：{{ getPerson }} - {{ getAddress }}
    <h1>人物简介</h1>
    <p>姓名：{{getPerson.name }}</p>
    <p>年龄：{{getPerson.age}}岁</p>
    <p>地址：{{getAddress.provice}}- {{ getAddress.city }}</p>
    </div>
  </div> 
</template>

<script setup>
import { inject } from 'vue'

    const getPerson = inject('changePerson', '这是默认值我叫pupu,今年10岁')
    const getAddress = inject('changeAddress', '我来自浙江省-杭州市')
    console.log(getPerson, 'getperson')
    console.log(getAddress, 'getaddress')
</script>
