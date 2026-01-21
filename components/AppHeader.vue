<template>
  <header
    class="relative pt-4 max-md:px-4"
    :dir="locale === 'ar' ? 'rtl' : 'ltr'"
    :class="[{ 'overflow-hidden': isSideBar }]"
  >
    <div class="mx-auto w-full rounded-2xl bg-white/15 px-4 py-2 md:max-w-[1320px] md:px-6 md:py-4">
      <div class="relative z-40">
        <div class="flex items-center justify-between">
          <nuxt-link :to="localePath('index')" class="relative block" @click="isSideBar = false">
            <img
              src="~/assets/img/Logo2.svg"
              class="relative"
              alt="Distreto Logo"
              width="189px"
              height="64px"
              loading="eager"
              fetchpriority="high"
            />
          </nuxt-link>
          <nav class="relative hidden text-white lg:block">
            <div class="blob bg-primary" aria-hidden="true"></div>
            <ul
              class="flex gap-4 xl:gap-6 2xl:gap-10"
              :class="adjustedPath !== '/' ? 'text-black' : ''"
            >
              <li :class="adjustedPath === '/about' ? 'active' : ''">
                <nuxt-link :to="localePath('about')"> About </nuxt-link>
              </li>
              <li :class="adjustedPath === '/projects' ? 'active' : ''">
                <nuxt-link :to="localePath('projects')"> Projects </nuxt-link>
              </li>
              <li :class="adjustedPath === '/partners' ? 'active' : ''">
                <nuxt-link :to="localePath('partners')"> Partners </nuxt-link>
              </li>
              <li :class="adjustedPath === '/onlineShop' ? 'active' : ''">
                <a href="https://shop.distrettodesign.com/" target="_blank"> Shop </a>
              </li>
              <li :class="adjustedPath === '/careers' ? 'active' : ''">
                <nuxt-link :to="localePath('careers')"> Careers </nuxt-link>
              </li>
              <li>
                <a href="/pdf/Company Profile 2025.pdf" download>Company Profile </a>
              </li>
            </ul>
          </nav>
          <div class="hidden justify-between gap-10 lg:flex">
            <nuxt-link :to="localePath('contact')">
              <button class="gradient-button hover:!bg-black hover:text-white">Contact Us</button>
            </nuxt-link>
          </div>
          <div class="cursor-pointer text-2xl sm:text-3xl lg:hidden">
            <LucideMenu
              :size="32"
              :stroke-width="2.75"
              @click="toggleSidebar"
              :class="[{ hidden: isSideBar }, adjustedPath === '/' ? 'text-white' : 'text-black']"
            />
            <LucideX
              :size="32"
              :stroke-width="2.75"
              class="text-white"
              @click="toggleSidebar"
              :class="[{ hidden: !isSideBar }, adjustedPath === '/' ? 'text-white' : 'text-black']"
            />
          </div>
        </div>
      </div>
      <transition :name="transitionName">
        <div
          v-if="isSideBar"
          class="sideBar fixed inset-x-0 top-0 z-20 flex h-[calc(100dvh)] w-full flex-col items-start px-11 transition-all sm:px-7 lg:hidden"
          :class="[
            {
              'right-0': locale === 'ar',
              'left-0': locale !== 'ar',
            },
          ]"
        >
          <div class="pt-[136px]">
            <nav class="mt-4 inline-block w-full">
              <ul class="flex flex-col gap-5">
                <li :class="[adjustedPath === '/about' ? 'active' : '', 'text-white']">
                  <nuxt-link
                    :to="localePath('about')"
                    @click="isSideBar = !isSideBar"
                    class="w-full"
                  >
                    About
                  </nuxt-link>
                </li>
                <li
                  :class="[
                    adjustedPath === '/projects' ? 'active' : '',
                    'text-white hover:text-primary',
                  ]"
                >
                  <nuxt-link
                    :to="localePath('projects')"
                    @click="isSideBar = !isSideBar"
                    class="w-full"
                  >
                    Projects
                  </nuxt-link>
                </li>
                <li
                  :class="[
                    adjustedPath === '/partners' ? 'active' : '',
                    'text-white hover:text-primary',
                  ]"
                >
                  <nuxt-link
                    :to="localePath('partners')"
                    @click="isSideBar = !isSideBar"
                    class="w-full"
                  >
                    Partners
                  </nuxt-link>
                </li>
                <li :class="[adjustedPath === '/onlineShop' ? 'active' : '', 'text-white']">
                  <a
                    href="https://shop.distrettodesign.com/"
                    target="_blank"
                    @click="isSideBar = !isSideBar"
                    class="w-full"
                  >
                    Shop
                  </a>
                </li>
                <li :class="[adjustedPath === '/careers' ? 'active' : '', 'text-white']">
                  <nuxt-link
                    :to="localePath('careers')"
                    @click="isSideBar = !isSideBar"
                    class="w-full"
                  >
                    Careers
                  </nuxt-link>
                </li>
                <li class="text-white hover:text-primary">
                  <a href="/pdf/Company Profile 2025.pdf" download>Company Profile </a>
                </li>
              </ul>
            </nav>
            <div class="mt-5 justify-between gap-10">
              <nuxt-link :to="localePath('contact')" @click="isSideBar = !isSideBar">
                <button class="gradient-button">Contact Us</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
const { locale } = useI18n();
const localePath = useLocalePath();
const isSideBar = ref<boolean>(false);
const transitionName = computed(() => (locale.value === 'ar' ? 'sidebar-ar' : 'sidebar-en'));
const route = useRoute();

// Optimize sidebar toggle function
const toggleSidebar = () => {
  isSideBar.value = !isSideBar.value;
};

// Add scroll lock functionality with debounce
const debouncedScrollLock = useDebounceFn((value: boolean) => {
  document.body.style.overflow = value ? 'hidden' : '';
}, 100);

watch(isSideBar, newValue => {
  debouncedScrollLock(newValue);
});

// Close sidebar on scroll with debounce
const debouncedScrollHandler = useDebounceFn(() => {
  if (isSideBar.value) {
    isSideBar.value = false;
  }
}, 100);

onMounted(() => {
  window.addEventListener('scroll', debouncedScrollHandler);
});

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
a {
  text-decoration: none;
}

ul li {
  font-weight: 400;
  font-size: 20px;
  display: inline-block;
  position: relative;
  list-style: none;
  width: fit-content;
  cursor: pointer;
  transition: color 0.3s ease;
  will-change: color;
  line-height: 33.6px;
}

ul li a,
ul li {
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul li:hover {
  color: #a36316;
}

ul li.active {
  color: #a36316;
}

.sideBar {
  background: linear-gradient(to right, rgba(10, 9, 17, 0.9), rgba(10, 9, 17, 0.9));
  will-change: transform;
}

.sideBar nav ul li:hover {
  color: #a36316;
}

.sidebar-en-enter-active,
.sidebar-en-leave-active,
.sidebar-ar-enter-active,
.sidebar-ar-leave-active {
  transition: all 0.3s ease;
  will-change: transform, opacity;
}

.sidebar-en-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.sidebar-en-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.sidebar-ar-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.sidebar-ar-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
