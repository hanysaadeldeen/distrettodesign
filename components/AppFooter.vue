<template>
  <footer class="relative mt-6 rounded-tl-[80px] bg-black text-white md:rounded-tl-[100px]">
    <section class="relative mx-auto max-w-[1328px]">
      <div class="container relative mx-auto max-2xl:px-6">
        <div class="absolute -top-10 right-0 hidden lg:block">
          <nuxt-link :to="localePath('index')" class="cursor-pointer">
            <img src="~/assets/img/Utils/footer.svg" alt="footer" />
          </nuxt-link>
        </div>
        <div class="lg:py-20">
          <div class="flex justify-center lg:hidden">
            <nuxt-link :to="localePath('index')" class="cursor-pointer">
              <img
                src="~/assets/img/Utils/footer.svg"
                alt="footer"
                class="visability"
                loading="lazy"
              />
              <img
                src="~/assets/img/Utils/footer.svg"
                alt="footer"
                class="absolute -top-6"
                loading="lazy"
              />
            </nuxt-link>
          </div>
          <div class="border-b border-white max-lg:text-center max-md:py-10 md:pb-12">
            <h1
              class="mb-4 text-2xl font-medium max-lg:text-center sm:text-3xl md:mb-6 md:text-4xl lg:max-w-[529px] lg:text-[52px] lg:!leading-[52px]"
            >
              SHAPING VISION INTO SPACES
            </h1>
            <nuxt-link to="/contact">
              <button class="gradient-button mt-6 !bg-transparent hover:!bg-primary">
                Get Our Service
              </button>
            </nuxt-link>
            <div class="mt-6">
              <nav>
                <ul
                  class="flex flex-wrap gap-6 text-xl font-medium *:cursor-pointer *:text-white hover:*:text-primary max-lg:items-center max-lg:justify-center"
                >
                  <li :class="adjustedPath === '/projects' ? 'active' : ''">
                    <nuxt-link :to="localePath('projects')"> Projects </nuxt-link>
                  </li>
                  <li :class="adjustedPath === '/about' ? 'active' : ''">
                    <nuxt-link :to="localePath('about')"> About </nuxt-link>
                  </li>

                  <li :class="adjustedPath === '/careers' ? 'active' : ''">
                    <nuxt-link :to="localePath('careers')"> Careers </nuxt-link>
                  </li>
                  <li :class="adjustedPath === '/shop' ? 'active' : ''">
                    <a href="https://shop.distrettodesign.com/" target="_blank"> Online Shop </a>
                  </li>
                  <li :class="adjustedPath === '/contact' ? 'active' : ''">
                    <nuxt-link :to="localePath('contact')"> Contact Us </nuxt-link>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              class="mt-5 flex items-center gap-6 *:cursor-pointer *:text-xl *:text-white hover:*:text-primary max-lg:items-center max-lg:justify-center"
            >
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <div class="group">
                <div class="block group-hover:hidden">
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1761 0.242676H16.9362L10.9061 7.02008L18 16.2427H12.4456L8.0951 10.6493L3.11723 16.2427H0.35544L6.80517 8.99348L0 0.242676H5.69545L9.6279 5.3553L14.1761 0.242676ZM13.2073 14.6181H14.7368L4.86441 1.78196H3.2232L13.2073 14.6181Z"
                      fill=" white "
                    />
                  </svg>
                </div>
                <div class="hidden group-hover:block">
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1761 0.242676H16.9362L10.9061 7.02008L18 16.2427H12.4456L8.0951 10.6493L3.11723 16.2427H0.35544L6.80517 8.99348L0 0.242676H5.69545L9.6279 5.3553L14.1761 0.242676ZM13.2073 14.6181H14.7368L4.86441 1.78196H3.2232L13.2073 14.6181Z"
                      fill="#A36316"
                    />
                  </svg>
                </div>
              </div>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div
            class="flex items-center justify-between gap-2 pt-8 text-sm text-white max-lg:flex-col max-lg:justify-center max-lg:pb-8"
          >
            <ul class="flex items-center gap-6 *:cursor-pointer *:underline">
              <li :class="adjustedPath === '/privacy' ? 'active' : ''">
                <nuxt-link :to="localePath('privacy')"> Privacy Policy </nuxt-link>
              </li>
              <li :class="adjustedPath === '/terms' ? 'active' : ''">
                <nuxt-link :to="localePath('terms')"> Terms of Service </nuxt-link>
              </li>
            </ul>
            <p class="text-center">
              © 2025 Distretto Design. All rights reserved. Made by
              <a href="https://do.com.sa/" class="mx-1 text-lg font-bold underline" target="_blank"
                >DO</a
              >.
            </p>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const route = useRoute();

const getPathWithoutLocale = (path: string) => {
  const segments = path.split('/');
  if (segments[1] && segments[1].length === 2) {
    return `/${segments.slice(2).join('/')}`;
  }
  return path;
};

const adjustedPath = computed(() => getPathWithoutLocale(route.path));
</script>

<style scoped>
.gradient-button {
  padding: 16px 24px;
  border-radius: 16px;
  font-size: 24px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
}

.gradient-button {
  border: 2px solid white;
  color: white;
}

.gradient-button:hover {
  border: 2px solid #a36316;
  background-color: #a36316;
}

@media (max-width: 768px) {
  .gradient-button {
    padding: 8px 16px;
    font-size: 18px;
  }
}

.visability {
  visibility: hidden;
}

ul li.active {
  color: #a36316;
}
</style>
