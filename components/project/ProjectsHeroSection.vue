<template>
  <div class="ProjectsHeroSection overflow-hidden">
    <div class="relative pl-8 2xl:pl-[calc((100%-1320px)/2)]">
      <div
        class="imgCta relative rounded-l-[50px] py-24 pl-10 pr-5 sm:pl-14 md:py-32 md:pl-20 lg:rounded-l-[80px] lg:py-40 xl:px-[132px]"
      ></div>
      <div class="absolute left-0 top-0 mx-auto flex h-full w-full items-center justify-center">
        <h1
          class="relative text-center text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl"
        >
          OUR PROJECTS
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.imgCta {
  position: relative;
  background-image: url('../../assets/img/projects/projects.webp');
  background-position: 0% 80%;
  background-repeat: no-repeat;
  background-size: cover;
}

/* overlay */
.imgCta::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: inherit;
  z-index: 0;
}
</style>
