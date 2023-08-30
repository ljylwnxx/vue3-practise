<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{person.name}}</p>
    <p>年龄：{{person.age}}岁</p>
    <p>爱好：{{info.hobbies.join('、')}}</p>
    <p>地址：{{info.address.provice}} - {{info.address.city}}</p>
    <p>最喜欢的颜色：{{info.favoriteColor.coloeOne}} & {{ info.favoriteColor.colorTwo }}</p>
    <p>描述：{{info.description}}</p>
    <button @click="modifyInfo">
      修改数据
    </button>
  </div> 
</template>

<script setup>
import { reactive, watch } from 'vue'
    
    const person = reactive({
      name: 'pupu',
      age: 10
    })
    const info = reactive({
      hobbies: ['唱歌','画画'],
      address: {
          provice: '浙江省',
          city: '杭州市'
      },
      favoriteColor: {
        coloeOne: '绿色',
        colorTwo: '蓝色'
      },
      description: '一点也不可爱，不喜欢吃蜂蜜！',
    })
    
    const modifyInfo = () => {
        person.name = 'wnxx'
        person.age = 3 
        info.hobbies = ['打羽毛球','旅游']
        info.address.provice = '云南省'
        info.address.city = '丽江市'
        info.favoriteColor.coloeOne = '薄荷绿'
        info.favoriteColor.colorTwo = '天蓝色'
        info.description = '非常的可爱，特别喜欢吃蜂蜜！'
        
    } 
    // 情况1：监听reactive所定义的一个响应式数据中的某个属性
    watch(()=>person.name, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'name' )
    }),
    // 情况2：监听reactive所定义的一个响应式数据中的某些属性
    watch([()=>person.name,()=>person.age],(newValue,oldValue) => {
      console.log( newValue, oldValue, 'name-age')
    }),
    // 情况3：监听reactive所定义的引用类型响应式数据的某个属性
    watch(()=>info.hobbies, (newValue,oldValue) => {
      console.log(newValue, oldValue, '爱好' )
    }),
    // 情况4：监听reactive所定义的引用类型响应式数据的某些属性
    watch([()=>info.hobbies,()=>info.description], ([newHobby,newDescription],[oldHobby,oldDescription]) => {
      console.log(newHobby,newDescription,oldHobby,oldDescription, '爱好描述' )
    })
    // 情况5：针对监听reactive所定义的引用类型响应式数据的全部属性之一
    watch(info, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'info引用类型' )
    }),
    // 情况6：针对监听reactive所定义的引用类型响应式数据的全部属性之二
    watch(() =>info, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'info引用类型之二' )
    },
    {deep: true}
    ),
    // 情况7：只监听reactive所定义的引用类型响应式数据的子属性
    watch(() => ({...info}), (newValue,oldValue) => {
      console.log(newValue, oldValue, 'info子属性' )
    })
    // 情况8：监听reactive所定义的引用类型响应式数据里的某个对象的属性
    watch(() => info.address, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'info中的地址' )
    },
    {deep: true}
    )
</script>