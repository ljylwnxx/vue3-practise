<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}岁</p>
    <p>爱好：{{hobbies.join('、')}}</p>
    <p>地址：{{address.provice}} - {{ address.city }} </p>
    <p>描述：{{description}}</p>
    <button @click="modifyInfo">
    修改信息
    </button> 
    <button @click="repeatModifyInfo">
    点击按钮修改信息
    </button> 
  </div> 
</template>

<script setup>
import { shallowRef } from 'vue'
    const name = shallowRef('pupu')
    const age = shallowRef(10)
    const hobbies = shallowRef(['唱歌', '画画'])
    const address = shallowRef({
      provice: '浙江省',
      city: '杭州市'
    })
    const description = shallowRef('一点也不可爱，不喜欢吃蜂蜜！')
    // 第一次修改
    const modifyInfo = () => {
        name.value = 'wnxx'
        age.value = 3 
        hobbies.value = ['打羽毛球', '旅游']
        address.value.provice = '云南省'
        address.value.city = '丽江市'
        description.value = '非常的可爱，特别喜欢吃蜂蜜！'
        console.log(address, '第一次修改address')
    } 
    // 第二次修改
    const repeatModifyInfo = () => {
      name.value = 'Ljylwnxx'
      setTimeout(() => {
          address.value.provice = '广西省'
          address.value.city = '桂林市'
        }, 10)
      console.log(address, '第二次修改address')  
    }
</script>
