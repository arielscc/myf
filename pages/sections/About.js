import { Box, Heading, chakra, Text, HStack, Spacer } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import profile from '../assets/profile.svg';

const About = () => {
  return (
    <Box w="5xl" mx="auto" my="20">
      <Heading fontFamily="jet" my="10">
        <chakra.span color="tomato" fontSize="2xl" fontWeight="900">
          01.{' '}
        </chakra.span>
        Acerca
      </Heading>
      <HStack justify="space-between" spacing="5">
        <Image src={profile} alt="profilees" width={300} height={300} />
        <Text textAlign="justify" w="50%">
          ¡Hola! Soy Ariel Chura, Licenciado en Informatica con mension en
          ingenieria de sistemas y soy La Paz, Bolivia. Disfruto creando cosas
          que estén en Internet, ya sean sitios web, o cualquier otra cosa. Mi
          objetivo es siempre crear productos que proporcionen experiencias de
          rendimiento y accesibilidad. Mientras cursaba los ultimos años de mi
          carrera. Me uní al equipo de Tic-facultativo de la Facultad de
          ciencias puras y naturales donde pude aprender bastante sobre trabajo
          en equipo.
        </Text>
      </HStack>
    </Box>
  );
};

export default About;
