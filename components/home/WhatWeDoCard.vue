<template>
  <div ref="container" class="WhatWeDoCard sticky top-[30px] h-screen">
    <h1
      :class="i === 0 ? 'visible' : 'hide'"
      class="pb-[56px] text-2xl font-medium uppercase sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl"
    >
      WHAT WE DO
    </h1>
    <div
      class="relative flex flex-col"
      :class="i !== 0 && 'pt-[56]px'"
      :style="{ top: `calc( ${i * 30}px)` }"
    >
      <div class="flex min-h-[555px] rounded-l-[100px] bg-white shadow-xl max-md:flex-col">
        <div class="w-full md:w-1/2">
          <img :src="src" :alt="title" class="h-full w-full object-cover md:rounded-l-[100px]" />
        </div>
        <div
          class="flex w-full flex-col items-start justify-between gap-14 p-11 md:w-1/2 md:gap-20"
        >
          <h1 class="text-2xl font-medium text-primary sm:text-3xl md:text-4xl lg:text-6xl">
            {{ number }}
          </h1>
          <div>
            <p class="mb-2 text-xl font-medium md:text-2xl lg:text-3xl">{{ title }}</p>
            <p class="text-lg font-normal md:text-xl lg:text-2xl">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const props = defineProps({
  i: Number,
  number: String,
  title: String,
  description: String,
  src: String,
  targetScale: Number,
});
</script>

<style scoped>
.hide {
  visibility: hidden;
}
</style>
