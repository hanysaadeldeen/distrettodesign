<template>
  <section class="flex flex-wrap items-start justify-center gap-8">
    <div v-for="value in Contact" :key="value.id" class="flex flex-col rounded-3xl px-2">
      <component
        :is="value.link ? 'a' : 'div'"
        :href="value.link || undefined"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="value.title"
        class="mx-auto flex max-w-[408px] cursor-pointer flex-col items-center text-center"
      >
        <div
          class="mx-auto mb-6 flex w-fit items-center justify-center rounded-2xl bg-secondary p-4"
        >
          <img :src="value.icons" :alt="`${value.title} icon`" class="size-8" />
        </div>
        <h3 class="mb-2 text-center text-xl font-semibold md:mb-4 md:text-2xl">
          {{ value.title }}
        </h3>
        <p class="text-center text-lg font-medium md:text-xl">
          {{ value.description }}
        </p>
      </component>
    </div>
  </section>
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
    description: '+966 552 554 005',
    icons: phone,
    link: 'tel:+966126829184',
  },
  {
    id: 3,
    title: 'Fax',
    description: '(+966) 552 554 005',
    icons: Fax,
    link: '',
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
