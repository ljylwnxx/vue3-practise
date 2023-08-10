<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{info.name}}</p>
    <p>年龄：{{info.age}}岁</p>
    <p>爱好：{{info.hobbies.join('、')}}</p>
    <p>地址：{{info.address.provice}} - {{ info.address.city }} </p>
    <p>描述：{{info.description}}</p>
    <button @click="ModifyInfo">
      shallowReadonly修改
    </button>
  </div> 
</template>

<script setup>
import { reactive, shallowReadonly } from 'vue'

    const info = reactive({
      name: 'wnxx',
      age: 3,
      hobbies: ['打羽毛球', '旅游'],
      address:{
          provice: '浙江省',
          city: '杭州市'        
      },
      description:  '非常的可爱，特别喜欢吃蜂蜜！'
    })
    const newInfo = shallowReadonly(info)
    
    const ModifyInfo = () => {
        newInfo.name = 'pupu'
        newInfo.age = 10
        newInfo.hobbies = ['唱歌', '画画'] 
        newInfo.address.provice = '云南省'   
        newInfo.address.city = '丽江市'
        newInfo.description = '一点也不可爱，不喜欢吃蜂蜜！'
        console.log(newInfo, 'newInfo') 
    }
</script>