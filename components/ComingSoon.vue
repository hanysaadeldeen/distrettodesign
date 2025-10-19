<template>
  <main class="relative flex h-screen items-center justify-center py-10 md:py-20">
    <div class="container relative z-30 mx-auto">
      <div class="relative flex flex-col items-center justify-center">
        <div class="relative mb-10 w-[200px]">
          <img
            src="~/assets/img/Logo.svg"
            alt="Logo"
            class="h-ful w-full object-contain"
            width="200"
            height="200"
          />
        </div>
        <div class="mb-8 w-full md:max-w-[992px]">
          <h1
            class="mb-6 text-center text-4xl font-semibold text-white md:text-8xl md:!leading-[84px]"
          >
            Coming Soon
          </h1>
        </div>
        <div
          class="relative mx-auto flex w-full max-w-[1110px] flex-wrap justify-center gap-7 text-center md:gap-14"
        >
          <CounterCard :time="timeLeft.days" label="DAYS" />
          <CounterCard :time="timeLeft.hours" label="HOURS" />
          <CounterCard :time="timeLeft.minutes" label="MINUTES" />
          <CounterCard :time="timeLeft.seconds" label="SECONDS" />
        </div>
      </div>
      <div class="mt-10 flex flex-wrap items-center justify-center gap-6">
        <div class="overflow-hidden" v-for="social in socialMedia" :key="social.altText">
          <a :href="social.link">
            <img
              :src="social.icon"
              :alt="social.altText"
              class="h-ful max-h-11 w-full max-w-11 object-contain"
              width="32"
              height="32"
            />
          </a>
        </div>
      </div>
      <div class="mt-8 flex flex-col items-center justify-center">
        <span class="mx-auto inline-block w-fit text-center text-sm font-normal text-white"
          >Copyright 2025 distrettodesign. All Rights Reserved. Powered
          <a href="https://do.com.sa/" target="_blank" class="text-base font-bold text-white">
            DO</a
          >
          ©</span
        >
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import insta from '~/assets/img/Instagram.svg';
import Facebook from '~/assets/img/Facebook.svg';
import x from '~/assets/img/X.svg';
import LinkedIn from '~/assets/img/LinkedIn.svg';

const socialMedia: { icon: string; link: string; altText: string }[] = [
  {
    icon: insta,
    link: 'https://www.instagram.com/distrettodesignofficial/',
    altText: 'instagram',
  },
  {
    icon: Facebook,
    link: 'https://www.facebook.com/DistrettoDesignOfficial/',
    altText: 'Facebook',
  },
  {
    icon: x,
    link: 'https://x.com/distrettod?lang=en',
    altText: 'x',
  },
  {
    icon: LinkedIn,
    link: 'https://www.linkedin.com/in/saudi-ozone-company-company-449968125?originalSubdomain=sa',
    altText: 'LinkedIn',
  },
];
const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const targetDate = '2025-08-11T00:00:00';
const calculateTimeLeft = () => {
  const target = new Date(targetDate).getTime();
  const now = new Date().getTime();
  const difference = target - now;

  if (difference > 0) {
    timeLeft.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  } else {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
};

// Update countdown every second
let interval: NodeJS.Timer | null = null;

onMounted(() => {
  calculateTimeLeft(); // Initial calculation
  interval = setInterval(calculateTimeLeft, 1000); // Update every second
});

// onUnmounted(() => {
//   if (interval) clearInterval(interval);
// });
</script>

<style scoped></style>
