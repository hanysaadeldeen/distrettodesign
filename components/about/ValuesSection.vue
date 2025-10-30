<template>
  <section class="relative">
    <div class="absolute left-0 top-0 h-full w-full bg-[#000000] opacity-70"></div>
    <div
      class="container relative z-20 mx-auto max-w-[1328px] py-14 max-2xl:px-6 lg:py-20 xl:py-[90px]"
    >
      <div class="grid grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-3 lg:gap-11">
        <div
          class="flex cursor-pointer flex-col rounded-3xl px-2 py-8 transition-all duration-300 ease-in-out hover:bg-primary md:rounded-[40px] md:py-14"
          v-for="value in Values"
          :key="value.id"
        >
          <div
            class="mx-auto flex w-fit items-center justify-center rounded-3xl bg-secondary p-4 md:p-5"
          >
            <img :src="value.icons" :alt="value.title" class="max-md:max-w-[32px]" />
          </div>
          <div class="mx-auto mt-8 max-w-[408px] md:mt-12">
            <h1 class="mb-2 text-center text-xl font-medium md:mb-4 md:text-2xl lg:text-3xl">
              {{ value.title }}
            </h1>
            <p class="text-center text-lg font-normal md:text-xl lg:text-2xl">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Timeless from '../../assets/img/about/Values/Time.svg';
import Craft from '../../assets/img/about/Values/Craft.svg';
import Vision from '../../assets/img/about/Values/Vision.svg';
import Consistency from '../../assets/img/about/Values/Consistency.svg';
import Global from '../../assets/img/about/Values/Global.svg';
import Details from '../../assets/img/about/Values/Details.svg';

const Values = [
  {
    id: 1,
    title: 'Timeless by Design',
    description: 'We create interiors that outlast trends — elegant today, iconic tomorrow.',
    icons: Timeless,
  },
  {
    id: 2,
    title: 'Craft with Purpose',
    description: 'Every piece we select is rooted in quality, artistry, and meaning.',
    icons: Craft,
  },
  {
    id: 3,
    title: 'Your Vision, First',
    description: 'We create interiors that outlast trends — elegant today, iconic tomorrow.',
    icons: Vision,
  },
  {
    id: 4,
    title: 'Consistency You Can Trust',
    description: 'From first sketch to final delivery, we hold ourselves to the highest standards.',
    icons: Consistency,
  },
  {
    id: 5,
    title: 'Global Excellence, Local Care',
    description: 'We bring the world’s best design to your doorstep',
    icons: Global,
  },
  {
    id: 6,
    title: 'Detail is Everything',
    description: 'We obsess over the smallest touches because they define the entire space.',
    icons: Details,
  },
];
</script>

<style scoped>
section {
  background-image: url('../../assets/img/about/Values/values.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
