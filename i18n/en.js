const categories = [
  'home',
  'about',
  'education',
  'skills',
  'experience',
  'projects',
  'contact',
];
const en = {
  header: {
    categories,
    icons: ['github', 'twitter', 'instagram', 'languages', 'darkmode'],
  },
  hero: {
    title: 'home',
    greet: 'Hi, my name is',
    button: 'Download Resume',
  },
  about: {
    title: 'about',
    description:
      'I am web developer with experience building digital products with different technologies. Currently my Stack of technologies has a JavaScript as main language, I like to develop solutions that meet high quality metrics in terms of performance, accessibility and good practices. I am looking for job opportunities to grow professionally with an innovation team to provide solutions to different problems.',
  },
  education: {
    title: 'education',
    univ: 'Computer Science - UMSA',
    desc_u:
      'I studied computer science at the Universidad Mayor de San Andrés, where I participated in several academic events such as study groups and events held by the faculty, such as Festicyt-UMSA. Also participate in the organization of several academic events, such as the School Olympics/2018-2019 and the Congress of Biotechnology-2019.',
    desc_c:
      'During my formation, I also managed to obtain some certifications within the university and on online platforms.',
  },
  skills: {
    title: 'skills',
    desc: 'In my free time. I was able to train in different technologies, some of them are.',
    tabs: ['front-end', 'back-end', 'data bases', 'design', 'tools'],
  },
  experience: {
    title: 'experience',
    job_a: [
      'Responsible for the support of the faculty administration systems',
      'Responsible for network support and communication of the faculty',
      'User interface design and graphic design',
      'Database administration',
    ],
    job_b: [
      'Responsible for the support of administration systems and resource management and correspondence',
      'Responsible for the network and infrastructure support of the organization',
    ],
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
