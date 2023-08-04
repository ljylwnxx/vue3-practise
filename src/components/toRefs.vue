<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}岁</p>
    <p>爱好：{{hobbies.join('、')}}</p>
    <p>地址：{{addressprovice}} - {{addresscity}}</p>
    <p>描述：{{description}}</p>
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
        const {
          name,
          age,
          hobbies,
          addressprovice,
          addresscity,
          description
        } = toRefs(data)

        // 经过了toRefs的处理,修改变量的值,那么就需要xx.value
        const changeReactive = () => {
            name.value = 'wnxx'
            age.value = 3 
            hobbies.value = ['打羽毛球', '旅游']
            addressprovice.value = '云南省'
            addresscity.value = '丽江市'
            description.value = '非常的可爱，特别喜欢吃蜂蜜！'
            // 打印toRefs之后的数据
            console.log(name, age,hobbies,addressprovice,addresscity,description, 'toRefsdata')
        } 
</script>
