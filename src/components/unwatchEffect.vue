<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}岁</p>
    <p>爱好：{{info.hobbies.join('、')}}</p>
    <p>地址：{{info.address.provice}} - {{info.address.city}}</p>
    <p>描述：{{info.description}}</p>
  </div> 
</template>

<script setup>
import { ref, reactive, watchEffect } from 'vue'
    
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
    
   const unwatchEffect = watchEffect((onInvalidate) => {
        console.log(name.value, 'name')
        onInvalidate(()=> {
          console.log('执行了onInvalidate')
        })
    })

    setTimeout(()=> {
      modifyInfo()
      unwatchEffect()
    }, 1000)
</script>