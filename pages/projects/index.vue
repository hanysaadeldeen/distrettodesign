<template>
  <main>
    <ProjectsHeroSection />
    <section
      v-for="project in projects.slice(0, projectsCount)"
      :key="project.id"
      class="mx-auto max-w-[1320px] max-2xl:px-6"
    >
      <CoverflowCarousel :project="project" />
    </section>

    <div class="mt-10 text-center">
      <button
        class="gradient-button hover:!bg-black hover:text-white"
        @click="projectsCount = projectsCount + 5"
      >
        Show More
      </button>
    </div>

    <ProjectCTASection />
  </main>
</template>

<script setup lang="ts">
import { projects } from '../../ProjectsData/data';

const projectsCount = ref(10);
</script>

<style scoped>
.group,
img {
  border-radius: 20px;
}

section {
  margin-top: 80px;
}

@media (max-width: 768px) {
  section {
    margin-top: 50px;
  }
}
</style>
