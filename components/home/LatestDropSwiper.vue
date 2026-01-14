<template>
  <div class="pl-5">
    <swiper
      :modules="[Pagination]"
      class="mySwiper rounded-l-[20px]"
      :slides-per-view="'auto'"
      @swiper="onSwiperInit"
    >
      <swiper-slide
        v-for="(insight, index) in Insights"
        :key="index"
        class="w-fit max-w-[582px] rounded-[20px]"
      >
        <div class="relative h-[250px] max-h-[366px] rounded-[20px] sm:px-3 md:h-[366px]">
          <img
            :src="insight.img"
            :alt="insight.title"
            class="h-full w-full rounded-[20px] object-cover"
            loading="lazy"
          />
        </div>
      </swiper-slide>
    </swiper>
    <div class="mt-6 flex gap-4 md:mt-10 md:gap-6">
      <div
        class="group flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-[1.8px] p-4 md:p-5"
        :class="[
          'border-primary transition-all duration-300 ease-in-out hover:border-black',
          isBeginning ? 'cursor-not-allowed border-[#a36416b6] opacity-70' : '',
        ]"
        @click="!isBeginning && swiperInstance?.slidePrev()"
      >
        <i
          class="fa-solid fa-arrow-left text-primary transition-all duration-300 ease-in-out group-hover:text-black"
        ></i>
      </div>
      <div
        class="group flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-[1.8px] p-4 md:p-5"
        :class="[
          'border-primary transition-all duration-300 ease-in-out hover:border-black',
          isEnd ? 'cursor-not-allowed border-[#a36416b6] opacity-70' : '',
        ]"
        @click="!isEnd && swiperInstance?.slideNext()"
      >
        <i
          class="fa-solid fa-arrow-right text-primary transition-all duration-300 ease-in-out group-hover:text-black"
        ></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

const swiperInstance = ref<any>(null);
const isBeginning = ref(true);
const isEnd = ref(false);
const onSwiperInit = (swiper: any) => {
  swiperInstance.value = swiper;

  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;

  swiper.on('slideChange', () => {
    isBeginning.value = swiper.isBeginning;
    isEnd.value = swiper.isEnd;
  });
};
import trend from '../../assets/img/home/latestDrop/trend.webp';
import latestOne from '../../assets/img/home/latestDrop/latestOne.webp';
import latestTwo from '../../assets/img/home/latestDrop/latestTwo.webp';
import latestThree from '../../assets/img/home/latestDrop/latestThree.webp';

const Insights = [
  {
    id: 1,
    img: latestOne,
    title: 'latestOne',
  },
  {
    id: 2,
    img: latestTwo,
    title: 'latestTwo',
  },
  {
    id: 3,
    img: trend,
    title: 'latestTwo',
  },
  {
    id: 4,
    img: latestThree,
    title: 'latestThree',
  },
];
</script>

<style scoped></style>
