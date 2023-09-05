<template>
  <div>
   <!-- 父传子 -->
   <!-- <childComponent :message="parentMessage"></childComponent> -->

   <!-- 子传父 -->
   <!-- <childComponent @trigger="handleEvent"></childComponent> -->
  </div> 
</template>

<script>
import childComponent from './components/childComponent.vue'

export default {
  // 父传子
  // components: {
  //   childComponent
  // },
  // data() {
  //   return {
  //     parentMessage: '我是叫wnxx,我是从父组件传递过来的'
  //   }
  // },

  // 子传父
  // methods: {
  //   handleEvent(event) {
  //     console.log(event, 'handleEvent')
  //   }
  // },
}
</script>