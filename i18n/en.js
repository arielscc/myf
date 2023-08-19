const categories = [
  'home',
  'skills',
  'education',
  'projects',
  'contact',
];
const en = {
  header: {
    categories,
    icons: ['github', 'twitter', 'instagram', 'languages', 'darkmode'],
  },
  hero: {
    greet: 'Hi, my name is',
    prof: 'Software Engineer',
    button: 'download resume',
    description: 'Engineer with over three years of experience in digital product development, specialized in JavaScript, TypeScript, and NodeJS, and focused on delivering high-quality solutions in terms of performance, accessibility, and best practices.',
  },
  education: {
    title: 'education',
    desc_u: `Bachelor's Degree in Computer Science with a specialization in Computer Systems Engineering`,
    desc_u2: "Facultad de Ciencias Puras y Naturalés, Universidad Mayor de San Andrés",
    desc_u3: "La Paz - Bolivia, 2020",
    desc_c:
      'Durante mi formación, logré certificaciones dentro de la universidad y en plataformas en línea.',
  },
  skills: {
    title: 'skills',
    desc: 'In my free time. I was able to train in different technologies, some of them are.',
    tabs: ['languages', 'libraries', 'tools', 'design'],
  },
  experience: {
    title: 'experiencia',
    content: [
      {
        title: 'Mobile Engineer / Full Stack',
        company: 'Enara Health',
        date: 'Aug/2021 - present (2y)',
        description: `I'm a part of the mobile app development team and have contributed to multiple projects using various languages and technologies. Some of my responsibilities include:`,
        country: 'California, USA',
        roles: [
          'Android/iOS App Developer (React Native) - Crafting Cross-Platform Mobile Experiences.',
          'Web App Developer(React) - Implementing Features and Maintaining Intuitive User Interfaces.',
          'Microservices Developer (Node.js) - Architecting Scalable.',
          'Ruby on Rails Contributor - Adding Specific Features.',
          'Android Native Module Developer - Expanding App Capabilities Through Native Integration.',
          'Testing (React Native) - Ensuring Robust and Reliable Application Performance.',
          'Maintained software performance with regular updates.'
        ],

      },
      {
        title: 'Frontend Developer / Tech Support',
        company: 'Faculty of Pure and Natural Sciences',
        date: 'Jan/2018 - Dec/2019 (2y)',
        country: 'La Paz, BO',
        roles: [
          'User Interface Development -Developing user interfaces using HTML, CSS y JavaScript.',
          'Support of the faculty systems.',
          'UI Design and Graphic Design - Creating and proposing interfaces for systems.',
          'Database Management - Generating required reports from databases.'
        ],
      },
      {
        title: 'System Manager',
        company: 'Federation of Municipal Associations of Bolivia',
        date: 'Jan/2017 - Dec/2017 (1y)',
        country: 'La Paz, BO',
        roles: [
          'Systems Administrator and Tech Resource Management.',
          'Network Administrator.'
        ],
      },

    ]
  },
  list_projects: {
    title: 'projects',
    type: 'featured project',
    projects: [
      {
        id: 1,
        title: 'Exchange BTC',
        links: {
          github: 'https://github.com/arielscc/intercambio-btc',
          live: 'https://intercambio-btc.netlify.app/',
        },
        url: '/assets/projects/intercambio-btc.jpg',
        description:
          'This project is a Single Page App, developed in Vuejs v2 In order to see the value of cryptocurrencies, search for better exchanges and presents a graph of the current state of each cryptocurrency.',
        tags: ['VueJs', 'Javascript', 'TailwindCss'],
      },
      {
        id: 2,
        title: 'Tienda Online',
        links: {
          github: 'https://github.com/arielscc/TiendaOnline',
          live: 'https://tiendaenlinea-6d2f5.firebaseapp.com/',
        },
        url: '/assets/projects/tienda_online.jpg',
        description:
          'This project is a Single Page Application and its objective is to sell souvenirs, this project is implemented with Reactjs and also implements a payment and location gateway through Google Maps',
        tags: ['Reactjs', 'Javascript', 'Firebase', 'ChakraUi'],
      },
      {
        id: 3,
        title: 'Video Anime',
        links: {
          github: 'https://github.com/arielscc/videoAnime',
          live: 'https://video-anime.netlify.app/',
        },
        url: '/assets/projects/video-anime.jpg',
        description:
          'This project is a site to watch anime videos, filter them by re-relevance, popularity and rating. This website natively implements Server-Side-Rendering, and is a PWA',
        tags: ['Javascript', 'Kitsu.io', 'Css', 'Html'],
      },
    ],
  },
  contact: {
    title: 'contact',
    desc: 'Hello again, If you want to build incredible things or want to contact me with any suggestions or questions you can send me an email, or an internal message on my social networks.',
  },
  footer: {
    desc: 'Designed & Built by Ariel Chura',
  },
};

export default en;
