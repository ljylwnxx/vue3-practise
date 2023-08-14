<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}岁</p>
    <p>爱好：{{hobbies.join('、')}}</p>
    <p>描述：{{description}}</p>
    <button @click="modifyInfo">
      修改原响应式数据
    </button>
    <button @click="modifyNewInfo">
      修改toRaw得到的原始数据
    </button>
  </div> 
</template>

<script setup>
import { ref, toRaw } from 'vue'
    
    const name = ref('pupu')
    const age = ref(10)
    const hobbies = ref(['唱歌', '画画'])
    const description = ref('一点也不可爱，不喜欢吃蜂蜜！')
   
    const nameInfo = toRaw(name)
    const ageInfo = toRaw(age)
    const hobbiesInfo = toRaw(hobbies)
    const descriptionInfo = toRaw(description)
    console.log(name,age,hobbies,description, 'info')
    
    const modifyInfo = () => {
        name.value = 'wnxx'
        age.value = 3 
        hobbies.value = ['打羽毛球', '旅游']
        description.value = '非常的可爱，特别喜欢吃蜂蜜！'
        console.log(name,age,hobbies,description, 'info改后')
        console.log(nameInfo,ageInfo,hobbiesInfo,descriptionInfo, 'Info')
    } 
    
    const modifyNewInfo = () => {
        nameInfo.value = 'pupu'
        ageInfo.value = 10 
        hobbiesInfo.value = ['唱歌', '画画']
        descriptionInfo.value = '一点也不可爱，不喜欢吃蜂蜜！'
        console.log(nameInfo,ageInfo,hobbiesInfo,descriptionInfo, 'Info改后')
        console.log(name,age,hobbies,description, 'info改后')
    }
</script>