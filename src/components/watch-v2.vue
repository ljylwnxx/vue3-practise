<template>
  <div>
    <div>Hello,大家好，我的名字叫：{{ info.name }}</div>
    <div>我的爱好有：{{ info.hobbies.join('、') }}</div>
    <div>很高兴认识大家！</div>
    <button @click="changeName">点击按钮修改信息</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info:{
          name: 'pupu',
          hobbies: ['唱歌', '画画']
      } 
    }
  },

  methods: {
    changeName() {
        this.info.name = 'wnxx'
        this.info.hobbies = ['打羽毛球', '旅游']
    }
  },

  watch: {
    'info.name': {
      handler(newVal,oldVal){
        console.log('原来的值是：' + oldVal)
        console.log('改后的值是：' + newVal)
      },
      immediate: true,
      deep: true
    },
    'info.hobbies': {
      handler(newVal,oldVal){
        console.log('原来的值是：' + oldVal)
        console.log('改后的值是：' + newVal)
      },
      immediate: true,
      deep: true
    },
    
  }
}
</script>

