<template>
    <div>
        <h1>{{ msg }}</h1>
  <!-- <p>{{data.counter}}</p>
  <p>{{data.doubleCounter}}</p> -->
  <p>{{ counter }}</p>
  <p>{{ doubleCounter }}</p>
  <p>{{ msg2 }}</p>
  <p ref="desc"></p>
    </div>
</template>

<script>
import { computed, onUnmounted, reactive, onMounted, ref, toRefs, watch } from 'vue'
    export default {
        props: {
        msg: String
    },
        setup() {
        // const data = useCounter()
        // const msg2 = ref('hello world')
        // return {data, msg2}
        // counter相关
        const { counter, doubleCounter } = useCounter();
        // 其他数据， 单值响应式
        const msg2 = ref("hello world");
        //使用元素引用
        const desc = ref(null);
        //侦听器
        watch(counter, (val, oldVal) => {
            const p = desc.value;
            p.textContent = `counter change from ${oldVal} to ${val}`;
        });
        return { counter, doubleCounter, msg2, desc };
    },
    }
    function useCounter() {
  const data = reactive({
      counter: 1,
      doubleCounter: computed (() => data.counter * 2)
    })

    let timer 

    onMounted (() => {
      timer = setInterval(() => {
        data.counter++
      },1000)
    })

    onUnmounted (() => {
      clearInterval(timer)
    })
    // return data
    return toRefs(data)
}
</script>

<style scoped>

</style>