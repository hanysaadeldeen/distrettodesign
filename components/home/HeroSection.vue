<template>
  <div class="HeroSection relative h-[calc(100vh-96px)] md:h-[calc(100vh-112px)]">
    <div class="absolute -top-[112px] left-0 -z-10 h-[calc(100%+112px)] w-full">
      <img
        src="~/assets/img/home/heroSection/HeroImg.png"
        alt="Hero Image"
        class="h-full w-full object-cover brightness-[0.8]"
      />
    </div>
    <div class="flex h-full flex-col justify-between">
      <div class="mx-auto h-full w-full max-w-[1512px] overflow-hidden px-6">
        <h1
          class="pt-16 text-4xl font-semibold text-white sm:text-5xl md:text-7xl lg:pt-[110px] lg:text-[80px] lg:!leading-[90px]"
        >
          DISTRETTO <br />
          DESIGN
        </h1>
      </div>
      <div
        class="relative ml-auto flex w-fit rounded-tl-[24px] bg-white px-6 pt-6 md:rounded-tl-[36px] lg:rounded-tl-[50px] lg:px-8 lg:pt-8"
      >
        <div class="absolute -left-[90px] bottom-0">
          <img src="~/assets/img/home/heroSection/test.svg" class="" alt="homeArrow" />
        </div>
        <nuxt-link :to="localePath('projects')">
          <div
            class="relative w-fit cursor-pointer rounded-l-[24px] bg-primary px-16 py-3 transition-all duration-300 ease-in-out hover:bg-black md:rounded-l-[36px] lg:rounded-l-[40px] lg:px-28"
          >
            <div>
              <img
                src="~/assets/img/home/heroSection/homeArrow.svg"
                class="animate-translateXLoop max-md:size-14 md:size-20 lg:size-28"
                alt="homeArrow"
              />
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

<style scoped>
/* .HeroSection {
    background-image: url("../../assets/img/home/heroSection/HeroImg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
} */

@keyframes translateXLoop {
  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(10px);
  }
}

.animate-translateXLoop {
  animation: translateXLoop 1s alternate infinite;
}
</style>
