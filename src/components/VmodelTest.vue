<template>
    <!-- <div @click="$emit('update:modelValue', modelValue + 1)">
      counter: {{modelValue}}
    </div> -->
    <div @click="$emit('update:counter', counter + 1)">
      counter: {{counter}}
    </div>
</template>

<script>
    export default {
        props: {
            counter: {
                type: Number,
                default: 0
            },
        },
    }
</script>

<style scoped>

</style>
