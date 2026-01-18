export type Project = {
  id: string;
  title: string;
  images: string[];
  cover: string;
};

export const projects: Project[] = [
  {
    id: 'dallah-albaraka',
    title: 'Dallah Albaraka',
    images: [
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah AlbarakaOne.jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (2).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (3).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (4).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (5).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (6).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (7).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (8).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (9).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (10).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (11).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (12).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (13).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (14).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (15).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (16).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (17).jpg',
      '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (18).jpg',
    ],
    cover: '../assets/img/ProjectsTwo/images/Dallah Albaraka/Dallah Albaraka (1).jpg',
  },
  {
    id: 'haramain-high-speed-railway',
    title: 'Haramain High Speed Railway',
    images: Array.from(
      { length: 12 },
      (_, i) =>
        `../assets/img/ProjectsTwo/images/Haramain High Speed Railway/Haramain High Speed Railway (${i + 1}).jpg`
    ),
    cover:
      '../assets/img/ProjectsTwo/images/Haramain High Speed Railway/Haramain High Speed Railway (1).jpg',
  },

  {
    id: 'king-abdullah-economic-city-kaec',
    title: 'King Abdullah Economic City (KAEC)',
    images: [
      '../assets/img/ProjectsTwo/images/King Abdullah Economic City (KAEC)/King Abdullah Economic City (KAEC) (1).jpg',
      '../assets/img/ProjectsTwo/images/King Abdullah Economic City (KAEC)/King Abdullah Economic City (KAEC) (2).jpg',
      '../assets/img/ProjectsTwo/images/King Abdullah Economic City (KAEC)/King Abdullah Economic City (KAEC) (3).jpg',
      '../assets/img/ProjectsTwo/images/King Abdullah Economic City (KAEC)/King Abdullah Economic City (KAEC) (4).jpg',
      '../assets/img/ProjectsTwo/images/King Abdullah Economic City (KAEC)/King Abdullah Economic City (KAEC) (5).jpg',
    ],
    cover:
      '../assets/img/ProjectsTwo/images/King Abdullah Economic City (KAEC)/King Abdullah Economic City (KAEC) (1).jpg',
  },

  {
    id: 'king-fahd-international-airport',
    title: 'King Fahd International Airport',
    images: Array.from(
      { length: 6 },
      (_, i) =>
        `../assets/img/ProjectsTwo/images/King Fahd International Airport/King Fahd International Airport (${i + 1}).jpg`
    ),
    cover:
      '../assets/img/ProjectsTwo/images/King Fahd International Airport/King Fahd International Airport (1).jpg',
  },

  {
    id: 'alissa-endowment-office',
    title: 'AlIssa Endowment office',
    images: [
      '../assets/img/ProjectsTwo/images/AlIssa Endowment office/AlIssa Endowment office (1).jpg',
      '../assets/img/ProjectsTwo/images/AlIssa Endowment office/AlIssa Endowment office (2).jpg',
      '../assets/img/ProjectsTwo/images/AlIssa Endowment office/AlIssa Endowment office (3).jpg',
      '../assets/img/ProjectsTwo/images/AlIssa Endowment office/AlIssa Endowment office (4).jpg',
    ],
    cover:
      '../assets/img/ProjectsTwo/images/AlIssa Endowment office/AlIssa Endowment office (1).jpg',
  },

  {
    id: 'occ-building-project',
    title: 'OCC Building Project',
    images: Array.from(
      { length: 12 },
      (_, i) =>
        `../assets/img/ProjectsTwo/images/OCC Building Project/OCC Building Project (${i + 1}).jpg`
    ),
    cover: '../assets/img/ProjectsTwo/images/OCC Building Project/OCC Building Project (1).jpg',
  },

  {
    id: 'diyar-al-salam-residence-jeddah',
    title: 'Diyar Al Salam Residence Jeddah',
    images: [
      '../assets/img/ProjectsTwo/images/Diyar Al Salam Residence Jeddah/Diyar Al Salam Residence Jeddah (1).jpg',
      '../assets/img/ProjectsTwo/images/Diyar Al Salam Residence Jeddah/Diyar Al Salam Residence Jeddah (2).jpg',
      '../assets/img/ProjectsTwo/images/Diyar Al Salam Residence Jeddah/Diyar Al Salam Residence Jeddah (3).jpg',
    ],
    cover:
      '../assets/img/ProjectsTwo/images/Diyar Al Salam Residence Jeddah/Diyar Al Salam Residence Jeddah (1).jpg',
  },

  {
    id: 'gravita',
    title: 'Gravita',
    images: [
      '../assets/img/ProjectsTwo/images/Gravita/Gravita (1).jpg',
      '../assets/img/ProjectsTwo/images/Gravita/Gravita (2).jpg',
      '../assets/img/ProjectsTwo/images/Gravita/Gravita (3).jpg',
    ],
    cover: '../assets/img/ProjectsTwo/images/Gravita/Gravita (1).jpg',
  },

  {
    id: 'ibis-and-adajio-hotels',
    title: 'Ibis and Adajio Hotels',
    images: [
      '../assets/img/ProjectsTwo/images/Ibis and Adajio Hotels/Ibis and Adajio Hotels (1).jpg',
      '../assets/img/ProjectsTwo/images/Ibis and Adajio Hotels/Ibis and Adajio Hotels (2).jpg',
    ],
    cover: '../assets/img/ProjectsTwo/images/Ibis and Adajio Hotels/Ibis and Adajio Hotels (1).jpg',
  },

  {
    id: 'jawhara-stadium-jeddah',
    title: 'Jawhara Stadium Jeddah',
    images: [
      '../assets/img/ProjectsTwo/images/Jawhara Stadium Jeddah/Jawhara Stadium Jeddah (1).jpg',
      '../assets/img/ProjectsTwo/images/Jawhara Stadium Jeddah/Jawhara Stadium Jeddah (2).jpg',
      '../assets/img/ProjectsTwo/images/Jawhara Stadium Jeddah/Jawhara Stadium Jeddah (3).jpg',
    ],
    cover: '../assets/img/ProjectsTwo/images/Jawhara Stadium Jeddah/Jawhara Stadium Jeddah (1).jpg',
  },

  {
    id: 'king-khalid-airport',
    title: 'King Khalid Airport',
    images: [
      '../assets/img/ProjectsTwo/images/King Khalid Airport/King Khalid Airport (1).jpg',
      '../assets/img/ProjectsTwo/images/King Khalid Airport/King Khalid Airport (2).jpg',
    ],
    cover: '../assets/img/ProjectsTwo/images/King Khalid Airport/King Khalid Airport (1).jpg',
  },

  {
    id: 'moi',
    title: 'MOI',
    images: [
      '../assets/img/ProjectsTwo/images/MOI/MOI (1).jpg',
      '../assets/img/ProjectsTwo/images/MOI/MOI (2).jpg',
    ],
    cover: '../assets/img/ProjectsTwo/images/MOI/MOI (1).jpg',
  },

  {
    id: 'movenpick',
    title: 'Movenpick',
    images: [
      '../assets/img/ProjectsTwo/images/Movenpick/Movenpick (1).jpg',
      '../assets/img/ProjectsTwo/images/Movenpick/Movenpick (2).jpg',
      '../assets/img/ProjectsTwo/images/Movenpick/Movenpick (3).jpg',
    ],
    cover: '../assets/img/ProjectsTwo/images/Movenpick/Movenpick (1).jpg',
  },

  {
    id: 'novotel',
    title: 'Novotel',
    images: Array.from(
      { length: 6 },
      (_, i) => `../assets/img/ProjectsTwo/images/Novotel/Novotel (${i + 1}).jpg`
    ),
    cover: '../assets/img/ProjectsTwo/images/Novotel/Novotel (1).jpg',
  },

  {
    id: 'rayhaan-hotel',
    title: 'Rayhaan Hotel',
    images: [
      '../assets/img/ProjectsTwo/images/Rayhaan Hotel/Rayhaan Hotel (1).jpg',
      '../assets/img/ProjectsTwo/images/Rayhaan Hotel/Rayhaan Hotel (2).jpg',
    ],
    cover: '../assets/img/ProjectsTwo/images/Rayhaan Hotel/Rayhaan Hotel (1).jpg',
  },

  {
    id: 'salam-palace',
    title: 'Salam Palace',
    images: Array.from(
      { length: 8 },
      (_, i) => `../assets/img/ProjectsTwo/images/Salam Palace/Salam Palace (${i + 1}).jpg`
    ),
    cover: '../assets/img/ProjectsTwo/images/Salam Palace/Salam Palace (1).jpg',
  },

  {
    id: 'takamol-headoffice',
    title: 'Takamol Headoffice',
    images: [
      '../assets/img/ProjectsTwo/images/Takamol Headoffice/Takamol Headoffice (1).jpg',
      '../assets/img/ProjectsTwo/images/Takamol Headoffice/Takamol Headoffice (2).jpg',
      '../assets/img/ProjectsTwo/images/Takamol Headoffice/Takamol Headoffice (3).jpg',
    ],
    cover: '../assets/img/ProjectsTwo/images/Takamol Headoffice/Takamol Headoffice (1).jpg',
  },

  {
    id: 'the-new-king-abdulaziz-international-airport',
    title: 'The new King Abdulaziz International Airport',
    images: [
      '../assets/img/ProjectsTwo/images/The new King Abdulaziz International Airport/The new King Abdulaziz International Airport (1).jpg',
      '../assets/img/ProjectsTwo/images/The new King Abdulaziz International Airport/The new King Abdulaziz International Airport (2).jpg',
      '../assets/img/ProjectsTwo/images/The new King Abdulaziz International Airport/The new King Abdulaziz International Airport (3).jpg',
    ],
    cover:
      '../assets/img/ProjectsTwo/images/The new King Abdulaziz International Airport/The new King Abdulaziz International Airport (1).jpg',
  },
];
