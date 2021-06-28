import { Box, useColorModeValue, VStack } from '@chakra-ui/react';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <Box
      bg={useColorModeValue('white', '#1b283d')}
      color={useColorModeValue('gray.700', 'gray.50')}
      transitionDelay=".09s"
      fontFamily="montse"
      fontSize="lg"
      fontWeight="400"
    >
      <Header />
      <Hero />
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
