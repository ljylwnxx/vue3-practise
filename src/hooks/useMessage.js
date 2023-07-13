import { onMounted, ref } from "vue"
export default function (val) {
  onMounted(() => {
    console.log(`我叫${val}`)
  })
  return ref(`我叫${val}`)
}