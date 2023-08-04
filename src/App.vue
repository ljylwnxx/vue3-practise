<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}岁</p>
    <p>爱好：{{hobbies.join('、')}}</p>
    <p>地址：{{address.provice}} - {{ toRefCity }} </p>
    <p>描述：{{description}}</p>
  </div> 
</template>

<script setup>
import { ref, reactive, toRef, toRefs, isRef } from 'vue'
    const name = ref('pupu')
    const age = 10
    const hobbies = ref(['唱歌', '画画'])
    const address = reactive({
      provice: '浙江省',
      city: '杭州市'
    })
    const description = ref('一点也不可爱，不喜欢吃蜂蜜！')
    const toRefCity = toRef(address, 'city')
    const toRefsAddress = toRefs(address)

    // 判断是否为ref对象
    console.log(isRef(name), 'isRefname')
    console.log(isRef(age), 'isRefage')
    console.log(isRef(hobbies),'isRefhobbies')
    console.log(isRef(address),'isRefaddress')
    console.log(isRef(description),'isRefdescription')
    console.log(isRef(toRefCity),'isReftoRefCity')
    console.log(isRef(toRefsAddress),'isReftoRefsAddress')
</script>