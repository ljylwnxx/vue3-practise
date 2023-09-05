<template>
  <div>
   <childComponent @trigger="handleEvent"></childComponent>
  </div> 
</template>

<script>
import childComponent from './components/childComponent.vue'

export default {
  components: {
    childComponent
  },
  methods: {
    handleEvent(event) {
      console.log(event, 'handleEvent')
    }
  },
}
</script>