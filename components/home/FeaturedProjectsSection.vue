<template>
  <section class="Featured-projects bg-SectionBG">
    <div class="container mx-auto max-w-[1320px] py-10 max-2xl:px-6 md:py-16 lg:py-20">
      <div class="mb-7 flex items-center justify-between gap-4 max-sm:flex-col md:mb-10">
        <SectionTitle title="OUR PROJECTS" />
        <nuxt-link to="/projects">
          <button class="gradient-button hover:!bg-black hover:text-white">
            View All Projects
          </button>
        </nuxt-link>
      </div>
      <div class="flex gap-4 max-md:flex-col md:gap-6">
        <div class="flex w-full flex-col gap-4 md:w-[55.94%] md:gap-6">
          <div class="flex gap-4 md:gap-6">
            <div class="group relative w-1/2 overflow-hidden">
              <img
                src="~/assets/img/home/featured/FEATUREDChair.svg"
                class="transition-all duration-300 ease-in-out group-hover:scale-110"
                alt="FEATUREDChair"
                loading="lazy"
              />
              <div
                class="absolute left-0 top-0 flex h-full w-full items-end bg-[#000000] p-12 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-30"
              ></div>
              <div
                class="absolute left-0 top-0 flex h-full w-full items-end p-2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 md:p-4 lg:p-7"
              >
                <h3 class="text-base font-medium text-white !opacity-100 sm:text-xl md:text-2xl">
                  Mövenpick Hotel
                </h3>
              </div>
            </div>
            <div class="group relative w-1/2 overflow-hidden">
              <img
                src="~/assets/img/home/featured/FEATUREDAirbort.svg"
                class="transition-all duration-300 ease-in-out group-hover:scale-110"
                alt="FEATUREDAirbort"
                loading="lazy"
              />
              <div
                class="absolute left-0 top-0 flex h-full w-full items-end bg-[#000000] p-12 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-30"
              ></div>
              <div
                class="absolute left-0 top-0 flex h-full w-full items-end p-2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 md:p-4 lg:p-7"
              >
                <h3 class="text-base font-medium text-white !opacity-100 sm:text-xl md:text-2xl">
                  The new King Abdulaziz International Airport
                </h3>
              </div>
            </div>
          </div>
          <div class="group relative overflow-hidden">
            <img
              src="~/assets/img/home/featured/FEATUREDGreen.svg"
              class="w-full transition-all duration-300 ease-in-out group-hover:scale-110"
              alt="FEATUREDGreen"
              loading="lazy"
            />
            <div
              class="absolute left-0 top-0 flex h-full w-full items-end bg-[#000000] p-12 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-30"
            ></div>
            <div
              class="absolute left-0 top-0 flex h-full w-full items-end p-2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 md:p-4 lg:p-7"
            >
              <h3 class="text-base font-medium text-white !opacity-100 sm:text-xl md:text-2xl">
                Haramain High Speed Railway
              </h3>
            </div>
          </div>
        </div>
        <div class="flex w-full flex-col items-stretch gap-4 md:w-[44.06%] md:gap-6">
          <div class="group relative h-1/2 overflow-hidden">
            <img
              src="~/assets/img/home/featured/FEATUREDStation.svg"
              alt="FEATUREDStation"
              class="h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
            <div
              class="absolute left-0 top-0 flex h-full w-full items-end bg-[#000000] p-12 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-30"
            ></div>
            <div
              class="absolute left-0 top-0 flex h-full w-full items-end p-2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 md:p-4 lg:p-7"
            >
              <h3 class="text-base font-medium text-white !opacity-100 sm:text-xl md:text-2xl">
                Dallah Albaraka
              </h3>
            </div>
          </div>
          <div class="group relative h-1/2 overflow-hidden">
            <img
              src="~/assets/img/home/featured/FEATUREDHotel.svg"
              alt="FEATUREDHotel"
              class="h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
            <div
              class="absolute left-0 top-0 flex h-full w-full items-end bg-[#000000] p-12 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-30"
            ></div>
            <div
              class="absolute left-0 top-0 flex h-full w-full items-end p-2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 md:p-4 lg:p-7"
            >
              <h3 class="text-base font-medium text-white !opacity-100 sm:text-xl md:text-2xl">
                King Fahd International Airport
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.group,
img {
  border-radius: 20px;
}
</style>
