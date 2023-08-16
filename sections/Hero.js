import { Box, Button, Flex, Heading, Text, chakra } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { FaDownload } from 'react-icons/fa';
import AppContext from '../context/context';

const Hero = ({ referencie }) => {
  const { hero } = useContext(AppContext);
  const { greet, button, prof, title, description } = hero;
  return (
    <chakra.header
      ref={referencie}
      h="100vh"
      transition=".8s"
      id={title}
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        h="full"
        maxW="6xl"
        m="auto"
        px={{ base: '4', lg: 'none' }}
        align="flex-end"
        flexWrap="wrap"
        alignContent="flex-end"
      >
        <Box color="white" alignSelf="self-start" my="40">
          <chakra.span fontFamily="jet" color="tomato" fontSize="lg">
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
            fontSize={['2xl', '3xl', '4xl', '5xl']}
            lineHeight="10"
            textColor="third"
            fontWeight="500"
          >
            {prof}
          </Text>
          <Text
            maxW={['full', 'full', 'xl']}
            textAlign={{ base: 'justify', md: 'left' }}
            mt="5"
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
            w={{ base: 'full', lg: 'xs' }}
            mt="10"
            role="button"
          >
            {button}
          </Button>
        </Box>
      </Flex>
    </chakra.header>
  );
};
export default Hero;
