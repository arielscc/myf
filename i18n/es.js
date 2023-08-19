const es = {
  header: {
    categories: [
      'inicio',
      'habilidades',
      'educación',
      'proyectos',
      'contacto',
    ],
    icons: ['github', 'twitter', 'instagram', 'idiomas', 'darkmode'],
  },
  hero: {
    title: 'inicio',
    greet: 'Hola, mi nombre es',
    prof: 'Software Engineer',
    button: 'Descargar CV',
    description: 'Ingeniero con más de tres años de experiencia en desarrollo de productos, especializado en JavaScript, TypeScript y NodeJS. Mi enfoque es ofrecer soluciones de alta calidad en rendimiento, accesibilidad y buenas prácticas.',
  },
  education: {
    title: 'educación',
    desc_u:
      'Licenciatura en Informática, mención en ingeniería de sistemas informáticos',
    desc_u2: "Facultad de Ciencias Puras y Naturalés, Universidad Mayor de San Andrés",
    desc_u3: "La Paz - Bolivia, 2020",
    desc_c:
      'Durante mi formación, logré certificaciones dentro de la universidad y en plataformas en línea.',
  },
  skills: {
    title: 'habilidades',
    desc: 'En mis tiempos libres pude capacitarme en diferentes tecnologias, algunas de ellas son.',
    tabs: ['lenguajes', 'librerias', 'herramientas', 'diseño'],
  },
  experience: {
    title: 'experiencia',
    content: [
      {
        title: 'Mobile Engineer / Full Stack',
        company: 'Enara Health',
        date: 'Ago/2021 - Actualidad (2 años)',
        description: 'Actualmente soy parte del equipo de desarrollo deaplicaciones móviles, pero también he contribuido en variosproyectos con diversos lenguajes y tecnologías. Algunas demis responsabilidades incluyen:',
        country: 'California, USA',
        roles: [
          'Desarrollador de aplicaciones móviles multiplataforma paraAndroid/iOS (React Native).',
          'Desarrollador de aplicaciones web (React) - implementación defunciones y mantenimiento de interfaces de usuario.',
          'Desarrollador de Microservicios (Node.js) - ArquitecturaEscalable.',
          'Desarrollador en proyectos Ruby on Rails - Adición defunciones específicas.',
          'Desarrollo de módulos nativos para Android.'
        ],

      },
      {
        title: 'Frontend Developer / Tech Support',
        company: 'Facultad de Ciencias Puras y Naturales',
        date: 'Ene/2018 - Dic/2019 (2 años)',
        country: 'La Paz, BO',
        roles: [
          'Responsable del soporte de los sistemas de administración de la facultad',
          'Encargado de soporte de redes y comunicación de la facultad',
          'Diseño de interfaces de usuario y Diseño grafico',
          'Administración de base de datos',
        ],
      },
      {
        title: 'Encargado de sistemas',
        company: 'Federacion de Asociaciones Municiapales de Bolivia',
        date: 'Ene/2017 - Dic/2017 (1 año)',
        country: 'La Paz, BO',
        roles: [
          'Encargado del soporte de sistemas de administración y gestión de recursos y correspondencia',
          'Encargado del soporte de redes e infraestructura de la organización',
        ],
      },

    ]
  },
  list_projects: {
    title: 'proyectos',
    type: 'proyecto destacado',
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
          'Este proyecto es una Single Page App, desarrollada en Vuejs v2 Con el objetivo de ver el valor de las criptomonedas, buscar mejores intercambios y presenta un grafico del estado actual de cada criptomoneda.',
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
          'Este proyecto es una Single Page App y tiene como objetivo la venta de souvenirs, este proyecto esta implementado con Reactjs y tambien implementa una pasarela de pagos y localizacion via Google Maps',
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
          'Este proyecto es un sitio para ver videos de anime, filtrarlos por reelevancia, popularidad y calificación. Este sitio web implementa de forma nativa Server-Side-Rendering, y es una PWA',
        tags: ['Javascript', 'Kitsu.io', 'Css', 'Html'],
      },
    ],
  },
  contact: {
    title: 'contacto',
    desc: 'Hola de nuevo, Si quieres construir cosas increíbles o quieres contactarte conmigo por alguna sugerencia o pregunta puedes enviarme un correo, o un mensaje interno en mis redes sociales.',
  },
  footer: {
    desc: 'Diseñado & Desarrollado por Ariel Chura',
  },
};

export default es;
