import {
  Heading,
  HStack,
  VStack,
  Text,
  chakra,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import heroimage from '../assets/hero.svg';
const Hero = () => {
  return (
    <chakra.header
      h="100vh"
      w="full"
      bg="gray.50"
      bgGradient={useColorModeValue(
        'linear(to-tr, #2C73D2,#0081CF,#0089BA,#008E9B,#008F7A)',
        'linear(to-tr, purple.900, #1b283d, #1b283d )'
      )}
    >
      <HStack h="100vh" w="8xl" px="24" m="auto" justify="space-between">
        <VStack
          align="flex-start"
          fontFamily="montse"
          color="white"
          spacing="4"
        >
          <Heading fontSize="7xl" dropShadow="md" textShadow="0px 4px gray">
            👋🏻 I&apos;m Ariel
          </Heading>
          <Text fontSize="xl" fontWeight="300">
            Front-end developer
          </Text>
          <Button
            leftIcon={<FaDownload />}
            variant="secondary"
            textTransform="capitalize"
          >
            download cv
          </Button>
        </VStack>
        <Image src={heroimage} alt="Picture of the author" width={600} />
      </HStack>
    </chakra.header>
  );
};

export default Hero;
