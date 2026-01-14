<template>
  <main>
    <ProjectsHeroSection />

    <section class="mx-auto max-w-[1320px] max-2xl:px-6">
      <div class="flex max-h-[590px] gap-4 max-md:flex-col md:gap-6">
        <div class="flex w-full flex-col gap-4 md:w-[55.94%] md:gap-6">
          <div class="flex gap-4 md:gap-6">
            <div class="group relative w-1/2 overflow-hidden">
              <img
                src="~/assets/img/projects/TestedProj/firstProj.png"
                class="h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                alt="FEATUREDChair"
                loading="lazy"
              />
            </div>
            <div class="group relative w-1/2 overflow-hidden">
              <img
                src="~/assets/img/projects/TestedProj/secondProj.png"
                class="h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                alt="FEATUREDAirbort"
                loading="lazy"
              />
            </div>
          </div>
          <div class="group relative flex overflow-hidden">
            <img
              src="~/assets/img/projects/TestedProj/thirdProj.png"
              class="h-full w-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              alt="FEATUREDGreen"
              loading="lazy"
            />
          </div>
        </div>
        <div class="flex w-full flex-col items-stretch gap-4 md:w-[44.06%] md:gap-6">
          <div class="group relative h-full overflow-hidden rounded-[20px]">
            <img
              src="~/assets/img/home/featured/FEATUREDHotel.svg"
              alt="FEATUREDHotel"
              class="h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="mt-4 max-w-[450px] md:mt-8">
        <h2 class="text-2xl font-medium md:text-3xl lg:text-4xl">
          King Fahd International Airport
        </h2>
      </div>
    </section>

    <section class="mx-auto max-w-[1320px] max-2xl:px-6">
      <div class="flex max-h-[590px] gap-4 max-md:flex-col md:gap-6">
        <div class="">
          <div class="group relative h-full overflow-hidden rounded-[20px]">
            <img
              src="~/assets/img/projects/TestedProj/fourProj.jpg"
              alt="FEATUREDHotel"
              class="h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
        <div class="">
          <div class="group relative h-full overflow-hidden rounded-[20px]">
            <img
              src="~/assets/img/projects/TestedProj/fourProj.jpg"
              alt="FEATUREDHotel"
              class="h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="mt-4 max-w-[450px] md:mt-8">
        <h2 class="text-2xl font-medium md:text-3xl lg:text-4xl">Ibis and Adajio Hotels</h2>
      </div>
    </section>
    <ProjectCTASection />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.group,
img {
  border-radius: 20px;
}
</style>
