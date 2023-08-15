import { Box, Heading, chakra } from '@chakra-ui/react';
import React from 'react';

const Container = ({ children, title, index }) => (
  <Box
    as="section"
    maxW="5xl"
    mx="auto"
    pt={{ base: '8', md: '14' }}
    px={{ base: '4', lg: 'none' }}
    id={title}
  >
    <Heading
      fontFamily="jet"
      mb="10"
      textTransform="capitalize"
      fontSize={{ base: '2xl', md: '4xl' }}
    >
      <chakra.span
        color="tomato"
        fontSize={{ base: 'sm', md: '2xl' }}
        fontWeight="900"
      >
        0{index}.{' '}
      </chakra.span>
      {title}
    </Heading>
    {children}
  </Box>
);

export default Container;
