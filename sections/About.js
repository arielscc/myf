import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import profile from '../public/assets/profile.svg';
import Container from '../components/Container';

const About = () => (
  <Container title="About" index={1}>
    <Flex
      direction={{ base: 'column', md: 'row' }}
      spacing="5"
      justifyContent="space-between"
      alignItems="center"
      gridGap="5"
    >
      <Image src={profile} alt="profilees" width={300} height={300} />
      <Text textAlign="justify" w={{ base: 'full', lg: 'lg' }}>
        I&apos;m computer science degree with mention in Systems Engineering. I
        specialize in building (and occasionally designing) exceptional digital
        experiences and building accessible human-centered products. Currently,
        I&apos;m looking for professional growth opportunities as a frontend
        developer.
      </Text>
    </Flex>
  </Container>
);

export default About;
