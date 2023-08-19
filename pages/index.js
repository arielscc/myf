import { Box, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
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

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const router = useRouter();
  const values = router.locale === 'es' ? es : en;

  return (
    <AppContext.Provider value={values}>
      <Head>
        <title>Ariel Chura</title>
        <meta
          name="description"
          content="Ariel Chura, Desarrollador web full stack, soy de La Paz Bolivia y me gusta construir cosas que viven en internet"
        />
      </Head>
      <Box
        bg={useColorModeValue('white', 'linear-gradient(to right, #080617, #002c4e, #171725);')}
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
