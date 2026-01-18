<template>
  <h2 class="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
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
