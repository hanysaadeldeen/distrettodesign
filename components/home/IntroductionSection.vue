<template>
  <section class="Introduction mx-auto max-w-[1328px] overflow-hidden max-2xl:px-6">
    <div class="">
      <div class="flex w-full items-center justify-between gap-20 max-lg:flex-col-reverse">
        <div class="relative">
          <div
            class="absolute right-0 top-0 -z-10 h-[90%] w-[90%] rounded-l-[60px] border-[16px] border-primary md:-right-14 md:h-[331px] md:w-[100%] md:border-[24px] lg:rounded-l-[80px] xl:h-[446px]"
          ></div>
          <div
            class="absolute right-0 top-[42%] h-8 w-6 -translate-y-1/2 bg-white md:-right-14 md:h-12"
          ></div>
          <div class="pt-[53px] max-md:pr-8 max-md:pt-8">
            <img
              src="~/assets/img/home/introduction/Introduction.png"
              alt="Introduction"
              loading="lazy"
              class="h-[300px] w-full rounded-l-[60px] border-[3px] border-white object-cover md:h-[331px] md:max-w-[477px] lg:rounded-l-[80px] xl:h-[431px] xl:max-w-[577px]"
              width="577px"
              height="431px"
            />
          </div>
        </div>
        <div class="ml-5 w-full max-md:text-center lg:w-1/2 xl:ml-9 xl:max-w-[784px]">
          <h2 class="text-2xl font-normal md:text-3xl md:!leading-[40px]">
            We don’t fill rooms — we create
            <span class="font-medium"> presence.</span> Our interiors blend
            <span class="font-medium"> precision, emotion,</span> and
            <span class="font-medium"> timeless beauty,</span>
            turning everyday spaces into
            <span class="font-medium">extraordinary experiences.</span>
            Because great design isn’t seen — <span class="font-medium"> it’s felt </span>
          </h2>
          <nuxt-link to="/about">
            <button class="gradient-button mt-6">Know More About Us</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
