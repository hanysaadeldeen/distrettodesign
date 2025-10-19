<template>
  <section class="ProjectCTA overflow-hidden">
    <div class="w-screen pr-8 2xl:pr-[calc((100%-1410px)/2)]">
      <div
        class="imgCta xl:py-32max-xl:px-5 relative rounded-r-[60px] py-8 pr-5 sm:py-14 sm:pr-14 md:py-20 md:pr-20 lg:rounded-r-[100px] 2xl:px-[calc((100%-1410px))]"
      >
        <div
          class="absolute left-0 top-0 z-10 h-full w-full rounded-r-[60px] bg-[#000000] opacity-50 transition-all duration-500 ease-in-out lg:rounded-r-[100px]"
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
          <button class="gradient-buttonTwo mt-4 sm:mt-8 lg:mt-12">Start Your project</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.imgCta {
  background-image: url('../../../assets/img/projects/ProjectDetails/projectDetails.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
