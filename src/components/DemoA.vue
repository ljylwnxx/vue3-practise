<template>
  <h1>{{ message }}</h1>
</template>

<script setup>
import useMessage from '../hooks/useMessage'
let message = useMessage('wnxx')
</script>

<style>

</style>