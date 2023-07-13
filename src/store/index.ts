import { defineStore } from "pinia";
import { Names } from "./store_name";
type User = {
  name: String,
  age: Number
}
const Login = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '我是嘟嘟',
        age: 8
      })
    }, 2000)
  })
}
export const useInfoStore = defineStore(Names.TEST, {
  state: () => {
    return {
      name: '我是wn.',
      age: 10,
    }
  },
  getters: {
    newName():string {
      return `这是getter修饰过的名称  ${this.name} ,她的年纪是 ${this.getAge}`
    },

    getAge():number {
      return this.age
    }
  },
  actions: {

    async setUser() {
      const result = await Login()
      this.name = result.name
      this.age = result.age
      this.setAge(18)
    },  
    setAge(num: number) {  // 注意，这里就不要写箭头函数了，不然 this 指向会出问题。
      this.age = num
    },
  }
})
