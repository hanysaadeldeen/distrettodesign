<template>
  <section class="homeCTA overflow-hidden">
    <div class="w-screen pl-8 2xl:pl-[calc((100%-1410px)/2)]">
      <div
        class="imgCta relative rounded-l-[40px] py-8 pl-10 pr-5 sm:py-14 sm:pl-14 md:py-20 md:pl-20 lg:rounded-l-[60px] lg:py-28"
      >
        <div
          class="absolute left-0 top-0 z-10 h-full w-full rounded-l-[40px] bg-[#000000] opacity-50 transition-all duration-500 ease-in-out lg:rounded-l-[60px]"
        ></div>
        <div class="relative z-20 w-full text-white md:max-w-[880px]">
          <SectionTitle
            title="YOUR FIRST STEP TOWARD A CREATIVE FUTURE STARTS HERE"
            class="mb-4 lg:!leading-[50px]"
          />
          <p class="w-full text-base font-normal text-white sm:text-xl md:text-2xl">
            Be part of a passionate team shaping timeless spaces with vision, craftsmanship, and
            creativity.
          </p>
          <div class="mt-6 flex gap-4 max-md:flex-col lg:mt-10">
            <nuxt-link to="/contact">
              <button class="gradient-buttonTwo">Contact Us</button>
            </nuxt-link>
            <!-- <a href="http://wa.me/+966126829184" target="_blank" class="w-fit">
              <button class="gradient-buttonTwo w-full">Send Your CV To WhatsApp</button>
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.imgCta {
  background-image: url('../../assets/img/career/careerCta.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
