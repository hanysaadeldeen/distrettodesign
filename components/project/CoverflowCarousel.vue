<script setup lang="ts">
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

const swiperInstance = ref<any>(null);
const isBeginning = ref(true);
const isEnd = ref(false);
const onSwiperInit = (swiper: any) => {
  swiperInstance.value = swiper;

  // أول تحديث
  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;

  // كل ما يتحرك السلايدر
  swiper.on('slideChange', () => {
    isBeginning.value = swiper.isBeginning;
    isEnd.value = swiper.isEnd;
  });
};

const props = defineProps({
  project: { type: Object, required: true },
});
</script>

<template>
  <div class="h-full max-h-[600px] w-full rounded-3xl">
    <SectionTitle :title="project.title" class="mx-auto mb-4 text-center md:mb-6 lg:mb-10" />
    <Swiper
      :modules="[Pagination]"
      :loop="true"
      :centeredSlides="true"
      :spaceBetween="20"
      :breakpoints="{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
      @swiper="onSwiperInit"
      class="project-swiper rounded-3xl"
    >
      <SwiperSlide v-for="img in project.images" :key="img" class="rounded-2xl">
        <div class="slide-card">
          <img
            :src="img"
            class="h-[260px] w-full rounded-2xl object-cover sm:h-[360px] md:h-[460px]"
            draggable="false"
          />
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="mt-6 flex justify-center gap-4 md:gap-6">
      <div
        @click="!isBeginning && swiperInstance?.slidePrev()"
        class="h-fit cursor-pointer rounded-full border-[1.8px] border-[#a36416b6] p-3 lg:p-4"
      >
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.46223 6.31579H15.1844C15.3842 6.31579 15.5482 6.37988 15.6764 6.50806C15.8046 6.63623 15.8687 6.80021 15.8687 7C15.8687 7.19979 15.8046 7.36378 15.6764 7.49195C15.5482 7.62013 15.3842 7.68421 15.1844 7.68421H2.46223L7.46586 12.666C7.59404 12.8087 7.65813 12.9727 7.65813 13.1579C7.65813 13.3431 7.59039 13.5034 7.45491 13.6389C7.31944 13.7744 7.15911 13.8421 6.97392 13.8421C6.78872 13.8421 6.62474 13.778 6.48197 13.6498L0.324073 7.49195C0.195898 7.34918 0.13181 7.1852 0.13181 7C0.13181 6.81481 0.195898 6.65083 0.324073 6.50806L6.48197 0.350161C6.62474 0.221986 6.78872 0.157898 6.97392 0.157898C7.15911 0.157898 7.31944 0.225635 7.45491 0.361108C7.59039 0.496582 7.65813 0.656916 7.65813 0.842108C7.65813 1.0273 7.59404 1.19128 7.46586 1.33406L2.46223 6.31579Z"
            fill="#a36416b6"
          />
        </svg>
      </div>
      <div
        @click="!isEnd && swiperInstance?.slideNext()"
        class="h-fit cursor-pointer rounded-full border-[1.8px] border-[#a36416b6] p-3 lg:p-4"
      >
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5378 6.31579H0.815558C0.615769 6.31579 0.451786 6.37988 0.323611 6.50806C0.195435 6.63623 0.131348 6.80021 0.131348 7C0.131348 7.19979 0.195435 7.36378 0.323611 7.49195C0.451786 7.62013 0.615769 7.68421 0.815558 7.68421H13.5378L8.53414 12.666C8.40596 12.8087 8.34187 12.9727 8.34187 13.1579C8.34187 13.3431 8.40961 13.5034 8.54509 13.6389C8.68056 13.7744 8.84089 13.8421 9.02608 13.8421C9.21128 13.8421 9.37526 13.778 9.51803 13.6498L15.6759 7.49195C15.8041 7.34918 15.8682 7.1852 15.8682 7C15.8682 6.81481 15.8041 6.65083 15.6759 6.50806L9.51803 0.350161C9.37526 0.221986 9.21128 0.157898 9.02608 0.157898C8.84089 0.157898 8.68056 0.225635 8.54509 0.361108C8.40961 0.496582 8.34187 0.656916 8.34187 0.842108C8.34187 1.0273 8.40596 1.19128 8.53414 1.33406L13.5378 6.31579Z"
            fill="#a36416b6"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-swiper :deep(.slide-card) {
  transform: scale(0.9);
  opacity: 0.7;
  transition:
    transform 300ms ease,
    opacity 300ms ease;
}

/* السلايد اللي في النص (Active) */
.project-swiper :deep(.swiper-slide-active .slide-card) {
  transform: scale(1);
  opacity: 1;
}

/* اختياري: اللي قبل/بعد يكونوا أكبر شوية من الباقي */
.project-swiper :deep(.swiper-slide-prev .slide-card),
.project-swiper :deep(.swiper-slide-next .slide-card) {
  transform: scale(0.94);
  opacity: 0.85;
}
</style>
