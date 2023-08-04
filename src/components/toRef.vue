<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{nameRef}}</p>
    <p>年龄：{{ageRef}}岁</p>
    <p>爱好：{{hobbiesRef.join('、')}}</p>
    <p>地址：{{proviceRef}} - {{cityRef}}</p>
    <p>描述：{{descriptionRef}}</p>
    <button @click="changeReactive">
    修改信息
    </button> 
  </div> 
</template>

<script setup>
import { reactive, toRef } from 'vue'
    const data = reactive ({
      name: 'pupu',
      age: 10,
      hobbies: ['唱歌', '画画'],
      address: {
        provice: '浙江省',
        city: '杭州市'
      },
      description: '一点也不可爱，不喜欢吃蜂蜜！'
      })
    // 通过toRef创建一个Ref响应式
    const nameRef = toRef(data, 'name')
    const ageRef = toRef(data, 'age')
    const hobbiesRef = toRef(data, 'hobbies')
    const proviceRef = toRef(data.address, 'provice')
    const cityRef = toRef(data.address, 'city')
    const descriptionRef = toRef(data, 'description')
    
    // 经过了toRef的处理,修改变量的值,那么就需要xx.value
    const changeReactive = () => {
        nameRef.value = 'wnxx'
        ageRef.value = 3 
        hobbiesRef.value = ['打羽毛球', '旅游']
        proviceRef.value = '云南省'
        cityRef.value = '丽江市'
        descriptionRef.value = '非常的可爱，特别喜欢吃蜂蜜！'
        // 打印toRef的处理之后的数据
        console.log(
          nameRef, 
          "nameRef",
          ageRef, 
          "ageRef",
          hobbiesRef, 
          "hobbiesRef",
          proviceRef, 
          "proviceRef",
          cityRef, 
          "cityRef",
          descriptionRef,
          "descriptionRef"
        )
        // 打印toRef的处理之前的数据
        console.log(
          data.name,"data.name",
          data.age,"data.age",
          data.hobbies,"data.hobbies",
          data.address.provice,"data.address.provice",
          data.address.city,"data.address.city",
          data.description,"data.description"
          )
    } 
</script>