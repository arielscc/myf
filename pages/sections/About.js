import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import profile from '../assets/profile.svg';
import Container from '../components/Container';

const About = () => (
  <Container>
    <Flex
      direction={{ base: 'column', md: 'row' }}
      spacing="5"
      justifyContent="space-between"
      alignItems="center"
      gridGap="5"
    >
      <Image src={profile} alt="profilees" width={300} height={300} />
      <Text textAlign="justify" w={{ base: 'full', lg: 'lg' }}>
        ¡Hola! Soy Ariel Chura, Licenciado en Informatica con mension en
        ingenieria de sistemas y soy La Paz, Bolivia. Disfruto creando cosas que
        estén en Internet, ya sean sitios web, o cualquier otra cosa. Mi
        objetivo es siempre crear productos que proporcionen experiencias de
        rendimiento y accesibilidad. Mientras cursaba los ultimos años de mi
        carrera. Me uní al equipo de Tic-facultativo de la Facultad de ciencias
        puras y naturales donde pude aprender bastante sobre trabajo en equipo.
      </Text>
    </Flex>
  </Container>
);

export default About;
