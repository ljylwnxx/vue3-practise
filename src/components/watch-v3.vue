<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}岁</p>
    <p>爱好：{{hobbies.hobbyOne}} 、{{ hobbies.hobbyTwo }}</p>
    <p>地址：{{address.provice}} - {{address.city}}</p>
    <p>最喜欢的颜色：{{favorite.favoriteColor.coloeOne}} & {{ favorite.favoriteColor.colorTwo }}</p>
    <p>描述：{{favorite.favoriteDescription}}</p>
    <button @click="modifyInfo">
      修改数据
    </button>
  </div> 
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
    
    const name = ref('pupu')
    const age = ref(10)
    const address = ref({
      provice: '浙江省',
      city: '杭州市'
    })  
    const hobbies = reactive ({
        hobbyOne: '唱歌',
        hobbyTwo: '画画'
    })
    const favorite = reactive({
      favoriteDescription: '一点也不可爱，不喜欢吃蜂蜜！',
      favoriteColor: {
        coloeOne: '绿色',
        colorTwo: '蓝色'
      }
    })

    const modifyInfo = () => {
        name.value = 'wnxx'
        age.value = 3 
        hobbies.hobbyOne = '打羽毛球'
        hobbies.hobbyTwo = '旅游'
        address.value.provice = '云南省'
        address.value.city = '丽江市'
        favorite.favoriteDescription = '非常的可爱，特别喜欢吃蜂蜜！'
        favorite.favoriteColor.coloeOne = '薄荷绿'
        favorite.favoriteColor.colorTwo = '天蓝色'
        
    } 
    // 情况：监视ref所定义的一个响应式数据
    // 可以获取到新旧值
    watch(name, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'name' )
    }),
    // 情况：监视ref所定义的多个响应式数据
    // 可以获取到新旧值，多个参数是数组，数组形式返回
    watch([name,age],(newValue,oldValue) => {
      console.log( newValue, oldValue, 'name-age')
    }),
    watch([()=>name.value,age],(newValue,oldValue) => {
      console.log( newValue, oldValue, 'name-agel')
    }),
    // 情况：监视ref所定义的一个引用类型响应式数据
    // 注意：这种情况下监听的是整个数组，它是引用类型数据，内部某一项发生变化，不会被监听到，所以watch中的代码没有执行。
    watch(address, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'address1' )
    }),
    // 情况：监视ref所定义的一个引用类型数据，直接深度监听
    // 注意：深度监听的是这个引用数据类型自身，而不是其中的属性。并且，只能获取到新值，而获取不到旧的值。
    watch(address, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'address2' )
    },
    {deep: true}
    )
    // 情况：监视ref所定义的一个引用类型数据，深拷贝深度监听
    // 注意：深度监听的是这个引用数据类型自身，而不是其中的属性。这样只能获取到新值，而获取不到旧的值。
    watch(() => ({...address.value}), (newValue,oldValue) => {
      console.log(newValue, oldValue, 'address3' )
    },
    {deep: true}
    )
    // 情况：监视reactive所定义的一个响应式数据的全部属性
    //注意：此处无法正确的获取oldvalue
    //注意：并且强制开启了深度监视(deep配置无效)
    watch(hobbies, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'hobbies' )
    }),
    // 情况：监视reactive所定义的一个响应式数据的全部属性，写法二
     //注意：此处无法正确的获取oldvalue
    //注意：并且强制开启了深度监视(deep配置无效)
    watch(() => hobbies, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'hobbies1' )
    },
    {deep: true}
    ),
    // 情况：监视reactive所定义的一个响应式数据中的某个属性
    watch(() => hobbies.hobbyOne, (newValue,oldValue) => {
      console.log(newValue, oldValue, 'hobbies-hobbyOne' )
    }),
    // 情况：监视reactive所定义的一个响应式数据中的某些属性
    watch([() => hobbies.hobbyOne, () => hobbies.hobbyTwo],(newValue,oldValue) => {
      console.log(newValue, oldValue, 'hobbies.hobbyOne-hobbyTwo' )
    }),
    // 情况：监听reactive所定义的一个响应式数据的全部属性
    //注意：此处无法正确的获取oldvalue
    //注意：并且强制开启了深度监视(deep配置无效)
    watch(() => favorite,(newValue,oldValue)=> {
      console.log(newValue, oldValue, 'favorite' )
    },
    {deep: true}
    ),
    // 情况：监视reactive所定义的一个响应式数据中的子属性
    watch(() => ({...favorite}),(newValue,oldValue) => {
      console.log(newValue, oldValue, 'favorite子属性' )
    }),
    // 特殊情况: 监视reactive所定义的一个响应式数据中的某个属性,该属性多层嵌套,必须开启深度监视
    watch(() =>favorite.favoriteColor,(newValue,oldValue) => {
      console.log(newValue, oldValue, 'favoriteColor' )
    },
    {deep:true}
    ),
    // 情况：组合监听
    // 注意：第一个参数是数组，第二个箭头函数的参数也是数组
    watch([() => favorite.favoriteDescription, name],([newDescription,newName], [oldDescription,oldName]) => {
      console.log(newDescription, oldDescription, newName, oldName, '组合监听Description-name')
    })
</script>