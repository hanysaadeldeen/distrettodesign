<template>
  <section class="workWithUs relative">
    <div class="w-screen pl-8 2xl:pl-[calc((100%-1410px)/2)]">
      <div class="relative">
        <div class="absolute -left-8 -top-[48px] hidden 2xl:-left-[63px] 2xl:-top-[63px] 2xl:block">
          <img src="~/assets/img/career/careersPattern.svg" alt="careersPattern" />
        </div>
        <div
          class="relative rounded-l-[50px] bg-primary py-6 pl-8 sm:pl-14 md:py-8 lg:rounded-l-[80px] xl:pl-16"
        >
          <div class="relative w-full text-white md:max-w-[922px]">
            <SectionTitle
              title="WHY WORK WITH US?"
              class="mb-4 uppercase md:mb-6 lg:!leading-[73px]"
            />
          </div>
          <div class="mt-6">
            <SwiperWorkWithUs />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
