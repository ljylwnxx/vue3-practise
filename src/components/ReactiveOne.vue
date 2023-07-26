<template>
  <div>
    <h1>{{ state.name }}</h1>
    <button @click="modifyInfo">
    修改信息
    </button>
  </div> 
</template>

<script setup>
import { reactive } from 'vue'
let data = { name: 'pupu' }
let state = reactive(data)

const modifyInfo = () => {
      data.name = 'wnxx'
      console.log(state.name) // wnxx，但template里仍为pupu
} 

</script>