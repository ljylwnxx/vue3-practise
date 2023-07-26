<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{data.name}}</p>
    <p>年龄：{{data.age}}岁</p>
    <p>爱好：{{data.hobby.join('、')}}</p>
    <p>地址：{{data.addres.provice}} - {{data.addres.city}}</p>
    <p>描述：{{data.description}}</p>
    <button @click="modifyInfo">
    修改信息
    </button> 
  </div> 
</template>

<script setup>
import { reactive } from 'vue'
    const data = reactive ({
      name: 'pupu',
      age: 10,
      hobby: ['唱歌', '画画'],
      addres: {
        provice: '浙江省',
        city: '杭州市'
      },
      description: '一点也不可爱，不喜欢吃蜂蜜！'
      })

    const modifyInfo = () => {
        data.name = 'wnxx'
        data.age = 3 
        data.hobby = ['打羽毛球', '旅游']
        data.addres.provice = '云南省'
        data.addres.city = '丽江市'
        data.description = '非常的可爱，特别喜欢吃蜂蜜！'
        console.log(data.name,data.hobby,data.addres)
    } 
</script>
