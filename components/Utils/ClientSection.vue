<template>
  <section class="Clients mx-auto max-w-[1328px] max-xl:px-5">
    <div class="container mx-auto">
      <SectionTitle
        title="Includes group of Europe’s most established furniture brands."
        class="mx-auto mb-10 text-center capitalize md:mb-14 lg:max-w-[1016px] lg:!leading-[52px]"
      />
      <div class="grid grid-cols-2 items-stretch gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        <div
          v-for="client in Clients"
          class="group flex h-[128px] items-center justify-center rounded-l-3xl bg-SectionBG2 p-6 md:h-[228px] md:rounded-l-[40px]"
          :key="client.id"
        >
          <a :href="client.link" target="_blank">
            <img
              :src="client.image"
              :alt="client.name"
              class="max-h-full cursor-pointer object-contain transition-all duration-300 ease-in-out group-hover:scale-110"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import artemide from '../../assets/img/Utils/clients/artemide.svg';
import maxalto from '../../assets/img/Utils/clients/maxalto.svg';
import foscarini from '../../assets/img/Utils/clients/foscarini.svg';
import flos from '../../assets/img/Utils/clients/flos.svg';
import buzzi from '../../assets/img/Utils/clients/buzzi.svg';
import BandB from '../../assets/img/Utils/clients/BandB.svg';
import valcusine from '../../assets/img/Utils/clients/valcusine.svg';
import alessi from '../../assets/img/Utils/clients/alessi.svg';
import driade from '../../assets/img/Utils/clients/driade.svg';
import slampi from '../../assets/img/Utils/clients/slampi.svg';
import crestron from '../../assets/img/Utils/clients/crestron.svg';
import flam from '../../assets/img/Utils/clients/flam.svg';

const Clients = [
  {
    id: 1,
    name: 'Artemide',
    image: artemide,
    link: 'https://www.artemide.com/home',
  },
  {
    id: 2,
    name: 'Maxalto',
    image: maxalto,
    link: 'https://www.maxalto.com/',
  },
  {
    id: 3,
    name: 'Foscarini',
    image: foscarini,
    link: 'https://www.foscarini.com/',
  },
  {
    id: 4,
    name: 'flos',
    image: flos,
    link: 'https://flos.com/',
  },
  {
    id: 5,
    name: 'buzzi',
    image: buzzi,
    link: 'https://buzzi-buzzi.it/',
  },
  {
    id: 6,
    name: 'BandB',
    image: BandB,
    link: 'https://www.bebitalia.com/en-us/',
  },
  {
    id: 7,
    name: 'valcusine',
    image: valcusine,
    link: 'https://www.valcucine.com/en/',
  },
  {
    id: 8,
    name: 'Alessi',
    image: alessi,
    link: 'https://alessi.com/',
  },
  {
    id: 9,
    name: 'Driade',
    image: driade,
    link: 'https://www.driade.com/',
  },
  {
    id: 10,
    name: 'Slampi',
    image: slampi,
    link: 'https://www.slamp.com/en',
  },
  {
    id: 11,
    name: 'Crestron',
    image: crestron,
    link: 'https://www.crestron.com/',
  },
  {
    id: 11,
    name: 'flam',
    image: flam,
    link: 'https://www.fiamitalia.it/',
  },
];
</script>

<style scoped></style>
