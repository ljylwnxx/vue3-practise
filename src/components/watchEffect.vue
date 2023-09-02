<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}岁</p>
    <p>爱好：{{info.hobbies.join('、')}}</p>
    <p>地址：{{info.address.provice}} - {{info.address.city}}</p>
    <p>描述：{{info.description}}</p>
    <button @click="modifyInfo">
      修改数据
    </button>
  </div> 
</template>

<script setup>
import { ref, reactive, watchEffect, watch } from 'vue'
    
   const name = ref('pupu') 
   const age = ref(10)
   const info = reactive({
      hobbies: ['唱歌','画画'],
      address: {
          provice: '浙江省',
          city: '杭州市'
      },
      description: '一点也不可爱，不喜欢吃蜂蜜！',
    })
    
    const modifyInfo = () => {
        name.value = 'wnxx'
        age.value = 3 
        info.hobbies = ['打羽毛球','旅游']
        info.address.provice = '云南省'
        info.address.city = '丽江市'
        info.description = '非常的可爱，特别喜欢吃蜂蜜！'   
    } 
    // 情况1: 监听ref定义的数据
    watchEffect(() => {
      console.log(name.value, 'name')
    })
    // 情况2: 监听reactive定义的数据
    watchEffect(() => {
      console.log(info.address.provice, info.address.city, 'address')
    })
    // 情况3: 监听reactive定义的对象数据
    watchEffect(() => {
      console.log(info, 'info对象')
    })
    // 情况4: watchEffect什么时候执行
    watchEffect(() => {
      console.log("执行了")
    })
</script>