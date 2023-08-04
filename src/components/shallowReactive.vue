<template>
  <div>
    <h1>shallowReactive应用</h1>
    <p>姓名：{{infoData.petName}}</p>
    <p>年龄：{{infoData.age}}岁</p>
    <p>爱好：{{infoData.hobbies.hobbyOne}} 、 {{ infoData.hobbies.hobbyTwo }}</p>
    <p>地址：{{infoData.address.provice}} - {{ infoData.address.city }} </p>
    <p v-if="infoData.description">描述：{{infoData.description}}</p>
    <button @click="modifyNameFun">
      修改姓名
    </button> 
    <button @click="addDescriptionFun">
      添加属性
    </button> 
    <button @click="modifyAddressFun">
      修改地址
    </button> 
  </div> 
</template>

<script setup>
import { shallowReactive } from 'vue'
    
    const infoData = shallowReactive({
      petName: 'pupu',
      age: 3,
      hobbies: {
        hobbyOne: '打羽毛球',
        hobbyTwo: '旅游'
      },
      address: {
        provice: '云南省',
        city: '丽江市'
      }
    })
    
    // 修改姓名函数
    const modifyNameFun = () => {
      //  修改infoData对象的直接属性，会触发响应式更新
      infoData.petName = 'wnxx'
    }

    // 修改地址函数
    const modifyAddressFun = () => {
        //  修改infoData对象的嵌套属性，不会触发响应式更新
        infoData.address.provice = '广西省',
        infoData.address.city = '桂林市'
        console.log('地址信息已经更新完成')
        console.log(infoData.address, '地址')
    }

    // 添加新的属性
    const addDescriptionFun =() => { 
        infoData.description = '非常的可爱，特别喜欢吃蜂蜜！'
    }
</script>

