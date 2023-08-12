<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{info.name}}</p>
    <p>年龄：{{info.age}}岁</p>
    <p>爱好：{{info.hobbies.join('、')}}</p>
    <p>地址：{{info.address.provice}} - {{ info.address.city }} </p>
    <p>描述：{{description}}</p>
    <button @click="modifyInfo">
      修改信息
    </button>
    <button @click="modifyDescription">
      修改描述
    </button>
  </div> 
</template>

<script setup>
import { ref, reactive, toRaw } from 'vue'
    
    const info = reactive({
      name: 'pupu',
      age: 10,
      hobbies: ['唱歌', '画画'],
      address: {
        provice: '浙江省',
        city: '杭州市'        
      }
    })
    const description = ref('一点也不可爱，不喜欢吃蜂蜜！')
    
    const newInfo = toRaw(info)
    const newDescription = toRaw(description)

    const modifyInfo = () => {
        newInfo.name = 'wnxx'
        newInfo.age = 3 
        newInfo.hobbies = ['打羽毛球', '旅游']
        newInfo.address.provice = '云南省'
        newInfo.address.city = '丽江市'
        console.log(info, 'info')
        console.log(newInfo, 'newInfo')
    }
    const modifyDescription = () => {
      newDescription.value = '非常的可爱，特别喜欢吃蜂蜜！'
        console.log(description, 'description')
        console.log(newDescription, 'newDescription')
    }
</script>