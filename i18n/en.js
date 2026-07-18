const categories = [
  'home',
  'skills',
  'education',
  'contact',
];
const en = {
  header: {
    categories,
    icons: ['github', 'twitter', 'linkedin', 'languages', 'darkmode'],
    language: 'Language',
  },
  hero: {
    title: 'home',
    greet: 'Hi, my name is',
    prof: 'Mobile & Full Stack Engineer',
    button: 'download resume',
    description: 'Software developer with over 7 years of experience, specialized in cross-platform mobile apps for iOS and Android with React Native, complemented by frontend (React, Next.js, TypeScript) and backend (Node.js, Ruby on Rails). Proven track record in digital health: platforms built from scratch and published on the App Store and Google Play.',
  },
  education: {
    title: 'education',
    desc_u: `Bachelor's Degree in Computer Science with a specialization in Computer Systems Engineering`,
    desc_u2: 'Faculty of Pure and Natural Sciences, Universidad Mayor de San Andrés',
    desc_u3: "La Paz - Bolivia, 2020",
    desc_c:
      'During my education, I earned certifications from the university and online learning platforms.',
    tabs: ['University', 'Platzi'],
    show_more: 'Show More',
    show_less: 'Show Less',
  },
  skills: {
    title: 'skills',
    desc: 'Technologies I work with daily to build mobile and web products end to end:',
    tabs: ['languages', 'libraries', 'tools', 'design'],
  },
  experience: {
    title: 'experience',
    content: [
      {
        title: 'Senior FullStack Software Engineer',
        company: 'Salud Intercultural',
        date: 'Oct/2023 - present',
        description: 'I lead the development of clinical platforms and mobile apps for the healthcare sector, from design to deployment. Some of my responsibilities include:',
        country: 'La Paz, BO',
        roles: [
          'Mobile app for iOS and Android with React Native and Firebase, focused on patient follow-up and communication with medical staff.',
          'End-to-end design and development of SIGECO, a clinical and administrative platform with Next.js, React, TypeScript, PostgreSQL, and Prisma.',
          'Traceable clinical workflows and role-based access control: referrals, status history, diagnoses, prescriptions, lab orders, and results.',
          'Transactional system for sales, payments, and inventory with balances, discounts, multiple payment methods, and automatic cash movements.',
          'Institutional site and CMS with Payload CMS, SEO, analytics, and deployment on Vercel, with unit and integration tests using Vitest.',
        ],

      },
      {
        title: 'Frontend / Mobile Engineer (SemiSenior)',
        company: 'Enara Health',
        date: 'Jul/2021 - Aug/2023',
        description: 'I was part of the team that built a digital health platform for iOS and Android. Some of my responsibilities include:',
        country: 'California, USA (Remote)',
        roles: [
          'End-to-end development of a health platform for iOS and Android with React Native: real-time chat, video calls, push notifications, and clinical tracking.',
          'Mobile frontend architecture and reusable components, optimizing performance and visual consistency across devices and operating systems.',
          'Native Android modules for device features not available through the standard React Native APIs.',
          'Services with Node.js and Ruby on Rails for clinical data management, synchronization, and communication with the platform.',
          'Integration with third-party APIs, health apps, and insurers to enable clinical follow-up and data exchange.',
          'Automated testing with Jest, Detox, and Maestro, and CI/CD pipelines for continuous delivery to the App Store and Google Play.',
        ],

      },
      {
        title: 'Software Developer',
        company: 'TIC Facultativo UMSA / FCPN-TIC',
        date: '2018 - 2019',
        country: 'La Paz, BO',
        roles: [
          'Development of new features and user interfaces for the university institutional products.',
          'Database management and report generation for various academic units.',
        ],
      },

    ]
  },
  contact: {
    title: 'contact',
    desc: 'Hello again, If you want to build incredible things or want to contact me with any suggestions or questions you can send me an email, or an internal message on my social networks.',
    button: 'Message',
  },
  footer: {
    desc: 'Designed & Built by Ariel Chura',
  },
};

export default en;
