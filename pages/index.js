import { Box, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import AppContext from '../context/context';
import Contact from '../sections/Contact';
import Education from '../sections/Education';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';

import en from '../i18n/en';
import es from '../i18n/es';
import { getSeoMetadata } from '../lib/seo';

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const router = useRouter();
  const values = router.locale === 'es' ? es : en;
  const seo = getSeoMetadata(router.locale);

  return (
    <AppContext.Provider value={values}>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="author" content="Ariel Chura" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={seo.canonicalUrl} />
        <link rel="alternate" hrefLang="es" href={seo.alternateUrls.es} />
        <link rel="alternate" hrefLang="en" href={seo.alternateUrls.en} />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={seo.alternateUrls.es}
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={seo.siteName} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonicalUrl} />
        <meta property="og:locale" content={seo.locale} />
        <meta property="og:locale:alternate" content={seo.alternateLocale} />
        <meta property="og:image" content={seo.imageUrl} />
        <meta property="og:image:secure_url" content={seo.imageUrl} />
        <meta property="og:image:type" content={seo.imageType} />
        <meta property="og:image:width" content={seo.imageWidth} />
        <meta property="og:image:height" content={seo.imageHeight} />
        <meta property="og:image:alt" content={seo.imageAlt} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.twitterCreator} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.imageUrl} />
        <meta name="twitter:image:alt" content={seo.imageAlt} />
      </Head>
      <Box
        bg={useColorModeValue(
          'white',
          'linear-gradient(to right, #080617, #002c4e, #171725);'
        )}
        color={useColorModeValue('gray.700', 'gray.100')}
        transitionDelay=".05s"
        fontFamily="montse"
        fontSize={{ base: 'sm', sm: 'md' }}
      >
        <Header inview={inView} />
        <Hero referencie={ref} />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </AppContext.Provider>
  );
}
