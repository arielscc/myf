import { Box, Button, Flex, Heading, Text, chakra } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { FaDownload } from 'react-icons/fa';
import AppContext from '../context/context';
import Experience from './Experience';

const Hero = ({ referencie }) => {
  const { hero } = useContext(AppContext);
  const { greet, button, prof, title: heroTitle, description } = hero;
  return (
    <chakra.header
      ref={referencie}
      py={{ base: '20', lg: '32' }}
      transition=".8s"
      minH="100vh"
      id={heroTitle}
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        h="full"
        maxW={{ base: 'full', lg: '6xl' }}
        m="auto"
        px={{ base: '4', lg: 'none' }}
        flexWrap="wrap"
      >
        <Box color="white" width={{ base: 'full', lg: '50%' }} >
          <chakra.span fontFamily="jet" fontSize="lg">
            👋🏻 {greet}
          </chakra.span>
          <Heading
            as="h1"
            fontSize={['3xl', '4xl', '5xl', '6xl', '7xl', '8xl']}
          >
            Ariel Chura
          </Heading>
          <Text
            maxW={['full', 'full', 'xl']}
            textAlign={{ base: 'justify', md: 'left' }}
            fontSize={['2xl', '3xl', '4xl']}
            lineHeight="10"
            textColor="cyan.500"
            fontWeight="500"
          >
            {prof}
          </Text>
          <Text
            textAlign={{ base: 'justify', md: 'left' }}
            mt="5"
            maxW={{ base: 'full', lg: 'md' }}
          >
            {description}
          </Text>
          <Button
            as="a"
            href="/assets/resume_ariel_chura.pdf"
            target="_blank"
            rel="noopener"
            leftIcon={<FaDownload />}
            variant="secondary"
            textTransform="capitalize"
            w={{ base: 'full', md: 'xs' }}
            mt="10"
            role="button"
          >
            {button}
          </Button>
        </Box>
        <Experience />
      </Flex>
    </chakra.header >
  );
};
export default Hero;
