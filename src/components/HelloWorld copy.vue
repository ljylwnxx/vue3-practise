<template>
  <h1>{{ msg }}</h1>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <Composition></Composition>
  <ModeButton></ModeButton>
  <Emits @my-click="onClick"></Emits>
  <comp></comp>
  <!-- <VmodelTest v-model="counter"></VmodelTest> -->
  <VmodelTest v-model:counter="counter"></VmodelTest>
  <RenderTest v-model:counter="counter">
    <template v-slot:default>title</template>
    <template v-slot:content>content......</template>
  </RenderTest>
  <Functional level="6">这是一个动态的h元素</Functional>
</template>

<script>
import { computed, onUnmounted, reactive, onMounted, ref, toRefs, watch, h } from 'vue'
import Composition from './Composition.vue'
import ModeButton from './ModeButton.vue'
import Emits from './Emits.vue'
import VmodelTest from './VmodelTest.vue'
import Functional from './Functional.vue'
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data() {
      return {
        counter: 1
      }
    },
    components: {
     Composition, ModeButton,Emits,VmodelTest,Functional,
     RenderTest: {
      props: {
        counter: {
          type: Number,
          default: 0
        },
      },
      render() {
        this.$slots.default()
        this.$slots.content()
        return h ("div", [
          h('div', {onClick: this.onClick}, [
            `i am RenderTest: ${this.counter}`,
             this.$slots.default(),
             this.$slots.content()
          ])  
        ])
      },
      methods: {
        onClick() {
          this.$emit("update:counter", this.counter + 1)
        }
      },
     }
    },
    methods: {
      onClick() {
        console.log('click me!')
      }
    }
}


</script>
