<template>
  <h2 class="text-2xl font-medium sm:text-3xl md:text-4xl lg:text-5xl">
    {{ title }}
  </h2>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
});
</script>

<style scoped></style>
