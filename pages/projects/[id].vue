<template>
  <main class="relative">
    <div class="sticky left-0 top-0 z-[15] w-full bg-white px-8 py-5 2xl:hidden">
      <div class="flex items-center gap-6 rounded">
        <div class="max-h-[32px] max-w-[32px] md:max-h-[32px] md:max-w-[32px]">
          <img src="~/assets/img/projects/ProjectDetails/social/share.svg" alt="share.svg" />
        </div>
        <div
          class="group flex max-h-[32px] max-w-[32px] cursor-pointer items-center justify-center rounded-full border border-black p-2"
        >
          <img
            src="~/assets/img/projects/ProjectDetails/social/whats.svg"
            class="transition-all duration-300 ease-in-out group-hover:scale-110"
            alt="share.svg"
          />
        </div>
        <div
          class="group flex max-h-[32px] max-w-[32px] cursor-pointer items-center justify-center rounded-full border border-black p-2"
        >
          <img
            src="~/assets/img/projects/ProjectDetails/social/faceBook.svg"
            class="max-h-[32px] max-w-[32px] transition-all duration-300 ease-in-out group-hover:scale-110"
            alt="share.svg"
          />
        </div>
        <div
          class="group flex max-h-[32px] max-w-[32px] cursor-pointer items-center justify-center rounded-full border border-black p-2"
        >
          <img
            src="~/assets/img/projects/ProjectDetails/social/instagram.svg"
            class="transition-all duration-300 ease-in-out group-hover:scale-110"
            alt="share.svg"
          />
        </div>
        <div
          class="group flex max-h-[32px] max-w-[32px] cursor-pointer items-center justify-center rounded-full border border-black p-2"
        >
          <img
            src="~/assets/img/projects/ProjectDetails/social/telegram.svg"
            class="transition-all duration-300 ease-in-out group-hover:scale-110"
            alt="share.svg"
          />
        </div>
      </div>
    </div>
    <div class="relative flex">
      <div class="sticky bottom-0 left-3 top-[210px] hidden h-fit w-fit 2xl:left-[78px] 2xl:block">
        <div class="flex flex-col items-center gap-6 rounded">
          <div>
            <img src="~/assets/img/projects/ProjectDetails/social/share.svg" alt="share.svg" />
          </div>
          <div
            class="group flex size-12 cursor-pointer items-center justify-center rounded-full border border-black p-2"
          >
            <img
              src="~/assets/img/projects/ProjectDetails/social/whats.svg"
              class="transition-all duration-300 ease-in-out group-hover:scale-110"
              alt="share.svg"
            />
          </div>
          <div
            class="group flex size-12 cursor-pointer items-center justify-center rounded-full border border-black p-2"
          >
            <img
              src="~/assets/img/projects/ProjectDetails/social/faceBook.svg"
              class="transition-all duration-300 ease-in-out group-hover:scale-110"
              alt="share.svg"
            />
          </div>
          <div
            class="group flex size-12 cursor-pointer items-center justify-center rounded-full border border-black p-2"
          >
            <img
              src="~/assets/img/projects/ProjectDetails/social/instagram.svg"
              class="transition-all duration-300 ease-in-out group-hover:scale-110"
              alt="share.svg"
            />
          </div>
          <div
            class="group flex size-12 cursor-pointer items-center justify-center rounded-full border border-black p-2"
          >
            <img
              src="~/assets/img/projects/ProjectDetails/social/telegram.svg"
              class="transition-all duration-300 ease-in-out group-hover:scale-110"
              alt="share.svg"
            />
          </div>
        </div>
      </div>

      <div class="overflow-hidden">
        <ProjectDHero />
        <PDetailsSection />
        <MoreProjectsSection />
      </div>
    </div>
  </main>

  <PDetailsCtaSection />
</template>

<script setup lang="ts">
// const route = useRoute()
</script>

<style scoped></style>
