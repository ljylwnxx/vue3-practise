//App.vue
<template>
  <div>
    <h1>最想去的地方</h1>
    <p>地址：{{address.provice}} - {{ address.city }} </p>
    <button @click="modifyInfo">
    修改信息
    </button> 
  </div> 
</template>

<script setup>
import { shallowRef } from 'vue'
    const  name = '11'
    const address = shallowRef({
      provice: '浙江省',
      city: '杭州市'
    })
    
    // 修改
    const modifyInfo = () => {
        address.value={
          provice: '广西',
          city: '桂林'
        }
       name.value = '222'
        // address.value.city = '丽江市'
        console.log(address, '修改address')
    } 
</script>
