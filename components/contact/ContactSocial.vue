<template>
  <div class="flex flex-wrap items-center justify-center gap-8 lg:gap-11">
    <div
      v-for="value in Contact"
      :key="value.id"
      class="flex flex-col rounded-3xl px-2 py-8 md:rounded-[40px] md:py-14"
    >
      <component
        :is="value.link ? 'a' : 'div'"
        :href="value.link || undefined"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="value.title"
        class="mx-auto flex max-w-[408px] cursor-pointer flex-col items-center text-center"
      >
        <div
          class="mx-auto flex w-fit items-center justify-center rounded-3xl bg-secondary p-4 md:p-5"
        >
          <img :src="value.icons" :alt="`${value.title} icon`" class="max-md:max-w-[32px]" />
        </div>
        <h2 class="mb-2 mt-8 text-xl font-medium md:mb-4 md:mt-12 md:text-2xl lg:text-3xl">
          {{ value.title }}
        </h2>
        <p class="text-lg font-normal md:text-xl lg:text-2xl">
          {{ value.description }}
        </p>
      </component>
    </div>
  </div>
</template>

<script setup lang="ts">
import email from '../../assets/img/contact/email.svg';
import Fax from '../../assets/img/contact/Fax.svg';
import location from '../../assets/img/contact/location.svg';
import phone from '../../assets/img/contact/phone.svg';

const Contact = [
  {
    id: 1,
    title: 'Address',
    description:
      'Kingdom of Saudi Arabia - Jeddah - Prince Sultan Street P.O Box: 7629, Jeddah 23433-2056',
    icons: location,
    link: 'https://maps.app.goo.gl/iZTudEesNBzyWQPK6',
  },
  {
    id: 2,
    title: 'Phone',
    description: '(+966) 126829184',
    icons: phone,
    link: 'tel:966126829184',
  },
  {
    id: 3,
    title: 'Fax',
    description: '(+966) 126826824',
    icons: Fax,
    link: '', // no link
  },
  {
    id: 4,
    title: 'Email',
    description: 'info@distrettodesign.com',
    icons: email,
    link: 'https://mail.google.com/mail/?view=cm&to=info@distrettodesign.com',
  },
];
</script>
