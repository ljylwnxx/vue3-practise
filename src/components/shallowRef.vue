<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}岁</p>
    <p>爱好：{{hobby.join('、')}}</p>
    <p>描述：{{description}}</p>
    <button @click="modifyInfo">
    点击按钮修改信息
    </button> 
  </div> 
</template>

<script setup>
import { shallowRef } from 'vue'

    const name = shallowRef('pupu')
    const age = shallowRef(10)
    const hobby = shallowRef(['唱歌', '画画'])
    const description = shallowRef('一点也不可爱，不喜欢吃蜂蜜！')
    
    // 修改信息
    const modifyInfo = () => {
        name.value = 'wnxx'
        age.value = 3 
        hobby.value = ['打羽毛球', '旅游']
        description.value = '非常的可爱，特别喜欢吃蜂蜜！'
    } 
    
</script>
