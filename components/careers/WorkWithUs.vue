<template>
  <section class="workWithUs relative">
    <div class="w-screen pl-8 2xl:pl-[calc((100%-1410px)/2)]">
      <div class="relative">
        <div class="absolute -left-8 -top-[48px] hidden 2xl:-left-[63px] 2xl:-top-[63px] 2xl:block">
          <img src="~/assets/img/career/careersPattern.svg" alt="careersPattern" />
        </div>
        <div
          class="relative rounded-l-[60px] bg-primary py-8 pl-8 sm:py-14 sm:pl-14 md:py-20 lg:rounded-l-[100px] xl:py-32 xl:pl-[132px]"
        >
          <div class="relative w-full text-white md:max-w-[922px]">
            <SectionTitle
              title="WHY WORK WITH US?"
              class="mb-4 uppercase md:mb-6 lg:!leading-[73px]"
            />
          </div>
          <div class="mt-6 lg:mt-10 xl:mt-40">
            <SwiperWorkWithUs />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
