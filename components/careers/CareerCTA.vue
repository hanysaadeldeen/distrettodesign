<template>
  <section class="CareerCTA overflow-hidden">
    <div class="w-screen px-5 pl-8 2xl:pl-[calc((100%-1410px)/2)]">
      <div
        class="imgCta relative rounded-l-[60px] py-8 pl-10 pr-5 sm:py-14 sm:pl-14 md:py-20 md:pl-20 lg:rounded-l-[100px] xl:px-[132px] xl:py-32"
      >
        <div
          class="absolute left-0 top-0 z-10 h-full w-full rounded-l-[60px] bg-[#000000] opacity-50 transition-all duration-500 ease-in-out lg:rounded-l-[100px]"
        ></div>
        <div class="relative z-20 w-full text-white md:max-w-[1041px]">
          <SectionTitle
            title="YOUR FIRST STEP TOWARD A CREATIVE FUTURE STARTS HERE"
            class="mb-4 uppercase md:mb-6 lg:!leading-[73px]"
          />
          <p
            class="w-full text-base font-normal text-white md:max-w-[917px] md:text-xl lg:text-3xl lg:!leading-[44.8px]"
          >
            Be part of a passionate team shaping timeless spaces with vision, craftsmanship, and
            creativity.
          </p>
          <div class="flex gap-4 max-md:flex-col">
            <nuxt-link to="/contact">
              <button class="gradient-buttonTwo mt-4 sm:mt-8 lg:mt-12">Contact Us</button>
            </nuxt-link>
            <a href="http://wa.me/+966126829184" target="_blank">
              <button class="gradient-buttonTwo w-full sm:mt-8 lg:mt-12">
                Send Your CV To WhatsApp
              </button>
            </a>
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
