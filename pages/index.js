import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

import es from '../i18n/es';
import en from '../i18n/en';

import Header from '../sections/Header';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Education from '../sections/Education';
import Experience from '../sections/Experience';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import AppContext from '../context/context';

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
        bg={useColorModeValue('white', '#1b283d')}
        color={useColorModeValue('gray.700', 'gray.100')}
        transitionDelay=".05s"
        fontFamily="montse"
        fontSize={{ base: 'sm', sm: 'md' }}
      >
        <Header inview={inView} />
        <Hero referencie={ref} />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </AppContext.Provider>
  );
}
