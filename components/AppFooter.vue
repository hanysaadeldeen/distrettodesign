<template>
  <footer class="relative mt-6 rounded-tl-[80px] bg-black text-white md:rounded-tl-[100px]">
    <section class="relative mx-auto max-w-[1320px]">
      <div class="container relative mx-auto max-2xl:px-6">
        <div class="absolute -top-10 right-0 hidden lg:block">
          <nuxt-link :to="localePath('index')" class="cursor-pointer">
            <img src="~/assets/img/Utils/footer.svg" alt="footer" />
          </nuxt-link>
        </div>
        <div class="lg:py-16">
          <div class="flex justify-center max-sm:mb-7 lg:hidden">
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
                class="absolute -top-6 max-sm:right-0"
                loading="lazy"
              />
            </nuxt-link>
          </div>
          <div class="border-b border-white max-lg:text-center max-md:py-10 md:pb-12">
            <h2
              class="mb-4 text-2xl font-medium max-lg:text-center sm:text-3xl md:mb-6 md:text-4xl lg:max-w-[400px] lg:text-[42px] lg:!leading-[52px]"
            >
              SHAPING VISION INTO SPACES
            </h2>
            <nuxt-link :to="localePath('contact')">
              <button class="gradient-button !bg-transparent hover:!bg-primary">Contact Us</button>
            </nuxt-link>
            <div class="mt-6">
              <nav class="max-w-[435px]">
                <ul
                  class="flex flex-wrap gap-4 text-xl font-medium *:cursor-pointer *:text-white hover:*:text-primary max-lg:items-center max-lg:justify-center"
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
                  <li>
                    <a href="/pdf/Distretto Brochure Dec 2025.pdf" download>Brochure </a>
                  </li>
                  <li>
                    <a href="/pdf/Company Profile 2025.pdf" download>Company Profile </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              class="mt-5 flex items-center gap-3 *:cursor-pointer *:text-xl *:text-white hover:*:text-primary max-lg:items-center max-lg:justify-center"
            >
              <a href="https://www.instagram.com/distrettodesignofficial/" target="_blank">
                <LucideInstagram :size="30" :stroke-width="2.75" />
              </a>
              <a href="https://wa.me/+966552554005" target="_blank">
                <img
                  src="~/assets/img/whatsApp.svg"
                  alt="whatsApp"
                  width="40px"
                  height="40px"
                  class="h-10 w-10"
                />
              </a>
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
              {{
                `All rights reserved for Distretto Design &COPY; ${currentYear} — Designed and developed by`
              }}
              <a href="https://do.com.sa/" target="_blank">
                <img
                  src="~/assets/img/whiteDo.gif"
                  class="mx-1 inline-block h-5 w-10"
                  width="40"
                  height="20"
                  alt="Do Logo"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n();

const route = useRoute();

const getPathWithoutLocale = (path: string) => {
  const segments = path.split('/');
  if (segments[1] && segments[1].length === 2) {
    return `/${segments.slice(2).join('/')}`;
  }
  return path;
};

const adjustedPath = computed(() => getPathWithoutLocale(route.path));
const currentYear = new Date().getFullYear();
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
