<template>
  <section class="ProjectSection">
    <div class="container relative mx-auto mb-16 max-w-[1320px] text-center max-2xl:px-5">
      <div class="flex gap-6 max-md:flex-col">
        <div class="flex flex-col gap-6">
          <nuxt-link to="/projects/1">
            <div class="group relative">
              <img src="~/assets/img/projects/one/Placeholder Image 1.svg" alt="" />
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
          </nuxt-link>
          <nuxt-link to="/projects/2">
            <div class="group relative">
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
              <img src="~/assets/img/projects/one/Placeholder Image 2.svg" alt="" />
            </div>
          </nuxt-link>
        </div>
        <div class="flex flex-col gap-6">
          <div class="group relative">
            <img src="~/assets/img/projects/one/Placeholder Image 3.svg" alt="" />
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

          <div class="group relative">
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
            <img src="~/assets/img/projects/one/Placeholder Image 4.svg" alt="" />
          </div>
        </div>
      </div>
      <button class="gradient-button mt-16">Load More</button>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.group {
  cursor: pointer;
}
</style>
