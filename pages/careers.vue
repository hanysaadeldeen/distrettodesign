<template>
  <main class="overflow-hidden">
    <div class="container mx-auto max-w-[1320px] max-2xl:px-6">
      <div class="mt-24 lg:my-40">
        <h1
          class="text-center text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-[80px] lg:!leading-[80px]"
        >
          Want to join us ?
        </h1>
        <p class="mx-auto mt-4 max-w-[624px] text-center text-2xl font-normal">
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
