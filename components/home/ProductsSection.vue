<template>
  <section class="ProductsSection mx-auto max-w-[1328px] max-xl:px-5">
    <div class="container mx-auto">
      <div class="items-cente flex justify-between gap-6 max-lg:flex-col">
        <div class="w-full max-lg:text-center lg:max-w-[755px]">
          <SectionTitle title="ENDLESS DESIGN OPTIONS" class="mb-6 uppercase lg:!leading-[73px]" />
          <p class="text-xl font-normal md:text-2xl lg:text-3xl lg:!leading-[40px]">
            We offer a diverse selection of carefully curated products — from world-renowned brands
            in furniture, lighting, smart systems, and finishing materials.
          </p>
          <p class="text-xl font-normal md:text-2xl lg:text-3xl lg:!leading-[40px]">
            Whether your style is classic and refined or bold and contemporary, you’ll find pieces
            that reflect your taste and elevate your lifestyle.
          </p>
        </div>
        <div class="flex justify-center gap-2 lg:gap-4">
          <div class="flex flex-col items-stretch gap-2 lg:gap-4">
            <div class="h-1/2">
              <img
                src="~/assets/img/home/products/productOne.svg"
                alt=""
                class="size-full rounded-[16px] object-cover lg:rounded-[25px]"
              />
            </div>
            <div class="h-1/2">
              <img
                src="~/assets/img/home/products/productTwo.svg"
                alt=""
                class="size-full rounded-[16px] object-cover lg:rounded-[25px]"
              />
            </div>
          </div>
          <div class="flex flex-col items-stretch gap-2 lg:gap-4">
            <div class="h-2/5">
              <img
                src="~/assets/img/home/products/productThree.svg"
                alt=""
                class="size-full rounded-[16px] object-cover lg:rounded-[25px]"
              />
            </div>
            <div class="h-3/5">
              <img
                src="~/assets/img/home/products/productFour.svg"
                alt=""
                class="size-full rounded-[16px] object-cover lg:rounded-[25px]"
              />
            </div>
          </div>
          <div class="hidden flex-col items-stretch gap-2 lg:gap-4 xl:flex">
            <div class="h-1/2">
              <img
                src="~/assets/img/home/products/productFive.svg"
                alt=""
                class="size-full rounded-[16px] object-cover lg:rounded-[25px]"
              />
            </div>
            <div class="h-1/2">
              <img
                src="~/assets/img/home/products/productSix.svg"
                alt=""
                class="size-full rounded-[16px] object-cover lg:rounded-[25px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang=" ts"></script>

<style scoped></style>
