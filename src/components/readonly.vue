<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{info.name}}</p>
    <p>年龄：{{info.age}}岁</p>
    <p>爱好：{{info.hobbies.join('、')}}</p>
    <p>地址：{{info.address.provice}} - {{ info.address.city }} </p>
    <p>描述：{{description}}</p>
    <button @click="Modifyname">
      修改姓名
    </button>
    <button @click="Modifydescription">
      修改描述
    </button>
  </div> 
</template>

<script setup>
import { ref, reactive, readonly } from 'vue'

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
      const myReadonlyInfo = readonly(info)
      const myReadonlydescription = readonly(description)
    
    const Modifyname = () => {
        myReadonlyInfo.name = 'wnxx'      
    }
    const Modifydescription = () => {
        myReadonlydescription.value = '非常的可爱，特别喜欢吃蜂蜜'
    } 
</script>