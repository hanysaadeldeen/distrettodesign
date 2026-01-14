<template>
  <main class="privacy relative mt-16 md:mt-24">
    <div class="relative mx-auto max-w-[1320px]">
      <div class="container relative mx-auto px-2 max-sm:px-4">
        <div class="terms-page flex" :key="locale">
          <main class="content flex-1 lg:mr-32 lg:p-4">
            <div class="flex flex-col">
              <h1
                class="mb-4 text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-[80px] lg:!leading-[80px]"
              >
                Privacy Policy
              </h1>
              <p class="mb-5 text-xl font-normal">Last updated: June 2025</p>
              <p class="mb-14 text-xl font-normal md:text-2xl">
                At Distretto Design, we are committed to protecting your privacy and ensuring that
                your personal information is handled with care and transparency.
              </p>
            </div>

            <div
              v-for="(section, index) in sections"
              :id="section.id"
              :key="index"
              class="mb-8 lg:mb-14"
            >
              <h2 class="mb-4 text-xl font-medium md:text-2xl lg:text-3xl">
                {{ $t(section.title) }}:
              </h2>
              <div class="flex items-center">
                <p class="text-base font-normal md:text-2xl">
                  {{ $t(section.description) }}
                </p>
                <!-- <nuxt-link to="contact">
                  <span v-if="section.id === 'contact-us'" class="font-bold mx-1"> Contact Us</span>
                </nuxt-link> -->
              </div>
              <ul class="mt-[14px]">
                <li
                  v-for="(bullet, index) in section.content"
                  :key="index"
                  class="listamax-2xl:px-6 text-titleHeaderSubtitle relative mb-1 text-base font-medium md:text-lg lg:text-2xl"
                  :class="locale === 'en' ? 'before:left-0' : 'before:right-0'"
                >
                  {{ $t(bullet) }}
                </li>
              </ul>
            </div>
          </main>
          <nav class="table-of-contents sticky bottom-0 top-0 hidden lg:block">
            <h3>Terms of Service</h3>
            <ul>
              <li v-for="(section, index) in sections" :key="index">
                <p
                  class="block px-4 py-2"
                  :class="locale === 'en' ? 'text-left' : 'text-right'"
                  @click="scrollToSection(section.id)"
                >
                  {{ $t(section.title) }}
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const { locale } = useI18n();
const sections = [
  {
    id: 'Information-We-Collect',
    title: 'Information We Collect',
    description:
      'We may collect the following types of information when you interact with our website:',
    content: [
      'Personal information you provide (e.g., name, email, phone number, inquiry details)',
      'Browsing data via cookies (e.g., pages visited, time spent, device type)',
    ],
  },
  {
    id: 'how-we-use-the-data',
    title: 'How We Use Your Information',
    description: 'We use the data we collect to:',
    content: [
      'Respond to inquiries and provide customer support',
      'Improve website performance and user experience',
      'Share updates about our services or projects (only if you opt in)',
    ],
  },
  {
    id: 'data-sharing',
    title: 'Cookies',
    description:
      'Our website uses cookies to enhance your browsing experience. You can control or disable cookies at any time through your browser settings.',
  },

  {
    id: 'user-rights',
    title: 'Third-Party Services',
    description:
      'We may use third-party tools (e.g., Google Analytics) to understand visitor behavior. These providers may collect anonymized data in accordance with their own privacy policies.',
  },
  {
    id: 'policy-updates',
    title: 'Your Rights ',
    description:
      'You may request access to, correction of, or deletion of your personal data by contacting us directly at distrettodesign.com',
  },
  {
    id: 'contact-us',
    title: 'Contact',
    description: 'For any questions or concerns regarding your privacy, please Contact Us',
  },
];

const scrollToSection = sectionId => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>
<style scoped>
.startSection2 {
  height: calc(75vh - 112px);
}

@media (max-width: 1024px) {
  .startSection2 {
    height: calc(75vh - 72px);
  }
}

@media (max-width: 768px) {
  section {
    margin-bottom: 80px;
  }
}

.table-of-contents {
  width: 424px;
  padding: 1rem;
  height: fit-content;
}

.table-of-contents h3 {
  margin-bottom: 1rem;
  color: #121212;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.5;
}

.table-of-contents p {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: none;
  background-color: transparent;
  color: black;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  transition: all 0.1s ease-in-out;
}

.table-of-contents p:hover {
  color: #121212;
}

.content {
  flex-grow: 1;
}

.lista::before {
  content: '•';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: black;
  font-size: 2rem;
  font-weight: bold;
}
</style>
