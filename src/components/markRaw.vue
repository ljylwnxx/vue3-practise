<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{info.name}}</p>
    <p>年龄：{{info.age}}岁</p>
    <p>爱好：{{info.hobbies.join('、')}}</p>
    <p v-if="info.address">地址：{{info.address.provice}} - {{ info.address.city }} </p>
    <p>描述：{{info.description}}</p>
    <button @click="updateInfo">
      更新info数据
    </button>
    <button @click="modifyInfo">
      修改info数据
    </button>
    <button @click="modifyAddress">
      修改地址数据
    </button>
  </div> 
</template>

<script setup>
import {reactive, markRaw } from 'vue'
    
    const info = reactive({
      name: 'pupu',
      age: 10,
      hobbies: ['唱歌', '画画'],
      description: '一点也不可爱，不喜欢吃蜂蜜！'
    })

    const updateInfo = () => {
      const address = {
        provice: '浙江省',
        city: '杭州市'        
      }
      info.address = markRaw(address)
    }    
   
    const modifyInfo = () => {
        info.name = 'wnxx'
        info.age = 3 
        info.hobbies = ['打羽毛球', '旅游']
        info.description = '非常的可爱，特别喜欢吃蜂蜜！'
        console.log(info, 'modifyInfo')
    }
    
    const modifyAddress = () => {
        info.address.provice = '云南省'
        info.address.city = '丽江市'
        console.log(info, 'modifyAddress')
    }
</script>