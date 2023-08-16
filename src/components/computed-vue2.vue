<template>
  <div>
    <div>Hello,大家好，我的全名叫：{{ fullName }}</div>
    <button @click="changeName">点击按钮修改全名</button>
  </div>
   
</template>

<script>
export default {
  data() {
    return {
      firstName: 'wn',
      lastName: 'xx'
    }
  },
  
  computed: {
    fullName: {
        get() {
          return this.firstName + this.lastName
        },
        set(newValue) {
            this.firstName = `${newValue.firstName}`
            this.lastName = `${newValue.lastName}`
        }
    } 
  },
  methods: {
    changeName() {
        this.fullName = {
            firstName: 'pu',
            lastName: 'pu'
        }
    }
  }
}
</script>

<!-- <div>Hello,大家好，我的全名叫：：{{ fullName }}</div> -->

<!-- <script>
export default {
  data() {
    return {
      firstName: 'wn',
      lastName: 'xx'
    }
  },
  
  computed: {
    fullName() {
      return this.firstName + this.lastName
    }
  }
}
</script> -->