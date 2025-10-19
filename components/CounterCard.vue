<template>
  <div class="cardParent">
    <div
      class="card relative z-20 flex h-[80px] w-[80px] flex-col items-center justify-center p-2 text-white md:h-[115px] md:w-[115px]"
    >
      <p class="mb-2 text-2xl font-black md:text-4xl">
        {{ time.toString().padStart(2, '0') }}
      </p>
      <p class="text-sm font-light uppercase text-white">{{ label }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  time: number;
  label: string;
}

defineProps<Props>();
</script>

<style scoped>
.cardParent {
  border-radius: 50%;
  border: 3px solid #a86514;
}
</style>
