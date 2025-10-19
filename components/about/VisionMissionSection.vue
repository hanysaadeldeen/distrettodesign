<template>
  <section class="overflow-hidden">
    <div ref="visionBox" class="vision-box pl-5">
      <div
        class="ml-auto flex max-w-[1000px] items-center justify-between gap-5 rounded-l-[80px] bg-SectionBG2 px-10 py-7 max-md:flex-col lg:gap-10 lg:px-20 lg:py-14"
      >
        <div class="flex min-w-[253px] flex-grow flex-col items-center gap-6">
          <img src="~/assets/img/about/VisionMission/vision.svg" alt="vision" loading="lazy" />
          <h2 class="text-3xl font-medium lg:text-5xl">Our Vision</h2>
        </div>
        <p class="text-xl font-normal max-md:text-center md:text-2xl">
          Our vision is to be different in the market from any contemporary furnishing retailers and
          corporate interior. Starting from the brands we present, the image of our store and the
          valuable relationships with our clients, suppliers and dream team members.
        </p>
      </div>
    </div>
    <div ref="missionBox" class="mission-box pr-5">
      <div
        class="mr-auto mt-[100px] flex w-full max-w-[1247px] items-center justify-between gap-5 rounded-r-[80px] bg-SectionBG2 px-10 py-7 max-md:flex-col-reverse lg:gap-10 lg:px-20 lg:py-14"
      >
        <p class="text-xl font-normal max-md:text-center md:text-2xl">
          At Distretto Design, our mission is to create spaces that speak — not just through beauty,
          but through meaning. We aim to deliver timeless interiors curated with precision, emotion,
          and authenticity. By connecting clients with iconic global brands and refined design
          sensibilities, we transform everyday environments into elegant, lasting experiences that
          reflect individuality and inspire living.
        </p>
        <div class="flex min-w-[290px] flex-grow flex-col items-center gap-6">
          <img src="~/assets/img/about/VisionMission/mission.svg" alt="mission" loading="lazy" />
          <h2 class="text-3xl font-medium lg:text-5xl">Our Mission</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';
const visionBox = ref<HTMLElement | null>(null);
const missionBox = ref<HTMLElement | null>(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(visionBox.value, {
    scrollTrigger: {
      trigger: '.vision-box',
      start: 'top 80%',
      markers: false,
      once: true,
    },
    x: 200,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });
  gsap.from(missionBox.value, {
    scrollTrigger: {
      trigger: '.mission-box',
      start: 'top 80%',
      markers: false,
      once: true,
    },
    x: -200,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });
});
</script>

<style scoped></style>
