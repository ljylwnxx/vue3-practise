<template>
  <div>
    <h1>人物简介</h1>
    <p>姓名：{{person.name}}</p>
    <p>年龄：{{person.age}}岁</p>
    <p>地址：{{address.provice}} - {{address.city}}</p>
    <button @click="modifyInfo">
      修改数据
    </button>
    <ProvideInject></ProvideInject>
  </div>
</template>

<script>
import { ref, reactive, provide } from 'vue'
import ProvideInject from './components/provideInject.vue'
export default {
  components: {
    ProvideInject
  },
  setup() {
    const person = ref({
      name: 'pupu',
      age: 10
    })
    const address = reactive({
      provice: '浙江省',
      city: '杭州市'
    })
    provide('changePerson',person)
    provide('changeAddress',address)
    const modifyInfo = () => {
      person.value.name = 'wnxx'
        person.value.age = 3 
        address.provice = '云南省'
        address.city = '丽江市'
    }
    return {
      person,
      address,
      modifyInfo
    }
  }
}
</script>

