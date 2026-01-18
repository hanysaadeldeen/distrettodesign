<template>
  <main>
    <ProjectsHeroSection />

    <!-- <section class="mx-auto max-w-[1320px] max-2xl:px-6">
      <div class="flex max-h-[590px] gap-4 max-md:flex-col md:gap-6">
        <div class="flex w-full flex-col gap-4 md:w-[55.94%] md:gap-6">
          <div class="flex gap-4 md:gap-6">
            <div class="group relative w-1/2 overflow-hidden">
              <img
                src="~/assets/img/projects/TestedProj/firstProj.png"
                class="h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                alt="FEATUREDChair"
                loading="lazy"
              />
            </div>
            <div class="group relative w-1/2 overflow-hidden">
              <img
                src="~/assets/img/projects/TestedProj/secondProj.png"
                class="h-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                alt="FEATUREDAirbort"
                loading="lazy"
              />
            </div>
          </div>
          <div class="group relative flex overflow-hidden">
            <img
              src="~/assets/img/projects/TestedProj/thirdProj.png"
              class="h-full w-full rounded-[20px] object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              alt="FEATUREDGreen"
              loading="lazy"
            />
          </div>
        </div>
        <div class="flex w-full flex-col items-stretch gap-4 md:w-[44.06%] md:gap-6">
          <div class="group relative h-full overflow-hidden rounded-[20px]">
            <img
              src="~/assets/img/home/featured/FEATUREDHotel.svg"
              alt="FEATUREDHotel"
              class="h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="mt-4 max-w-[450px] md:mt-8">
        <h2 class="text-2xl font-medium md:text-3xl lg:text-4xl">
          King Fahd International Airport
        </h2>
      </div>
    </section>

    <section class="mx-auto max-w-[1320px] max-2xl:px-6">
      <div class="flex max-h-[590px] gap-4 max-md:flex-col md:gap-6">
        <div class="">
          <div class="group relative h-full overflow-hidden rounded-[20px]">
            <img
              src="~/assets/img/projects/TestedProj/fourProj.jpg"
              alt="FEATUREDHotel"
              class="h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
        <div class="">
          <div class="group relative h-full overflow-hidden rounded-[20px]">
            <img
              src="~/assets/img/projects/TestedProj/fourProj.jpg"
              alt="FEATUREDHotel"
              class="h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="mt-4 max-w-[450px] md:mt-8">
        <h2 class="text-2xl font-medium md:text-3xl lg:text-4xl">Ibis and Adajio Hotels</h2>
      </div>
    </section> -->

    <section
      v-for="project in projects.slice(0, projectsCount)"
      :key="project.id"
      class="mx-auto max-w-[1320px] max-2xl:px-6"
    >
      <CoverflowCarousel :project="project" />
    </section>

    <div class="mt-10 text-center">
      <button
        class="gradient-button hover:!bg-black hover:text-white"
        @click="projectsCount = projectsCount + 5"
      >
        Show More
      </button>
    </div>

    <ProjectCTASection />
  </main>
</template>

<script setup lang="ts">
import { projects } from '../../ProjectsData/data';
// export type Project = {
//   id: string;
//   title: string;
//   images: string[];
//   cover: string;
// };
// const projects = [
//   {
//     id: 'dallah-albaraka',
//     title: 'Dallah Albaraka',
//     images: [
//       '../../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah AlbarakaOne.jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (2).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (3).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (4).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (5).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (6).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (7).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (8).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (9).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (10).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (11).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (12).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (13).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (14).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (15).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (16).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (17).jpg',
//       '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (18).jpg',
//     ],
//     cover: '../../assets/img/images/Dallah Albaraka/Dallah Albaraka (1).jpg',
//   },
//   {
//     id: 'haramain-high-speed-railway',
//     title: 'Haramain High Speed Railway',
//     images: Array.from(
//       { length: 12 },
//       (_, i) =>
//         `../../assets/img/images/Haramain High Speed Railway/Haramain High Speed Railway (${i + 1}).jpg`
//     ),
//     cover:
//       '../../assets/img/images/Haramain High Speed Railway/Haramain High Speed Railway (1).jpg',
//   },

//   {
//     id: 'king-abdullah-economic-city-kaec',
//     title: 'King Abdullah Economic City (KAEC)',
//     images: [
//       '../../assets/img/images/King Abdullah Economic City (KAEC)/King Abdullah Economic City (KAEC) (1).jpg',
//       '../../assets/img/images/King Abdullah Economic City (KAEC)/King Abdullah Economic City (KAEC) (2).jpg',
//       '../../assets/img/images/King Abdullah Economic City (KAEC)/King Abdullah Economic City (KAEC) (3).jpg',
//       '../../assets/img/images/King Abdullah Economic City (KAEC)/King Abdullah Economic City (KAEC) (4).jpg',
//       '../../assets/img/images/King Abdullah Economic City (KAEC)/King Abdullah Economic City (KAEC) (5).jpg',
//     ],
//     cover:
//       '../../assets/img/images/King Abdullah Economic City (KAEC)/King Abdullah Economic City (KAEC) (1).jpg',
//   },

//   {
//     id: 'king-fahd-international-airport',
//     title: 'King Fahd International Airport',
//     images: Array.from(
//       { length: 6 },
//       (_, i) =>
//         `../../assets/img/images/King Fahd International Airport/King Fahd International Airport (${i + 1}).jpg`
//     ),
//     cover:
//       '../../assets/img/images/King Fahd International Airport/King Fahd International Airport (1).jpg',
//   },

//   {
//     id: 'alissa-endowment-office',
//     title: 'AlIssa Endowment office',
//     images: [
//       '../../assets/img/images/AlIssa Endowment office/AlIssa Endowment office (1).jpg',
//       '../../assets/img/images/AlIssa Endowment office/AlIssa Endowment office (2).jpg',
//       '../../assets/img/images/AlIssa Endowment office/AlIssa Endowment office (3).jpg',
//       '../../assets/img/images/AlIssa Endowment office/AlIssa Endowment office (4).jpg',
//     ],
//     cover: '../../assets/img/images/AlIssa Endowment office/AlIssa Endowment office (1).jpg',
//   },

//   {
//     id: 'occ-building-project',
//     title: 'OCC Building Project',
//     images: Array.from(
//       { length: 12 },
//       (_, i) => `../../assets/img/images/OCC Building Project/OCC Building Project (${i + 1}).jpg`
//     ),
//     cover: '../../assets/img/images/OCC Building Project/OCC Building Project (1).jpg',
//   },

//   {
//     id: 'diyar-al-salam-residence-jeddah',
//     title: 'Diyar Al Salam Residence Jeddah',
//     images: [
//       '../../assets/img/images/Diyar Al Salam Residence Jeddah/Diyar Al Salam Residence Jeddah (1).jpg',
//       '../../assets/img/images/Diyar Al Salam Residence Jeddah/Diyar Al Salam Residence Jeddah (2).jpg',
//       '../../assets/img/images/Diyar Al Salam Residence Jeddah/Diyar Al Salam Residence Jeddah (3).jpg',
//     ],
//     cover:
//       '../../assets/img/images/Diyar Al Salam Residence Jeddah/Diyar Al Salam Residence Jeddah (1).jpg',
//   },

//   {
//     id: 'gravita',
//     title: 'Gravita',
//     images: [
//       '../../assets/img/images/Gravita/Gravita (1).jpg',
//       '../../assets/img/images/Gravita/Gravita (2).jpg',
//       '../../assets/img/images/Gravita/Gravita (3).jpg',
//     ],
//     cover: '../../assets/img/images/Gravita/Gravita (1).jpg',
//   },

//   {
//     id: 'ibis-and-adajio-hotels',
//     title: 'Ibis and Adajio Hotels',
//     images: [
//       '../../assets/img/images/Ibis and Adajio Hotels/Ibis and Adajio Hotels (1).jpg',
//       '../../assets/img/images/Ibis and Adajio Hotels/Ibis and Adajio Hotels (2).jpg',
//     ],
//     cover: '../../assets/img/images/Ibis and Adajio Hotels/Ibis and Adajio Hotels (1).jpg',
//   },

//   {
//     id: 'jawhara-stadium-jeddah',
//     title: 'Jawhara Stadium Jeddah',
//     images: [
//       '../../assets/img/images/Jawhara Stadium Jeddah/Jawhara Stadium Jeddah (1).jpg',
//       '../../assets/img/images/Jawhara Stadium Jeddah/Jawhara Stadium Jeddah (2).jpg',
//       '../../assets/img/images/Jawhara Stadium Jeddah/Jawhara Stadium Jeddah (3).jpg',
//     ],
//     cover: '../../assets/img/images/Jawhara Stadium Jeddah/Jawhara Stadium Jeddah (1).jpg',
//   },

//   {
//     id: 'king-khalid-airport',
//     title: 'King Khalid Airport',
//     images: [
//       '../../assets/img/images/King Khalid Airport/King Khalid Airport (1).jpg',
//       '../../assets/img/images/King Khalid Airport/King Khalid Airport (2).jpg',
//     ],
//     cover: '../../assets/img/images/King Khalid Airport/King Khalid Airport (1).jpg',
//   },

//   {
//     id: 'moi',
//     title: 'MOI',
//     images: ['../../assets/img/images/MOI/MOI (1).jpg', '../../assets/img/images/MOI/MOI (2).jpg'],
//     cover: '../../assets/img/images/MOI/MOI (1).jpg',
//   },

//   {
//     id: 'movenpick',
//     title: 'Movenpick',
//     images: [
//       '../../assets/img/images/Movenpick/Movenpick (1).jpg',
//       '../../assets/img/images/Movenpick/Movenpick (2).jpg',
//       '../../assets/img/images/Movenpick/Movenpick (3).jpg',
//     ],
//     cover: '../../assets/img/images/Movenpick/Movenpick (1).jpg',
//   },

//   {
//     id: 'novotel',
//     title: 'Novotel',
//     images: Array.from(
//       { length: 6 },
//       (_, i) => `../../assets/img/images/Novotel/Novotel (${i + 1}).jpg`
//     ),
//     cover: '../../assets/img/images/Novotel/Novotel (1).jpg',
//   },

//   {
//     id: 'rayhaan-hotel',
//     title: 'Rayhaan Hotel',
//     images: [
//       '../../assets/img/images/Rayhaan Hotel/Rayhaan Hotel (1).jpg',
//       '../../assets/img/images/Rayhaan Hotel/Rayhaan Hotel (2).jpg',
//     ],
//     cover: '../../assets/img/images/Rayhaan Hotel/Rayhaan Hotel (1).jpg',
//   },

//   {
//     id: 'salam-palace',
//     title: 'Salam Palace',
//     images: Array.from(
//       { length: 8 },
//       (_, i) => `../../assets/img/images/Salam Palace/Salam Palace (${i + 1}).jpg`
//     ),
//     cover: '../../assets/img/images/Salam Palace/Salam Palace (1).jpg',
//   },

//   {
//     id: 'takamol-headoffice',
//     title: 'Takamol Headoffice',
//     images: [
//       '../../assets/img/images/Takamol Headoffice/Takamol Headoffice (1).jpg',
//       '../../assets/img/images/Takamol Headoffice/Takamol Headoffice (2).jpg',
//       '../../assets/img/images/Takamol Headoffice/Takamol Headoffice (3).jpg',
//     ],
//     cover: '../../assets/img/images/Takamol Headoffice/Takamol Headoffice (1).jpg',
//   },

//   {
//     id: 'the-new-king-abdulaziz-international-airport',
//     title: 'The new King Abdulaziz International Airport',
//     images: [
//       '../../assets/img/images/The new King Abdulaziz International Airport/The new King Abdulaziz International Airport (1).jpg',
//       '../../assets/img/images/The new King Abdulaziz International Airport/The new King Abdulaziz International Airport (2).jpg',
//       '../../assets/img/images/The new King Abdulaziz International Airport/The new King Abdulaziz International Airport (3).jpg',
//     ],
//     cover:
//       '../../assets/img/images/The new King Abdulaziz International Airport/The new King Abdulaziz International Airport (1).jpg',
//   },
// ];

const projectsCount = ref(5);
</script>

<style scoped>
.group,
img {
  border-radius: 20px;
}

section {
  margin-top: 80px;
}

@media (max-width: 768px) {
  section {
    margin-top: 50px;
  }
}
</style>
