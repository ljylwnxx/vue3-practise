<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{info.name}}</p>
    <p>年龄：{{info.age}}岁</p>
    <p>爱好：{{info.hobbies.join('、')}}</p>
    <p>地址：{{address.provice}} - {{ address.city }} </p>
    <p>描述：{{description}}</p>
    <button @click="isJudgeIsReadonly">
      isReadonly判断
    </button>
  </div> 
</template>

<script setup>
import { ref, readonly, shallowReadonly, isReadonly } from 'vue'

    const info = readonly({
      name: 'pupu',
      age: 10,
      hobbies: ['唱歌', '画画'],
    })
    const address = shallowReadonly({
        provice: '浙江省',
        city: '杭州市'        
    })
    const description = ref('一点也不可爱，不喜欢吃蜂蜜！')
    
    const  isJudgeIsReadonly  = () => {
        console.log('判断info', isReadonly(info)) 
        console.log('判断address', isReadonly(address))
        console.log('判断description', isReadonly(description))
    }
</script>