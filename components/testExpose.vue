<template>
  {{ hi }}
</template>

<script setup>
const hi = ref(0)

defineExpose({ hi })
</script>