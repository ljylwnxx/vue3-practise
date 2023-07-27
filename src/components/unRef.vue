<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}岁</p>
    <p>爱好：{{hobby.join('、')}}</p>
    <p>地址：{{address.provice}} - {{ toRefCity }} </p>
    <p>描述：{{description}}</p>
  </div> 
</template>

<script setup>
import { ref, reactive, toRef, toRefs, unref } from 'vue'
    const name = ref('wnxx')
    const age = 3
    const hobby = ref(['打羽毛球', '旅游'])
    const address = reactive({
      provice: '云南省',
      city: '丽江市'
    })
    const description = ref('非常的可爱，特别喜欢吃蜂蜜！')
    const toRefCity = toRef(address, 'city')
    const toRefsAddress = toRefs(address)

    // 打印
    console.log(unref(name))
    console.log(unref(age))
    console.log(unref(hobby))
    console.log(unref(address))
    console.log(unref(description))
    console.log(unref(toRefCity))
    console.log(unref(toRefsAddress))
</script>
