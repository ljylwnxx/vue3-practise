//App.vue

<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{info.name}}</p>
    <p>年龄：{{info.age}}岁</p>
    <p>爱好：{{info.hobby.join('、')}}</p>
    <p>地址：{{info.address.provice}} - {{ info.address.city }} </p>
    <p>描述：{{info.description}}</p>
    <button @click="modifyInfo">
    点击按钮修改信息
    </button> 
  </div> 
</template>

<script setup>
import { shallowRef, triggerRef } from 'vue'
    
    const info = shallowRef({
      name: 'pupu',
      age: 10,
      hobby: ['唱歌', '画画'],
      address: {
        provice: '浙江省',
        city: '杭州市',
      },
      description: '一点也不可爱，不喜欢吃蜂蜜！'
    })

    const modifyInfo = () => {
        info.value.name = 'wnxx'
        info.value.age = 3 
        info.value.hobby = ['打羽毛球', '旅游']
        info.value.address.provice = '云南省'
        info.value.address.city = '丽江市'
        info.value.description = '非常的可爱，特别喜欢吃蜂蜜！'
        triggerRef(info)
    }  
</script>
