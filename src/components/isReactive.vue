<template>
  <div>
    <h1>isReactive应用</h1>
    <p>姓名：{{name.petName}}</p>
    <p>年龄：{{age}}岁</p>
    <p>爱好：{{hobby.hobbyOne}} 、 {{ hobby.hobbyTwo }}</p>
    <p>地址：{{address.provice}} - {{ address.city }} </p>
    <p>描述：{{description.character}}</p>
    <p>最喜欢的颜色：{{favoriteColor.coloeOne}}&{{ favoriteColor.colorTwo }}</p>
    <p>最想去的地方：{{place.provice}}{{ place.city }}</p>
    <button @click="isReactiveFun">
      点击按钮显示判断结果
    </button> 
  </div> 
</template>

<script setup>
import { ref, reactive, shallowRef, readonly, isReactive, shallowReactive } from 'vue'
    
    const name = ref({
      petName: 'wnxx'
    })
    const age = ref(3)
    const hobby = reactive({
      hobbyOne: '打羽毛球',
      hobbyTwo: '旅游'
    })
    const address = shallowRef({
      provice: '云南省',
      city: '丽江市'
    })
    const description = readonly(
      reactive({
      character: '非常的可爱，特别喜欢吃蜂蜜！'
    })
    )
    const favoriteColor = shallowReactive({
      coloeOne: '薄荷绿',
      colorTwo: '天蓝色'
    })
    const place =  readonly(
      ref({
        provice: '广西省',
        city: '桂林市'
      })
    )
    // 测试函数
    const isReactiveFun = () => {
        console.log(isReactive(name.value), 'name')
        console.log(isReactive(age), 'age')
        console.log(isReactive(hobby), 'hobby')
        console.log(isReactive(address.value), 'address')
        console.log(isReactive(description), 'description')
        console.log(isReactive(favoriteColor), 'favoriteColor')
        console.log(isReactive(place.value), 'place') 
    }  
</script>
