import {
  Heading,
  VStack,
  Text,
  chakra,
  Button,
  Box,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import heroimage from '../public/assets/hero.svg';

const Hero = ({ referencie }) => {
  const fontH1 = ['5xl', '6xl', '7xl', '8xl'];
  return (
    <chakra.header
      ref={referencie}
      h="100vh"
      w="full"
      bg="radial-gradient(100% 225% at 0% 0%, #DE3E3E 0%, #1b283d 100%),
      radial-gradient(100% 225% at 100% 0%, #ff6b00 0%, #ff0000 100%),
      linear-gradient(181deg, #CE63B7 0%, #ED6283 100%),
      radial-gradient(100% 120% at 75% 0%, #A74600 0%, #000000 100%),
      linear-gradient(305deg, #004596 0%, #150093 50%)"
      bgBlendMode="overlay, color-dodge, color-burn, color-dodge, normal"
      transition=".8s"
      id="home"
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        h="full"
        maxW="8xl"
        m="auto"
        px={{ base: '4', lg: 'none' }}
      >
        <VStack align="flex-start" color="white" alignSelf="self-start" mt="40">
          <chakra.span fontFamily="jet" color="tomato">
            👋🏻 Hi, my name is
          </chakra.span>
          <Heading as="h1" fontSize={fontH1}>
            Ariel Chura
          </Heading>
          <Text
            maxW={['full', 'full', '2xl']}
            textAlign={{ base: 'justify', md: 'left' }}
          >
            I&apos;m computer science degree with mention in Systems
            Engineering. I specialize in building (and occasionally designing)
            exceptional digital experiences and building accessible
            human-centered products. Currently, I&apos;m looking for
            professional growth opportunities as a frontend developer.
          </Text>
          <Button
            leftIcon={<FaDownload />}
            variant="secondary"
            textTransform="capitalize"
            w={{ base: 'full', lg: 'xs' }}
          >
            download resume
          </Button>
        </VStack>
        <Box alignSelf="flex-end">
          <Image src={heroimage} alt="Picture of the author" width={600} />
        </Box>
      </Flex>
    </chakra.header>
  );
};
export default Hero;
