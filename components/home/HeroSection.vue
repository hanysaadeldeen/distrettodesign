<template>
  <div class="HeroSection relative h-[calc(100dvh-96px)] md:h-[calc(100dvh-112px)]">
    <div class="absolute -top-[112px] left-0 z-10 h-[calc(100%+112px)] w-full">
      <Swiper
        :modules="[Autoplay, Pagination]"
        :loop="true"
        :autoplay="{ delay: 4000 }"
        :speed="1500"
        :space-between="0"
        :slides-per-view="1"
        :pagination="{ clickable: true }"
        class="custom-swiper h-full w-full"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index" class="">
          <div class="relative h-full w-full">
            <img
              alt="Home Hero Img"
              class="h-full w-full object-cover brightness-[0.8]"
              :src="slide"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="flex h-full flex-col justify-between">
      <div class="mx-auto w-full max-w-[1512px]">
        <div class="mr-auto h-full w-fit overflow-hidden px-6">
          <h1
            class="relative z-10 pt-16 text-4xl font-semibold text-white sm:text-5xl md:text-7xl lg:pt-[110px] lg:text-[80px] lg:!leading-[90px]"
          >
            DISTRETTO <br />
            DESIGN
          </h1>
        </div>
      </div>

      <div
        class="relative z-10 ml-auto flex w-fit rounded-tl-[24px] bg-white px-6 pt-6 md:rounded-tl-[36px] lg:rounded-tl-[50px] lg:px-8 lg:pt-8"
      >
        <div class="absolute -left-[90px] bottom-0">
          <img src="~/assets/img/home/heroSection/test.svg" class="" alt="homeArrow" />
        </div>
        <nuxt-link :to="localePath('projects')">
          <div
            class="relative w-fit cursor-pointer rounded-l-[24px] bg-primary px-16 py-3 transition-all duration-300 ease-in-out hover:bg-black md:rounded-l-[36px] lg:rounded-l-[40px] lg:px-28"
          >
            <div>
              <img
                src="~/assets/img/home/heroSection/homeArrow.svg"
                class="animate-translateXLoop max-md:size-14 md:size-20 lg:size-28"
                alt="homeArrow"
              />
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import homeHeroOne from '../../assets/img/home/heroSection/homeHeroOne.webp';
import homeHeroTwo from '../../assets/img/home/heroSection/homeHeroTwo.webp';
import homeHeroThree from '../../assets/img/home/heroSection/homeHeroThree.webp';

const slides = [homeHeroOne, homeHeroTwo, homeHeroThree];
</script>

<style>
@keyframes translateXLoop {
  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(10px);
  }
}

.animate-translateXLoop {
  animation: translateXLoop 1s alternate infinite;
}

.custom-swiper .swiper-pagination-bullet {
  background-color: white;
  width: 12px;
  height: 12px;
  margin: 30px 6px !important;
  transition: all 0.3s ease;
}

.custom-swiper .swiper-pagination-bullet-active {
  background-color: #a36316;
  opacity: 1;
  width: 28px;
  border-radius: 6px;
}
</style>
