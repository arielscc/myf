import React from 'react';
import { Heading, Box, chakra } from '@chakra-ui/react';

const Container = ({ children, title, index }) => (
  <Box maxW="5xl" mx="auto" my="20" px={{ base: '4', lg: 'none' }}>
    <Heading fontFamily="jet" my="10">
      <chakra.span color="tomato" fontSize="2xl" fontWeight="900">
        0{index}.{' '}
      </chakra.span>
      {title}
    </Heading>
    {children}
  </Box>
);

export default Container;
