<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{toRefsdata.name.value}}</p>
    <p>年龄：{{toRefsdata.age.value}}岁</p>
    <p>爱好：{{toRefsdata.hobbies.value.join('、')}}</p>
    <p>地址：{{toRefsdata.addressprovice.value}} - {{toRefsdata.addresscity.value}}</p>
    <p>描述：{{toRefsdata.description.value}}</p>
    <button @click="changeReactive">
    修改信息
    </button> 
  </div> 
</template>

<script setup>
import { reactive, toRefs } from 'vue'
        const data = reactive ({
        name: 'pupu',
        age: 10,
        hobbies: ['唱歌', '画画'],
        addressprovice: '浙江省',
        addresscity: '杭州市',
        description: '一点也不可爱，不喜欢吃蜂蜜！'
        })

        // 打印toRefs之前的数据
        console.log(data, 'data')

        // 通过toRefs创建一个Ref响应式
        const toRefsdata = toRefs(data)

        // 打印toRefs之后的数据
        console.log(toRefsdata, 'toRefsdata')
        
        // 经过了toRefs的处理,修改变量的值,那么就需要xx.value
        const changeReactive = () => {
          toRefsdata.name.value = 'wnxx'
          toRefsdata.age.value = 3 
          toRefsdata.hobbies.value = ['打羽毛球', '旅游']
          toRefsdata.addressprovice.value = '云南省'
          toRefsdata.addresscity.value = '丽江市'
          toRefsdata.description.value = '非常的可爱，特别喜欢吃蜂蜜！'
        } 
</script>
