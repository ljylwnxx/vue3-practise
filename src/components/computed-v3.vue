<template>
  <div>
    <h2>init count:
      {{ state.count }}
    </h2>
    <h2>init number:
      {{ state.number }}
    </h2>
    <h2>computedCount:
      {{ computedCount }}
    </h2>
    <h2>computedNumber:
      {{ computedNumber }}
    </h2>
    <button @click="changeCount">
      changeCount
    </button>
  </div>  
</template>

<script setup>
import {reactive, computed } from 'vue'

    // reactive
    const state = reactive({
        count: 1,
        number: 10
    })
    // computed getter
    const computedCount = computed(() => {
        return state.count + 10
    })
    // computed set get
    const computedNumber = computed({
        get: () => {
            return state.number + 100
        },
        set: (value) => {
            state.number = value - 50
        }
    })

    const changeCount = () =>{
        state.count++;
        computedNumber.value = 100
    }
</script>