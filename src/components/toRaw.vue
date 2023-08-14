<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{info.name}}</p>
    <p>年龄：{{info.age}}岁</p>
    <p>爱好：{{info.hobbies.join('、')}}</p>
    <p>地址：{{info.address.provice}} - {{ info.address.city }} </p>
    <p>描述：{{info.description}}</p>
    <button @click="modifyInfo">
      修改原响应式数据
    </button>
    <button @click="modifyNewInfo">
      修改toRaw得到的原始数据
    </button>
  </div> 
</template>

<script setup>
import {reactive, toRaw } from 'vue'
    
    const info = reactive({
      name: 'pupu',
      age: 10,
      hobbies: ['唱歌', '画画'],
      address: {
        provice: '浙江省',
        city: '杭州市'        
      },
      description: '一点也不可爱，不喜欢吃蜂蜜！'
    })
    
    const newInfo = toRaw(info)
    console.log(newInfo, 'newInfo')
    
    const modifyInfo = () => {
        info.name = 'wnxx'
        info.age = 3 
        info.hobbies = ['打羽毛球', '旅游']
        info.address.provice = '云南省'
        info.address.city = '丽江市'
        info.description = '非常的可爱，特别喜欢吃蜂蜜！'
        console.log(newInfo, 'newInfo改后')
        console.log(info, 'info')
    }
    
    const modifyNewInfo = () => {
        newInfo.name = 'pupu'
        newInfo.age = 10 
        newInfo.hobbies = ['唱歌', '画画']
        newInfo.address.provice = '浙江省'
        newInfo.address.city = '杭州市' 
        newInfo.description = '一点也不可爱，不喜欢吃蜂蜜！'
        console.log(info, 'info改后')
    }
</script>