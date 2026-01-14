<template>
  <section class="LatestDrop relative overflow-hidden bg-SectionBG py-10 md:py-16 lg:py-20">
    <div class="container mx-auto mb-7 max-w-[1320px] max-2xl:px-6 md:mb-10">
      <SectionTitle title="LATEST DROP" />
    </div>
    <div class="absolute left-0 w-screen max-md:pr-5 2xl:pl-[calc((100%-1410px)/2)]">
      <LatestDropSwiper />
    </div>
    <LatestDropSwiper class="visability" />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.visability {
  visibility: hidden;
}
</style>
