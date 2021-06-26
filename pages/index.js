import { Box, useColorModeValue, VStack } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';

export default function Home() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.700')} transitionDelay=".09s">
      <Header />
      <Hero />
    </Box>
  );
}
