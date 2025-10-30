<template>
  <section class="ProjectCTA overflow-hidden">
    <div class="w-screen pl-8 2xl:pl-[calc((100%-1410px)/2)]">
      <div
        class="imgCta relative rounded-l-[60px] py-8 pl-10 pr-5 sm:py-14 sm:pl-14 md:py-20 md:pl-20 lg:rounded-l-[100px] xl:px-[132px] xl:py-32"
      >
        <div
          class="absolute left-0 top-0 z-10 h-full w-full rounded-l-[60px] bg-[#000000] opacity-50 transition-all duration-500 ease-in-out lg:rounded-l-[100px]"
        ></div>
        <div class="relative z-20 w-full text-white md:max-w-[922px]">
          <SectionTitle
            title="READY TO TURN AMBITION INTO ARCHITECTURE?"
            class="mb-4 uppercase md:mb-6 lg:!leading-[73px]"
          />
          <p class="w-full text-base font-normal text-white md:text-xl lg:text-3xl">
            Whether you're designing a palace, airport, or something uniquely yours — Destritto is
            your partner in creating environments that leave a legacy.
          </p>
          <nuxt-link to="/contact">
            <button class="gradient-buttonTwo mt-4 sm:mt-8 lg:mt-12">Start Your project</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.imgCta {
  background-image: url('../../assets/img/projects/projectsCTA.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
