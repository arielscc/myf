const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002'
).replace(/\/$/, '');

const previewImage = '/portfolio-preview.png';

const metadata = {
  es: {
    title: 'Ariel Chura | Ingeniero de Software',
    description:
      'Portafolio de Ariel Chura, ingeniero de software especializado en JavaScript, TypeScript, Node.js, React y desarrollo de productos digitales.',
    locale: 'es_BO',
    path: '/',
  },
  en: {
    title: 'Ariel Chura | Software Engineer',
    description:
      'Portfolio of Ariel Chura, software engineer specialized in JavaScript, TypeScript, Node.js, React, and digital product development.',
    locale: 'en_US',
    path: '/en',
  },
};

const absoluteUrl = path =>
  `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;

export const getSeoMetadata = (locale = 'es') => {
  const current = metadata[locale] || metadata.es;

  return {
    ...current,
    siteName: 'Ariel Chura Portfolio',
    canonicalUrl: absoluteUrl(current.path),
    alternateLocale: locale === 'en' ? metadata.es.locale : metadata.en.locale,
    imageUrl: absoluteUrl(previewImage),
    imagePath: previewImage,
    imageWidth: '1200',
    imageHeight: '630',
    imageType: 'image/png',
    imageAlt: 'Ariel Chura portfolio preview',
    twitterCreator: '@arielschura',
    alternateUrls: {
      es: absoluteUrl(metadata.es.path),
      en: absoluteUrl(metadata.en.path),
    },
  };
};
