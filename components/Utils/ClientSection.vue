<template>
  <section class="Clients">
    <div class="mb-10 max-2xl:px-6">
      <SectionTitle
        title="Includes group of Europe’s most established furniture brands."
        class="mx-auto mb-10 text-center capitalize md:mb-14 lg:max-w-[1016px] lg:!leading-[52px]"
      />
    </div>
    <Vue3Marquee
      :duration="100"
      :pause-on-hover="false"
      :direction="locale === 'en' ? '' : 'reverse'"
    >
      <div
        v-for="client in Clients"
        class="group mx-3 flex h-[128px] items-center justify-center rounded-l-3xl bg-SectionBG2 p-6 md:h-[190px] md:min-w-[300px] md:rounded-l-[40px]"
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
    </Vue3Marquee>
    <Vue3Marquee
      :duration="100"
      :pause-on-hover="false"
      :direction="locale === 'en' ? 'reverse' : ''"
      class="mt-6 overflow-hidden"
    >
      <div
        v-for="client in Clients2"
        class="group mx-3 flex h-[128px] items-center justify-center rounded-r-3xl bg-SectionBG2 p-6 md:h-[190px] md:min-w-[300px] md:rounded-r-[40px]"
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
    </Vue3Marquee>

    <div class="mx-auto mt-10 w-fit">
      <nuxt-link :to="localePath('partners')">
        <button class="gradient-button hover:!bg-black hover:text-white">View All Partners</button>
      </nuxt-link>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();

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

import labbate from '../../assets/img/Utils/clients/companyLogo (1).svg';
import parador from '../../assets/img/Utils/clients/companyLogo (2).svg';
import quadrifoglio from '../../assets/img/Utils/clients/companyLogo (3).svg';
import kvadrat from '../../assets/img/Utils/clients/companyLogo (4).svg';
import umbrosa from '../../assets/img/Utils/clients/companyLogo (5).svg';
import maharam from '../../assets/img/Utils/clients/companyLogo (6).svg';
import plus from '../../assets/img/Utils/clients/companyLogo (7).svg';
import vondom from '../../assets/img/Utils/clients/companyLogo (8).svg';
import gandiaBlasco from '../../assets/img/Utils/clients/companyLogo (9).svg';
import gtvn from '../../assets/img/Utils/clients/companyLogo (10).svg';
import riccardoRivoli from '../../assets/img/Utils/clients/companyLogo (11).svg';
import kasthall from '../../assets/img/Utils/clients/companyLogo (12).svg';
import olivari from '../../assets/img/Utils/clients/companyLogo (13).svg';
import antoniolupi from '../../assets/img/Utils/clients/companyLogo (14).svg';

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
const Clients2 = [
  {
    id: 1,
    name: 'Maharam',
    image: maharam,
    link: 'https://www.maharam.com',
  },
  {
    id: 2,
    name: 'Plus Outdoor Attitude',
    image: plus,
    link: 'https://www.plusoutdoor.it',
  },
  {
    id: 3,
    name: "L'Abbate",
    image: labbate,
    link: 'https://www.labbate.it',
  },
  {
    id: 4,
    name: 'Vondom',
    image: vondom,
    link: 'https://www.vondom.com',
  },
  {
    id: 5,
    name: 'Gandia Blasco',
    image: gandiaBlasco,
    link: 'https://www.gandiablasco.com',
  },
  {
    id: 6,
    name: 'GTVN',
    image: gtvn,
    link: 'https://www.gtvn.it',
  },
  {
    id: 7,
    name: 'Riccardo Rivoli',
    image: riccardoRivoli,
    link: 'https://www.riccardorivoli.it',
  },
  {
    id: 8,
    name: 'Parador',
    image: parador,
    link: 'https://www.parador.de',
  },
  {
    id: 9,
    name: 'Kasthall',
    image: kasthall,
    link: 'https://www.kasthall.com',
  },
  {
    id: 10,
    name: 'Quadrifoglio Group',
    image: quadrifoglio,
    link: 'https://www.quadrifoglio.com',
  },
  {
    id: 11,
    name: 'Kvadrat',
    image: kvadrat,
    link: 'https://www.kvadrat.dk',
  },
  {
    id: 12,
    name: 'Olivari',
    image: olivari,
    link: 'https://www.olivari.it',
  },
  {
    id: 13,
    name: 'Antoniolupi',
    image: antoniolupi,
    link: 'https://www.antoniolupi.it',
  },
  {
    id: 14,
    name: 'Umbrosa',
    image: umbrosa,
    link: 'https://www.umbrosa.com',
  },
];
</script>

<style scoped></style>
