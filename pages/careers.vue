<template>
  <main class="overflow-hidden">
    <div class="container mx-auto max-w-[1320px] max-2xl:px-6 md:mb-[63px]">
      <div>
        <h1
          class="mt-12 text-center text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl lg:!leading-[73px]"
        >
          Want to join us ?
        </h1>
        <p class="mx-auto mt-4 text-center text-lg font-normal sm:text-xl md:text-2xl">
          Your talent deserves a space to grow
        </p>
        <div @click="scrollToSection('ourRoles')">
          <button type="submit" class="gradient-buttonTwo mx-auto mt-4 block !w-fit lg:mt-10">
            Our Roles
          </button>
        </div>
      </div>
    </div>
    <WorkWithUs />
    <OpenPositions />
    <CareerCTA />
  </main>
</template>

<script setup>
const scrollToSection = sectionId => {
  console.log(`${sectionId}`);
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<style scoped>
#ourRoles {
  scroll-margin-top: 40px;
}
</style>
