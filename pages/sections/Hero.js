import {
  Heading,
  HStack,
  VStack,
  Text,
  chakra,
  Button,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import heroimage from '../assets/hero.svg';

const Hero = ({ referencie }) => (
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
  >
    <HStack h="full" w="8xl" m="auto" justify="space-between">
      <VStack
        align="flex-start"
        fontFamily="montse"
        color="white"
        alignSelf="self-start"
        my="40"
      >
        <chakra.span fontFamily="jet" color="tomato">
          👋🏻 Hi, my name is
        </chakra.span>
        <Heading fontSize="8xl" dropShadow="md" lineHeight="50px">
          Ariel Chura
        </Heading>
        <Text fontSize="xl" fontWeight="300" pt="5">
          Front-end developer
        </Text>
        <Button
          leftIcon={<FaDownload />}
          variant="secondary"
          textTransform="capitalize"
          w="sm"
        >
          download cv
        </Button>
      </VStack>
      <Box alignSelf="flex-end">
        <Image src={heroimage} alt="Picture of the author" width={600} />
      </Box>
    </HStack>
  </chakra.header>
);
export default Hero;
