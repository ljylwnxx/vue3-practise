<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}岁</p>
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
import { ref,watch } from 'vue'
    
    const name = ref('pupu')
    const age = ref(10)
    const info = ref({
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
        name.value = 'wnxx'
        age.value = 3 
        info.value.hobbies = ['打羽毛球','旅游']
        info.value.address.provice = '云南省'
        info.value.address.city = '丽江市'
        info.value.description = '非常的可爱，特别喜欢吃蜂蜜！'
        info.value.favoriteColor.coloeOne = '薄荷绿'
        info.value.favoriteColor.colorTwo = '天蓝色'
        
    } 
    // 情况1：监听ref所定义的一个响应式数据
    watch(name, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'name' )
    }),
    // 情况2：监听ref所定义的多个响应式数据
    watch([name,age],(newValue,oldValue) => {
      console.log( newValue, oldValue, 'name-age')
    }),

    // 情况3：监听ref所定义的一个引用类型响应式数据
    watch(info, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'info引用类型' )
    }),
    // 情况4：针对监听ref所定义的一个引用类型响应式数据之一
    watch(info.value, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'info.value' )
    }),
    // 情况5：针对监听ref所定义的一个引用类型响应式数据之二
    watch(info.value, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'info深度监听无效' )
    },
    {deep: false}
    ),
    // 情况6：针对监听ref所定义的一个引用类型数据之三：直接深度监听
    watch(info, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'info直接深度监听' )
    },
    {deep: true}
    )
    // 情况7：针对监听ref所定义的一个引用类型数据之四，深拷贝深度监听
    watch(() => ({...info.value}), (newValue,oldValue) => {
      console.log(newValue, oldValue, 'info深拷贝深度监听' )
    },
    {deep: true}
    )
</script>