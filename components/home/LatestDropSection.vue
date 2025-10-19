<template>
  <section class="LatestDrop relative overflow-hidden bg-SectionBG py-16 md:py-[120px]">
    <div class="container mx-auto mb-8 max-w-[1328px] max-xl:px-5 md:mb-16">
      <SectionTitle title="LATEST DROP" class="uppercase" />
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
