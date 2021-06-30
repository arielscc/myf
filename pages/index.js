import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import About from '../sections/About';
import Education from '../sections/Education';
import Experience from '../sections/Experience';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.13,
  });

  return (
    <Box
      bg={useColorModeValue('white', '#1b283d')}
      color={useColorModeValue('gray.700', 'gray.50')}
      transitionDelay=".09s"
      fontFamily="montse"
      fontSize={{ base: 'sm', sm: 'md' }}
      fontWeight="400"
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
  );
}
