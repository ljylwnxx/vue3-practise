<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}岁</p>
    <p>爱好：{{hobbies.join('、')}}</p>
    <p>地址：{{address.provice}} - {{ address.city }} </p>
    <p>最喜欢的颜色：{{favoriteColor.coloeOne}}&{{ favoriteColor.colorTwo }}</p>
    <p>描述：{{description}}</p>
    <button @click="judgeIsProxy">
      isProxy判断
    </button>
  </div> 
</template>

<script setup>
import { ref, reactive, readonly,  shallowRef, shallowReactive, shallowReadonly, isProxy } from 'vue'
    
    const age = ref(3)
    const name = ref('wnxx')
    const address = reactive({
          provice: '浙江省',
          city: '杭州市'        
      })
    const newNname = readonly(name)
    const hobbies = shallowRef(['打羽毛球', '旅游'])
    const favoriteColor = shallowReactive({
      coloeOne: '薄荷绿',
      colorTwo: '天蓝色'
    })
    const description = ref('非常的可爱，特别喜欢吃蜂蜜！')
    const newDescription = shallowReadonly(description)
    
    const judgeIsProxy = () => {
        console.log(isProxy(name), '判断ref姓名') 
        console.log(isProxy(newNname), '判断readonly姓名') 
        console.log(isProxy(age), '判断ref年龄')
        console.log(isProxy(hobbies), '判断shallowRef爱好') 
        console.log(isProxy(address), '判断reactive地址') 
        console.log(isProxy(favoriteColor), '判断shallowReactive颜色') 
        console.log(isProxy(description), '判断reactive描述') 
        console.log(isProxy(newDescription), '判断shallowReadonly描述') 
    }
</script>