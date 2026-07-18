const es = {
  header: {
    categories: [
      'inicio',
      'habilidades',
      'educación',
      'contacto',
    ],
    icons: ['github', 'twitter', 'linkedin', 'idiomas', 'darkmode'],
    language: 'Idioma',
  },
  hero: {
    title: 'inicio',
    greet: 'Hola, mi nombre es',
    prof: 'Mobile & Full Stack Engineer',
    button: 'Descargar CV',
    description: 'Desarrollador de software con más de 7 años de experiencia, especializado en aplicaciones móviles multiplataforma para iOS y Android con React Native, complementado con frontend (React, Next.js, TypeScript) y backend (Node.js, Ruby on Rails). Con historial en salud digital: plataformas construidas desde cero, publicadas en App Store y Google Play.',
  },
  education: {
    title: 'educación',
    desc_u:
      'Licenciatura en Informática, mención en ingeniería de sistemas informáticos',
    desc_u2: "Facultad de Ciencias Puras y Naturales, Universidad Mayor de San Andrés",
    desc_u3: "La Paz - Bolivia, 2020",
    desc_c:
      'Durante mi formación, logré certificaciones dentro de la universidad y en plataformas en línea.',
    tabs: ['Universidad', 'Platzi'],
    show_more: 'Ver más',
    show_less: 'Ver menos',
  },
  skills: {
    title: 'habilidades',
    desc: 'Tecnologías con las que trabajo a diario para construir productos móviles y web de principio a fin:',
    tabs: ['lenguajes', 'librerías', 'herramientas', 'diseño'],
  },
  experience: {
    title: 'experiencia',
    content: [
      {
        title: 'Senior FullStack Software Engineer',
        company: 'Salud Intercultural',
        date: 'Oct/2023 - Actualidad',
        description: 'Lidero el desarrollo de plataformas clínicas y aplicaciones móviles para el sector salud, desde el diseño hasta el despliegue. Algunas de mis responsabilidades incluyen:',
        country: 'La Paz, BO',
        roles: [
          'App móvil para iOS y Android con React Native y Firebase, orientada al seguimiento de pacientes y la comunicación con el personal médico.',
          'Diseño y desarrollo end-to-end de SIGECO, plataforma clínica y administrativa con Next.js, React, TypeScript, PostgreSQL y Prisma.',
          'Flujos clínicos trazables y control de acceso por roles: derivaciones, historial de estados, diagnósticos, recetas, órdenes de análisis y resultados.',
          'Sistema transaccional de ventas, cobros e inventario con saldos, descuentos, múltiples formas de pago y movimientos de caja automáticos.',
          'Sitio institucional y CMS con Payload CMS, SEO, analítica y despliegue en Vercel, con pruebas unitarias e integración en Vitest.',
        ],

      },
      {
        title: 'Frontend / Mobile Engineer (SemiSenior)',
        company: 'Enara Health',
        date: 'Jul/2021 - Ago/2023',
        description: 'Formé parte del equipo que construyó una plataforma de salud digital para iOS y Android. Algunas de mis responsabilidades incluyen:',
        country: 'California, USA (Remoto)',
        roles: [
          'Desarrollo end-to-end de una plataforma de salud para iOS y Android con React Native: chat en tiempo real, videollamadas, notificaciones push y seguimiento clínico.',
          'Arquitectura frontend móvil y componentes reutilizables, optimizando rendimiento y consistencia visual entre dispositivos y sistemas operativos.',
          'Módulos nativos en Android para funcionalidades del dispositivo no disponibles en las APIs estándar de React Native.',
          'Servicios con Node.js y Ruby on Rails para gestión de información clínica, sincronización de datos y comunicación con la plataforma.',
          'Integración con APIs de terceros, apps de salud y aseguradoras para habilitar seguimiento clínico e intercambio de información.',
          'Pruebas automatizadas con Jest, Detox y Maestro, y pipelines CI/CD para distribución continua en App Store y Google Play.',
        ],

      },
      {
        title: 'Desarrollador de Software',
        company: 'TIC Facultativo UMSA / FCPN-TIC',
        date: '2018 - 2019',
        country: 'La Paz, BO',
        roles: [
          'Desarrollo de nuevas funcionalidades e interfaces de usuario para productos institucionales de la universidad.',
          'Administración de bases de datos y generación de reportes para distintas unidades académicas.',
        ],
      },

    ]
  },
  contact: {
    title: 'contacto',
    desc: 'Hola de nuevo, Si quieres construir cosas increíbles, o quieres contactarte conmigo por alguna sugerencia o pregunta, puedes enviarme un correo, o un mensaje interno en mis redes sociales.',
    button: 'Mensaje',
  },
  footer: {
    desc: 'Diseñado & Desarrollado por Ariel Chura',
  },
};

export default es;
