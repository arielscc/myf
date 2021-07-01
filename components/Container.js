import React from 'react';
import { Heading, Box, chakra } from '@chakra-ui/react';

const Container = ({ children, title, index }) => (
  <Box
    maxW="5xl"
    mx="auto"
    py="14"
    px={{ base: '4', lg: 'none' }}
    id={title.toLowerCase()}
  >
    <Heading fontFamily="jet">
      <chakra.span color="tomato" fontSize="2xl" fontWeight="900">
        0{index}.{' '}
      </chakra.span>
      {title}
    </Heading>
    {children}
  </Box>
);

export default Container;
