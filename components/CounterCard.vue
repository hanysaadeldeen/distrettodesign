<template>
  <div class="cardParent">
    <div
      class="card text-white relative z-20 w-[80px] h-[80px] md:w-[115px] md:h-[115px] flex  flex-col items-center justify-center  p-2">
      <p class="text-2xl md:text-4xl font-black  mb-2">
        {{ time.toString().padStart(2, "0") }}
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
  border: 3px solid #A86514;
}
</style>
