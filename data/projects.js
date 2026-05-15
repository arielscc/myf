const baseProjects = [
  {
    id: 1,
    title: 'Platzi Badges',
    links: {
      github: 'https://github.com/arielscc/platziBadges',
      live: 'https://platzi-badge.netlify.app',
    },
    tags: ['react', 'javascript', 'html', 'css'],
  },
  {
    id: 2,
    title: 'Gif App',
    links: {
      github: 'https://github.com/arielscc/react-GifApp',
      live: 'https://arielscc.github.io/react-GifApp/',
    },
    tags: ['react', 'javascript', 'html', 'tailwind'],
  },
  {
    id: 3,
    title: 'Heroes App',
    links: {
      github: 'https://github.com/arielscc/heroes-app',
      live: 'https://heroes-ap.netlify.app/#/marvel',
    },
    tags: ['react', 'javascript', 'html', 'tailwind'],
  },
  {
    id: 4,
    title: '100Tifico',
    links: {
      github: 'https://github.com/arielscc/rick-and-morty#readme',
      live: 'https://nostalgic-lamport-e31690.netlify.app/',
    },
    tags: ['webpack', 'javascript', 'html', 'css'],
  },
  {
    id: 5,
    titles: {
      es: 'Guía Webpack',
      en: 'Webpack Guide',
    },
    links: {
      github: 'https://github.com/arielscc/Webpack',
      live: '',
    },
    tags: ['webpack', 'javascript'],
  },
  {
    id: 6,
    titles: {
      es: 'Guía a11y',
      en: 'a11y Guide',
    },
    links: {
      github: 'https://github.com/arielscc/a11yGuideLine',
      live: '',
    },
    tags: ['html', 'css', 'md'],
  },
];

const descriptions = {
  es: [
    'Platzi Badges es una plataforma que lleva el registro de los asistentes a la Platzi Conf, haciendo posible que cada usuario registrado pueda ingresar su información personal. Cada uno de ellos tendrá un rol diferente y esto se verá reflejado en su badge. El proyecto también permite listar a todos los participantes y filtrarlos por tipo de rol, o hacer búsqueda por nombre.',
    'En este proyecto se implementan los fundamentos de ReactJs como manejo de estado, useEffect, peticiones, asincronismo y más. Está realizado haciendo uso de TailwindCss para el frontend y se trata de un buscador de imágenes gifs, el cual devuelve 10 imágenes relacionadas a la búsqueda.',
    'Este proyecto fue creado usando React y TailwindCss. Se trata de un pequeño SPA que tiene integrado conceptos de react-router e implementa la seguridad y protección de rutas.',
    '100Tifico presenta una lista de personajes de la famosa serie Rick & Morty. Este proyecto es una Single Page Application, haciendo uso de JavaScript Vanilla y usa un entorno de desarrollo basado en Webpack.',
    'Esta es una guía básica sobre la configuración de cómo usar el paquete Webpack en su versión 4.',
    'Esta es una guía general para garantizar la accesibilidad dentro de cualquier sitio web. En la guía se presentan especificaciones WCAG, ARIA y demás.',
  ],
  en: [
    'Platzi Badges is a platform that tracks Platzi Conf attendees and lets each registered user enter personal information. Each attendee has a different role, reflected in their badge. The project also lists all participants and supports filtering by role or searching by name.',
    'This project implements React fundamentals such as state management, useEffect, requests, asynchronous flows, and more. It uses TailwindCss on the frontend and works as a GIF image search app that returns 10 images related to the search term.',
    'This project was created with React and TailwindCss. It is a small SPA that integrates react-router concepts and implements route protection.',
    '100Tifico shows a list of characters from the Rick & Morty series. This project is a Single Page Application built with vanilla JavaScript and a Webpack-based development environment.',
    'This is a basic guide for configuring and using Webpack version 4.',
    'This is a general guide for ensuring accessibility on websites. The guide presents WCAG, ARIA, and related specifications.',
  ],
};

const projects = {
  es: baseProjects.map((project, index) => ({
    ...project,
    title: project.titles?.es || project.title,
    desc: descriptions.es[index],
  })),
  en: baseProjects.map((project, index) => ({
    ...project,
    title: project.titles?.en || project.title,
    desc: descriptions.en[index],
  })),
};

export default projects;
