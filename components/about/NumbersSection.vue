<template>
  <section>
    <div class="container mx-auto max-w-[1320px] max-2xl:px-6">
      <div
        class="flex items-center justify-between gap-10 rounded-[40px] bg-SectionBG2 p-8 max-xl:flex-col md:p-10 xl:p-[60px]"
      >
        <div class="">
          <h1 class="mb-4 text-4xl font-medium max-xl:text-center sm:text-5xl lg:text-6xl">
            OUR STATS
          </h1>
          <p class="text-xl font-medium text-[#333333] max-xl:text-center md:text-2xl">
            The numbers behind our legacy
          </p>
        </div>
        <div
          class="flex flex-grow flex-wrap justify-between gap-10 max-xl:w-full max-md:justify-center"
        >
          <div v-for="(stat, index) in stats" :key="index" ref="counterElements">
            <div class="space-y-4">
              <h1 class="number">{{ stat.value }}+</h1>
              <p class="numberTitle">{{ stat.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = reactive([
  {
    text: 'Projects',
    value: 0,
    targetValue: 40,
  },
  {
    text: 'Employees',
    value: 0,
    targetValue: 30,
  },
  {
    text: 'Partner',
    value: 0,
    targetValue: 20,
  },
  {
    text: 'Products',
    value: 0,
    targetValue: 100,
  },
]);
const counterElements = ref([]);

const interval = 1000;

const updateCounter = (stat: any) => {
  let startValue = 0;
  const endValue = stat.targetValue;
  const duration = Math.floor(interval / endValue);
  const counter = setInterval(() => {
    startValue += 1;
    stat.value = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
};

const startCounters = () => {
  stats.forEach(updateCounter);
};

onMounted(() => {
  const options = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounters();
        observer.unobserve(entry.target);
      }
    });
  }, options);

  counterElements.value.forEach(element => {
    observer.observe(element);
  });
});
</script>

<style scoped>
.number {
  @apply text-center text-5xl font-semibold text-primary lg:text-6xl xl:text-7xl;
}

.numberTitle {
  @apply text-center text-xl font-normal md:text-2xl lg:text-3xl;
}
</style>
