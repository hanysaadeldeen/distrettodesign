<template>
  <section>
    <div class="container mx-auto max-w-[1320px] max-2xl:px-5">
      <SectionTitle title="MORE PROJECTS" class="mb-10 text-center md:mb-14" />
      <div class="flex gap-6 max-md:flex-col">
        <div class="group relative rounded-[40px]">
          <img
            src="~/assets/img/projects/ProjectDetails/more.svg"
            class="max-w-full rounded-[40px]"
            alt="more.svg"
          />
          <div
            class="absolute left-0 top-0 flex h-full w-full items-end rounded-[40px] bg-[#000000] p-12 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-30"
          ></div>
          <div
            class="absolute left-0 top-0 flex h-full w-full items-end p-2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 md:p-4 lg:p-7"
          >
            <h1 class="text-base font-medium text-white !opacity-100 sm:text-xl md:text-2xl">
              Mövenpick Hotel
            </h1>
          </div>
        </div>
        <div class="group relative rounded-[40px]">
          <img
            src="~/assets/img/projects/ProjectDetails/more2.svg"
            class="max-w-full"
            alt="more2.svg"
          />
          <div
            class="absolute left-0 top-0 flex h-full w-full items-end rounded-[40px] bg-[#000000] p-12 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-30"
          ></div>
          <div
            class="absolute left-0 top-0 flex h-full w-full items-end p-2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 md:p-4 lg:p-7"
          >
            <h1 class="text-base font-medium text-white !opacity-100 sm:text-xl md:text-2xl">
              Mövenpick Hotel
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.group {
  cursor: pointer;
}
</style>
